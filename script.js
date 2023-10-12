const swiper = new Swiper(".mySwiper", {
   
    slidesPerView : 1,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView : 2.9,
            spaceBetween: 0

        }
    }
})



/*Menu Hamburguesa */

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
