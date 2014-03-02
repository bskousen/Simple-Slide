$(function() {
    $('.simple-slide img').slice(0).hide();
    setInterval(function() {
        $('.simple-slide :first-child').fadeOut().next('img').fadeIn().end().appendTo('.simple-slide');
    }, 5000); //Change if needed to speed up or slow down in ms
});