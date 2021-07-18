$(document).ready(function () {
  // Append nav button
  if ($('#nav-toggle').length === 0) {
    $('.notion-navbar').append('<div id="nav-toggle" class="js-menu menu"><span class="bar"></span></div>');
   };
   
  // Init close nav function
  var closeNav = () => {
    // Nav icon animation
    $('.js-menu').removeClass('active');
    $('body').removeClass('menu-open');
    // Hide nav
    $('.notion-root > .notion-column-list > .notion-column:nth-child(1)').removeClass('show-nav');
    // Reset click
    $('.js-menu').click();
  };

  // Click nav button toggle nav visibility
  $(document).on('click', '#nav-toggle', function(){
      $('.notion-root > .notion-column-list > .notion-column:nth-child(1)').toggleClass('show-nav')
  });

  // Nav menu animation
  var isActive = false;
  $(document).on('click', '.js-menu', function() {
  	if (isActive) {
  		$(this).removeClass('active');
  		$('body').removeClass('menu-open');
  	} else {
  		$(this).addClass('active');
  		$('body').addClass('menu-open');
  	}
  	isActive = !isActive;
  });

  // When click on any link when menu is open close menu
   $(document).on('click', 'a', function() {
     if(isActive) {
        closeNav()
     }
  });
});
