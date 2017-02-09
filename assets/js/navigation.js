$(document).ready(function() {
  $('.main-navigation__menus--mobile').click(function() {
    if ($('html').hasClass('toggled')) {
      $('html').removeClass('toggled');
      $('.main-navigation__menus').removeClass('overlay');
      $('.main-navigation__menus--desktop--menu-item:last-child').removeClass('button button__primary');

    } else {
      $('html').addClass('toggled');
      $('.main-navigation__menus').addClass('overlay');
      $('.main-navigation__menus--desktop--menu-item:last-child').addClass('button button__primary');
    }
  })
});