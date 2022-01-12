$(document).ready(function() {
    // Owl carousel install...
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        loop: true,
        lazyLoad: true,
        navigation: true,
        smartSpeed: 1000

    });
    $('.next-btn').click(function() {
        owl.trigger('next.owl.carousel');
    })
});