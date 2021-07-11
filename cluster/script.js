$(document).ready(function () {
   $('.notion-navbar').append('<button id="nav-toggle" class="js-menu menu" type="button"><span class="bar"></span></button>');
  $('#nav-toggle').click(function(){
      $('.notion-root > .notion-column-list > .notion-column:nth-child(1)').toggleClass('test-nav')
  });

  var isActive = false;
  $('.js-menu').on('click', function() {
  	if (isActive) {
  		$(this).removeClass('active');
  		$('body').removeClass('menu-open');
  	} else {
  		$(this).addClass('active');
  		$('body').addClass('menu-open');
  	}
  	isActive = !isActive;
  });
});
