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