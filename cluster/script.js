$(document).ready(function () {
   if ($('#nav-toggle').length === 0) {
      $('.notion-navbar').append('<button id="nav-toggle" class="js-menu menu" type="button"><span class="bar"></span></button>');
   };
   
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

/*
 * jQuery outside events - v1.1 - 3/16/2010
 * http://benalman.com/projects/jquery-outside-events-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,c,b){$.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup".split(" "),function(d){a(d)});a("focusin","focus"+b);a("focusout","blur"+b);$.addOutsideEvent=a;function a(g,e){e=e||g+b;var d=$(),h=g+"."+e+"-special-event";$.event.special[e]={setup:function(){d=d.add(this);if(d.length===1){$(c).bind(h,f)}},teardown:function(){d=d.not(this);if(d.length===0){$(c).unbind(h)}},add:function(i){var j=i.handler;i.handler=function(l,k){l.target=k;j.apply(this,arguments)}}};function f(i){$(d).each(function(){var j=$(this);if(this!==i.target&&!j.has(i.target).length){j.triggerHandler(e,[i.target])}})}}})(jQuery,document,"outside");
