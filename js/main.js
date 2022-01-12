// js script
const slider1 = document.querySelector('.active .carousel-opt1');
const slider2 = document.querySelector('.owl-item .carousel-opt2');
const slider3 = document.querySelector('.owl-item .carousel-opt3');
const count1 = document.querySelector('.count1');
const next_btn = document.querySelector('.next-btn');
const addcls = () => {

}

function counter() {
    if (slider1) {
        count1.classList.add('bolder');
    }
}
counter();



// Owl carousel install...
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,

    });
    $('.next-btn').click(function() {
        owl.trigger('next.owl.carousel');
    })
});