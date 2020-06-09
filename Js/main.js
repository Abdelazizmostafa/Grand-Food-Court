 //Smooth Scroll to howit    
     $(".howit").click(function(){
       $('html , body').animate({
       scrollTop:$("#showit").offset().top-55
    },1000);
    }); 
    //Smooth Scroll to Ourpartners    
     $(".Ourpartners").click(function(){
      $('html , body').animate({
       scrollTop:$("#Ourpartners").offset().top-55
    },1000);
    });  
    //Smooth Scroll to Offers    
     $(".exploreoffers").click(function(){
       $('html , body').animate({
        scrollTop:$("#exploreoffers").offset().top-55
    },1000);
    }); 
    //Smooth Scroll to contact    
     $(".Contact").click(function(){
       $('html , body').animate({
        scrollTop:$("#Contact").offset().top-55
    },1000);
    });
      
    
    // ================
    new WOW().init();
    // var $window = $(window);

    // if ($window.width() > 767) {
    //     new WOW().init();
    // }


    // =============
     // Adding NiceScroll Plugin
     $("body").niceScroll({
        cursorcolor:"#da8e04",
        cursorwidth:"6px",
        cursorborder:"none"       
       });
 
 //   Preloader Active code
  //===== Document Ready Ends =====//

  jQuery(window).on('load', function ($) {
    'use strict';
    //===== Page Loader =====//
    jQuery('.preloader').fadeOut('slow');
  
    //===== Isotope =====//
    if (jQuery('.filter-item').length > 0) {
      if (jQuery().isotope) {
        var jQuerycontainer = jQuery('.masonry'); // cache container
        jQuerycontainer.isotope({
          itemSelector: '.filter-item',
          columnWidth:.5,
        });
        jQuery('.filter-buttons a').on('click', function () {
          var selector = jQuery(this).attr('data-filter');
          jQuery('.filter-buttons li').removeClass('active');
          jQuery(this).parent().addClass('active');
          jQuerycontainer.isotope({filter: selector});
          return false;
        });
        jQuerycontainer.isotope('layout'); // layout/layout
      }
  
      jQuery(window).resize(function () {
        if (jQuery().isotope) {
          jQuery('.masonry').isotope('layout'); // layout/relayout on window resize
        }
      });
    }
  
  });