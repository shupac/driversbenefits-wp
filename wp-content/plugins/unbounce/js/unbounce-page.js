// Unbounce-Page.php JS Functions

function swap_primary_buttons(current_primary, current_secondary) {
  var $ = jQuery;
  $('#' + current_primary).removeClass('button-primary');
  $('#' + current_secondary).addClass('button-primary');
}
