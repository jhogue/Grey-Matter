//Insert awesome js here!

$(document).ready(function() {
  
  
  /* 
   * Animate some scrolling for smoother transitions 
   * http://css-tricks.com/snippets/jquery/smooth-scrolling/
   */
  $(function() {
    $('.js-smooth-scroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
        }
      }
    });
  });
});
