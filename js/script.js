window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });


	$(document).ready(function(){
		$('.carousel__inner').slick({ 
			dots: true,
			infinite: true,
			speed: 500,
			arrows: false,
			slidesToShow: 1,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						arrows: false,
						dots: true
					}
				}
			]
		});
	});
});