/*
jQuery(document).ready(function() {
    jQuery(".views-field-title").hide();
    jQuery('.jcarousel-item-horizontal').mouseenter(function() {
    jQuery(this).children(".views-field-title").fadeIn();
  });
  jQuery('.jcarousel-item-horizontal').mouseleave(function() {
    jQuery(this).children(".views-field-title").hide();
  });
});
*/

jQuery(document).ready(function() {
    jQuery(".views-field-title").hide();
    jQuery('.jcarousel-item-horizontal').mouseenter(function() {
        jQuery(this).children('.views-field-title').fadeIn('fast');
  });
    jQuery('.jcarousel-item-horizontal').mouseleave(function() {
        jQuery('.views-field-title').hide();
    // Animation complete.
  });

});