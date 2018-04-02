$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 100) {
        $("#menu").addClass("active");
    } else {
        $("#menu").removeClass("active");
    }

});



$(".navbar-toggle").click(function(){
  $(this).toggleClass("open");
});


$(document).ready(function() {
  $(".logotype").click(function() {
    $("html, body").animate({scrollTop: $("#inicio").offset().top}, 1000);});
  $(".sec").click(function() {
    $("html, body").animate({scrollTop: $("#sobremi").offset().top}, 1000);});
  $(".sec1").click(function() {
    $("html, body").animate({scrollTop: $("#equipos").offset().top}, 1000);});
  $(".sec2").click(function() {
    $("html, body").animate({scrollTop: $("#servicios").offset().top}, 1000);});
  $(".sec3").click(function() {
    $("html, body").animate({scrollTop: $("#mistrabajos").offset().top}, 1000);});
  $(".sec4").click(function() {
    $("html, body").animate({scrollTop: $("#habilidades").offset().top}, 1000);});
  $(".sec5").click(function() {
    $("html, body").animate({scrollTop: $("#contacto").offset().top}, 1000);});
  $(".farriba").click(function() {
    $("html, body").animate({scrollTop: $("#inicio").offset().top}, 1000);});
});
