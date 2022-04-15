$(function () {

        $('.slider1_inner').slick({
                arrows: false,
                dots: true
        });
        $('.slider2_slider-items').slick({
                arrows: false,
                dots: true,
                variableWidth: true,

        }); //Без данной команды, крашился второй слайдер.
        $('.slider3_items').slick({
                arrows: false,
                dots: true,
                variableWidth: true,
                // slidesToScroll: 3,
        });
});