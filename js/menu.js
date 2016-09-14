$(document).ready(function () {
     $(".about-button").on('touchstart click', function() {
         $(".pop").fadeIn(500);
     });
     $(".about-button").on('touchstart click', function() {
         $(".list").hide();
     });

     $(".pop > span, .pop, .menu").click(function () {
         $(".pop").fadeOut(500);
     });
      $(".pop > span, .pop, .menu").click(function () {
         $(".list").show();
     });
 });

$('li>a').on('click touchend', function(e) {
      var el = $(this);
      var link = el.attr('href');
      window.location = link;
   });

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });





