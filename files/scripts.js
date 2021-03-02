
jQuery(document).ready(function(){

  window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  if (mobilecheck()) {
    jQuery('img').on('click', function() {
      return false;
    });
  }

	if( jQuery('#maximage-external').length > 0 ){

		jQuery('#maximage-external').maximage({
            cycleOptions: {
				fx: 'fade',
	            speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
	            timeout: 6000,
	            prev: '#arrow_left',
	            next: '#arrow_right',
	            pause: 1,
            },
		});

	}
	
	//Sticky Navigation		
	
	jQuery("#navigation").sticky({topSpacing:1});
	
	//Leaving Page Fade Out
    jQuery('a.external').click(function(){

        if( jQuery('.mask').length > 0 ){

            var url = jQuery(this).attr('href');

			jQuery('.mask').fadeIn(250, function(){
				document.location.href = url;
			});
		
			jQuery("#loader").fadeIn("slow");

            return false;
        }

 	});

});
	  

//Navigation Scrolling
jQuery(function() {
	jQuery('.nav a, .nav li a, #home-center a, a.move').bind('click',function(event){
		var $anchor = jQuery(this);
		
		jQuery('html, body').stop().animate({
		scrollTop: jQuery($anchor.attr('href')).offset().top - $anchor.attr('data-scroll-offset')
		}, 700,'easeInOutQuad');
		
		event.preventDefault();
	});
});
	 


//Navigation Dropdown
jQuery('.nav a.collapse_menu1').click(function () { jQuery(".nav-collapse").collapse("hide") });
jQuery('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });
// Accordion
jQuery('dl.accordion dt').filter(':first-child').addClass('accordion-active');
jQuery('dd.accordion-content').filter(':nth-child(n+3)').addClass('hide');
	
jQuery('dl.accordion').on('click', 'dt', function() {
		jQuery(this)
			.addClass('accordion-active')
			.next()
				.slideDown(200)
				.siblings('dd.accordion-content')
					.slideUp(200)
			.prev()
				.removeClass('accordion-active');
});	
// Tabs	
jQuery(".tab_container").hide(); //Hide all content
jQuery("ul.tabs li:first").addClass("tab-active").show(); //Activate first tab
jQuery(".tab_container:first").show(); //Show first tab content
	
jQuery("ul.tabs li").click(function() {
		jQuery("ul.tabs li").removeClass("tab-active"); //Remove any "active" class
		jQuery(this).addClass("tab-active"); //Add "active" class to selected tab
		jQuery(".tab_container").hide(); //Hide all tab content
		var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		jQuery(activeTab).fadeIn(); //Fade in the active content
		return false;
});
// Toggle	
jQuery(".toggle_container").hide(); 
jQuery("span.toggle-title").click(function(){
		jQuery(this).toggleClass("toggle-active").next().slideToggle("normal");
		return false; 
});
jQuery(document).ready(function(){
		//Elements Fading
		jQuery('.element_from_top').each(function () {
			jQuery(this).appear(function() {
			  jQuery(this).delay(150).animate({opacity:1,top:"0px"},1000);
			});	
		});
		
		jQuery('.element_from_bottom').each(function () {
			jQuery(this).appear(function() {
			  jQuery(this).delay(150).animate({opacity:1,bottom:"0px"},1000);
			});	
		});
		
		
		jQuery('.element_from_left').each(function () {
			jQuery(this).appear(function() {
			  jQuery(this).delay(150).animate({opacity:1,left:"0px"},1000);
			});	
		});
		
		
		jQuery('.element_from_right').each(function () {
			jQuery(this).appear(function() {
			  jQuery(this).delay(150).animate({opacity:1,right:"0px"},1000);
			});	
		});
		
		jQuery('.element_fade_in').each(function () {
			jQuery(this).appear(function() {
			  jQuery(this).delay(150).animate({opacity:1,right:"0px"},1000);
			});	
		});
		//Animated Progress Bars
		jQuery('.bar li').each(function () {
			jQuery(this).appear(function() {
			  jQuery(this).animate({opacity:1,left:"0px"},1200);
			  var b = jQuery(this).find("span").attr("data-width");
			  jQuery(this).find("span").animate({
				width: b + "%"
			  }, 1700, "easeOutCirc");
			});	
		});
		//Animated Counters
		jQuery('.counters').each(function () {
			jQuery(".timer .count").appear(function() {
			var counter = jQuery(this).html();
			jQuery(this).countTo({
				from: 0,
				to: counter,
				speed: 2000,
				refreshInterval: 60,
				});
			});
		});
		
		//Fading Out AlertBox
		jQuery('.shortcode_alertbox').find('.box_close').click(function(){
			jQuery(this).parents('.alertboxes').animate({opacity:0},300).animate({height:"0px"});
		});
});


jQuery(window).load(function() {
	
	
	// Project Page Expander
	
	(function(){
	  
        var container = jQuery( "#project-page-holder" );
		var $items    = jQuery('#portfolio-wrap .open-project-link');
        index = $items.length;
		jQuery('#portfolio-wrap .open-project-link').click(function(){
	
		    if (jQuery(this).hasClass('active')){
		    }
            else{
                lastIndex = index;
		        index = jQuery(this).index();
		        $items.removeClass('active');
		        jQuery(this).addClass('active');
	
		        var myUrl = jQuery(this).find('.open-project').attr("href") + " .item-data";
	
		        jQuery('#project-page-data').animate({opacity:0}, 400,function(){
                    jQuery("#project-page-data").load(myUrl,function(e){
                        var jQueryhelper = jQuery('.helper');
					    var height = jQueryhelper.height();
					
					
					    jQuery('#project-page-data').css("min-height", height);
							
					    jQuery('.project-slider').css({'height' : ''});
					    jQuery('#maximage').css({'height' : ''});
						
					    jQuery('#maximage').maximage({
						            cycleOptions: {
							            fx: 'fade',
							            speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
							            timeout: 6000,
							            prev: '#arrow_left',
							            next: '#arrow_right',
							            pause: 1,
						            },
					    });
                        jQuery('#project-page-data').delay(400).animate({opacity:1}, 400);
				    }); // project page data load
		        }); //project page data
		    }
            jQuery('html, body').animate({ scrollTop: jQuery(".portfolio-bottom").offset().top -40}, 900);
            jQuery('#project-page-data').waitForImages({
                finished: function() {
                    //Project Page Open
                    jQuery('#project-page-holder').slideUp(600, function(){ jQuery('#project-page-data').css('visibility', 'visible');}).delay(1100).slideDown(1000,function(){
                        jQuery('#project-page-data').fadeIn('slow',function(){initBxModal();});
                        jQuery('.element_fade_in').each(function () {
                            jQuery(this).appear(function() {
                                jQuery(this).delay(100).animate({opacity:1,right:"0px"},1000);
                            });
                        });
                    });
                },
                waitForAll: true
            });
		    return false;
		  
		});
	
		//Project Page Close
		jQuery(document).on('click', '#project_close', function(event) {
		    jQuery('#project-page-data').animate({opacity:0}, 400,function(){
				
		        jQuery('#project-page-holder').delay(400).slideUp(400);
				
		    });
				
	        jQuery('html, body').delay(1000).animate({ scrollTop: jQuery(".portfolio-top").offset().top - 70}, 800);
		    $items.removeClass('active') ;
		  
		    return false;
				
		 });
	
	})();
});
jQuery(window).load(function() {
    if( jQuery("#all").length > 0 ){
        document.getElementById("all").click();
    }
    resizeNavigationMenu();
});
function resizeNavigationMenu(){
    jQuery('ul#nav.nav').find("li").each( function(){
        if( (jQuery(window).width() <= 1300) && (jQuery(window).width() >= 1000) ){
            if( (typeof jQuery(this).attr('data-threshold-margin-right') != 'undefined') && (jQuery(this).attr('data-threshold-margin-right') != '') ){
                var margin_right = jQuery(this).attr('data-threshold-margin-right') + 'px';
                jQuery(this).css('margin-right', margin_right);
            }
        }
        else{
            if( (typeof jQuery(this).attr('data-margin-right') != 'undefined') && (jQuery(this).attr('data-margin-right') != '') ){
                var margin_right = jQuery(this).attr('data-margin-right') + 'px';
                jQuery(this).css('margin-right', margin_right);
            }
        }
    });
}
jQuery( window ).resize(function() {
    resizeNavigationMenu();
});
// social sharing
var completed = 0;
if( jQuery('a.facebook-share').length > 0 || jQuery('a.twitter-share').length > 0 || jQuery('a.pinterest-share').length > 0) {
    ////facebook
    //load share count on load
    jQuery.getJSON("http://graph.facebook.com/?id="+ window.location +'&callback=?', function(data) {
        if((data.shares != 0) && (data.shares != undefined) && (data.shares != null)) {
            jQuery('.facebook-share a span.count, a.facebook-share span.count').html( data.shares );
        }
        else {
            jQuery('.facebook-share a span.count, a.facebook-share span.count').html( 0 );
        }
        completed++;
    });
    function facebookShare(){
        window.open( 'https://www.facebook.com/sharer/sharer.php?u='+window.location, "facebookWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" )
        return false;
    }
    jQuery('.facebook-share').click(facebookShare);
    ////twitter
    //load tweet count on load
    jQuery.getJSON('http://urls.api.twitter.com/1/urls/count.json?url='+window.location+'&callback=?', function(data) {
        if((data.count != 0) && (data.count != undefined) && (data.count != null)) {
            jQuery('.twitter-share a span.count, a.twitter-share span.count').html( data.count );
        }
        else {
            jQuery('.twitter-share a span.count, a.twitter-share span.count').html( 0 );
        }
        completed++;
    });
    function twitterShare(){
        window.open( 'http://twitter.com/intent/tweet?text='+jQuery(".project-header h1 .text-large").text() +' '+window.location, "twitterWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" )
        return false;
    }
    jQuery('.newave-social .twitter-share').click(twitterShare);
    ////pinterest
    //load pin count on load
    jQuery.getJSON('http://api.pinterest.com/v1/urls/count.json?url='+window.location+'&callback=?', function(data) {
        if((data.count != 0) && (data.count != undefined) && (data.count != null)) {
            jQuery('.pinterest-share a span.count, a.pinterest-share span.count').html( data.count );
        }
        else {
            jQuery('.pinterest-share a span.count, a.pinterest-share span.count').html( 0 );
        }
        completed++;
    });
    function pinterestShare(){
        var jQuerysharingImg = '';
        if ( (jQuery('#single-portfolio-featured-image').length > 0) && (jQuery('#single-portfolio-featured-image').attr('data-featured-img') != 'empty' )){
            jQuerysharingImg = jQuery('#single-portfolio-featured-image').attr('data-featured-img');
        }
        window.open( 'http://pinterest.com/pin/create/button/?url='+window.location+'&media='+jQuerysharingImg+'&description='+jQuery('.project-header h1 .text-large').text(), "pinterestWindow", "height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" )
        return false;
    }
    jQuery('.newave-social .pinterest-share').click(pinterestShare);
}
//Collage Home Section
var page_title = jQuery('body');
var block_intro = page_title.find('#collage');
if( block_intro.length > 0 ) var block_intro_top = block_intro.offset().top;
jQuery( window ).scroll(function() {
    var current_top = jQuery(document).scrollTop(); var collage_height = jQuery(window).height(); block_intro.css('top', (current_top*0.50)); block_intro.css('opacity', (1 - current_top/collage_height*1.2));
});
jQuery.fn.bgscroll = jQuery.fn.bgScroll = function( options ) {
    if( !this.length ) return this;
    if( !options ) options = {};
    if( !window.scrollElements ) window.scrollElements = {};
    for( var i = 0; i < this.length; i++ ) {
        var allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var randomId = '';
        for( var l = 0; l < 5; l++ ) randomId += allowedChars.charAt( Math.floor( Math.random() * allowedChars.length ) );
        this[ i ].current = 0;
        this[ i ].scrollSpeed = options.scrollSpeed ? options.scrollSpeed : 70;
        this[ i ].direction = options.direction ? options.direction : 'h';
        window.scrollElements[ randomId ] = this[ i ];
        eval( 'window[randomId]=function(){var axis=0;var e=window.scrollElements.' + randomId + ';e.current += 1;if (e.direction == "h") axis = e.current + "px 0";else if (e.direction == "v") axis = "0 " + e.current + "px";else if (e.direction == "d") axis = e.current + "px " + e.current + "px";jQuery( e ).css("background-position", axis);}' );
        setInterval( 'window.' + randomId + '()', options.scrollSpeed ? options.scrollSpeed : 70 );
    }
    return this;
}
var scroll_speed = 5;
var scroll_direction = 'h';
if( typeof CollageBkndOptions != 'undefined' ){
    scroll_speed = CollageBkndOptions.scroll_speed;
    scroll_direction = CollageBkndOptions.scroll_direction;
}
jQuery('#collage').bgscroll({scrollSpeed:scroll_speed , direction:scroll_direction });
function animUp() {
    jQuery("#arrow").animate({
        top: "-3px"
    }, "slow", "swing", animDown);
}
function animDown() {
    jQuery("#arrow").animate({
        top: "3px"
    }, "slow", "swing", animUp);
}
jQuery(document).ready(function() {
    animUp();
});



