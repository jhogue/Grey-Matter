$(document).ready(function() {


	// Development Only scripts

  // Add an anchor link around a header with an ID present
  $("h1[id], h2[id], h3[id], h4[id]").each(function(i) {
    var current = $(this),
      iden = current.attr("id");
    if ( iden != null) {
      current.wrapInner('<a href="#'+ iden +'" class="js-smooth-scroll"></a>');
    }
  });
  

  $(window).on('resize', showSize);
	showSize();

	function showSize() {
		$('#size').html( $(window).width() + 'px x ' + $(window).height() + 'px');
	}
});