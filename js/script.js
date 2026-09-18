$(document).ready(function () {
    $('.nav-toggle-btn').on('click', function () {

        $('.nav').slideToggle(250);

        $(this).toggleClass('is-active');
    });

    $('.nav__link').on('click', function () {
        if ($(window).width() <= 767) {
            $('.nav').slideUp(250);
            $('.nav-toggle-btn').removeClass('is-active');
        }
    });

    $(window).on('resize', function () {
        if ($(window).width() > 767) {
            $('.nav').removeAttr('style');
            $('.nav-toggle-btn').removeClass('is-active');
        }
    });

});

const $portfolioContainer = $('#portfolio-container');

    $.getJSON('data/portfolio.json')
        .done(function (data) {
            $portfolioContainer.empty();

            $.each(data, function (index, item) {
                const cardHtml = `
                    <article class="card" data-index="${index}">
                        <img src="${item.image}" alt="Скриншот проекта «${item.title}»" class="card__img">
                        <div class="card__body">
                            <h3 class="card__title">${item.title}</h3>
                            <p class="card__text">${item.description}</p>
                            <a href="${item.link}" target="_blank" rel="noopener" class="card__link">Исходный код →</a>
                        </div>
                    </article>
                `;
                $portfolioContainer.append(cardHtml);
            });

            $portfolioContainer.find('.card').each(function (i) {
                $(this)
                    .css('opacity', 0)
                    .delay(i * 700)
                    .animate({ opacity: 1 }, 2000);
            });
        })
        .fail(function (jqxhr, textStatus, error) {
            console.error('Ошибка загрузки portfolio.json:', textStatus, error);
            $portfolioContainer.html(
                '<p class="portfolio__error">Не удалось загрузить работы. Попробуйте позже.</p>'
            );
        });


const $modal = $('#contact-modal');

    $('#open-contact-modal').on('click', function () {
        $modal.css('display', 'flex').hide().fadeIn(250);
        $modal.attr('aria-hidden', 'false');
        $('body').css('overflow', 'hidden');
    });

    $modal.on('click', '[data-close]', function () {
        closeModal();
    });

    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' && $modal.is(':visible')) {
            closeModal();
        }
    });

    function closeModal() {
        $modal.fadeOut(250, function () {
            $modal.attr('aria-hidden', 'true');
            $('body').css('overflow', '');
            $('#contact-form')[0].reset();
            $('.form-error').text('');
            $('#form-status').removeClass('is-success is-error').text('');
        });
    }


    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError($input, message) {
        const id = $input.attr('id');
        $(`[data-error-for="${id}"]`).text(message);
        $input.addClass('is-invalid');
    }

    function clearError($input) {
        const id = $input.attr('id');
        $(`[data-error-for="${id}"]`).text('');
        $input.removeClass('is-invalid');
    }

    function validateField($input) {
        const value = $.trim($input.val());
        const name = $input.attr('name');

        if (name === 'name') {
            if (value.length < 2) {
                showError($input, 'Введите имя (минимум 2 символа)');
                return false;
            }
        } else if (name === 'email') {
            if (!validateEmail(value)) {
                showError($input, 'Введите корректный email');
                return false;
            }
        } else if (name === 'message') {
            if (value.length < 10) {
                showError($input, 'Сообщение должно быть не короче 10 символов');
                return false;
            }
        }
        clearError($input);
        return true;
    }

    $('#contact-form').on('blur', 'input, textarea', function () {
        validateField($(this));
    });

    $('#contact-form').on('input', 'input, textarea', function () {
        if ($(this).hasClass('is-invalid')) {
            clearError($(this));
        }
    });


    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        const $name = $('#cf-name');
        const $email = $('#cf-email');
        const $message = $('#cf-message');
        const $status = $('#form-status');
        const $submit = $('#contact-submit');

        const isNameOk = validateField($name);
        const isEmailOk = validateField($email);
        const isMessageOk = validateField($message);

        if (!isNameOk || !isEmailOk || !isMessageOk) {
            $status
                .removeClass('is-success')
                .addClass('is-error')
                .text('Пожалуйста, исправьте ошибки в форме.');
            return;
        }

        const formData = {
            name: $name.val().trim(),
            email: $email.val().trim(),
            message: $message.val().trim()
        };

        $submit.prop('disabled', true).text('Отправка...');
        $status.removeClass('is-success is-error').text('');

        $.ajax({
            url: 'https://httpbin.org/post',
            method: 'POST',
            data: formData,
            dataType: 'json',
            timeout: 5000
        })
        .done(function (response) {
            $status
                .removeClass('is-error')
                .addClass('is-success')
                .text('Спасибо! Ваше сообщение отправлено.');

            setTimeout(function () {
                closeModal();
            }, 2000);
        })
        .fail(function () {
            $status
                .removeClass('is-error')
                .addClass('is-success')
                .text('Спасибо! Ваше сообщение отправлено (симуляция).');

            setTimeout(function () {
                closeModal();
            }, 2000);
        })
        .always(function () {
            $submit.prop('disabled', false).text('Отправить');
        });
    });