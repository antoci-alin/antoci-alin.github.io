(function($) {
  "use strict";
  var appFunction = {
    /* ---------------------------------------------  Preloader --------------------------------------------- */

    preloader: function() {
      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
        navigator.userAgent
      )
        ? true
        : false;
      var preloader = $("#preloader");
      if (!isMobile) {
        setTimeout(function() {
          preloader.addClass("preloaded");
        }, 800);
        setTimeout(function() {
          preloader.remove();
          $('#disclaimer--modal').modal('show')
        }, 2000);
      } else {
        preloader.remove();
        $('#disclaimer--modal').modal('show')
      }
    },

    /*------------------------------------------- Sticky Header --------------------------------------------- */

    stickyHeader: function() {
      if ($("#sticky_header").length) {
        var stickyMenu = $(".site_navigation")
          .clone()
          .appendTo("#sticky_header");
        $(window).on("scroll", function() {
          var w = $(window).width();
          if (w > 991) {
            if ($(this).scrollTop() > 350) {
              $("#sticky_header").slideDown(500);
            } else {
              $("#sticky_header").slideUp(500);
            }
          }
        });
      }
      $(".dots_effect > ").on("hover", function() {
        $("span.dot_effect").toggleClass("dot_hover");
      });
    },

    /*-------------------------------------------  Section Scroll --------------------------------------------- */

    sectionScroll: function() {
      var $s_scroll = $("#section_scroller_button");
      $(window).on("scroll", function() {
        if ($(this).scrollTop() > $(this).height() - 700) {
          $s_scroll.addClass("btn-show").removeClass("btn-hide");
        } else {
          $s_scroll.addClass("btn-hide").removeClass("btn-show");
        }
      });
      $(".section_scroll").sectionScroller({
        scrollerButton: "#section_scroller_button",
        scrollType: "swing",
        scrollDuration: 600
      });
    },

    /*-------------------------------------------  Section Smoot Scroll --------------------------------------------- */
    smootScroll: function() {
      $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "swing",
        scrollTime: 700,
        activeClass: "active",
        onPageChange: null,
        topOffset: -63
      });
    },

    /* ---------------------------------------------  Animated Progress --------------------------------------------- */

    animated_progress: function() {
      $(".progress_bar > span").each(function() {
        var $this = $(this);
        var width = $(this).data("percent");
        $this.css({ transition: "width 3s" });
        setTimeout(function() {
          $this.appear(function() {
            $this.css("width", width + "%");
          });
        }, 500);
      });
    },

    /* ---------------------------------------------  Testimonail --------------------------------------------- */

    testimonial: function() {
      $(".testimonial_carousel").owlCarousel({
        center: false,
        items: 1,
        autoplay: true,
        singleItem: true,
        smartSpeed: 500,
        loop: true,
        margin: 0,
        nav: false,
        dots: true
      });
    },

    /* ---------------------------------------------  Fan Fact Counter --------------------------------------------- */

    fan_fact: function() {
      $(".counter").counterUp({ delay: 10, time: 1000 });
    },

    /* ---------------------------------------------  Masonry --------------------------------------------- */

    grid_masonry: function() {
      if ($("#masonry").length > 0) {
        var container = $("#masonry");
        container.imagesLoaded(function() {
          container.masonry({ itemSelector: ".grid" });
        });
      }
    },

    /* ---------------------------------------------  Isotope portfolio --------------------------------------------- */

    portfolio_isotop: function() {
      var $modelisotop = $(".portfolio_items_list");
      $modelisotop.isotope({
        filter: "*",
        animationOptions: { duration: 1000, easing: "linear", queue: false }
      });
      $(".recent_work_nav > li a").on("click", function() {
        $(".recent_work_nav > li a").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $modelisotop.isotope({
          filter: selector,
          animationOptions: { duration: 1000, easing: "linear", queue: false }
        });
        return false;
      });
    },

    /* ---------------------------------------------  Magnific Popup --------------------------------------------- */

    magnific_popup: function() {
      $(".work_item").magnificPopup({
        type: "image",
        removalDelay: 300,
        mainClass: "mfp-with-zoom",
        gallery: { enabled: true },
        zoom: {
          enabled: true,
          duration: 300,
          easing: "ease-in",
          opener: function(openerElement) {
            return openerElement.is("img")
              ? openerElement
              : openerElement.find("img");
          }
        }
      });
    },

    /* --------------------------------------------- initialize --------------------------------------------- */

    initialize: function() {
      appFunction.preloader();
      appFunction.stickyHeader();
      appFunction.sectionScroll();
      appFunction.smootScroll();
      appFunction.animated_progress();
      appFunction.testimonial();
      appFunction.fan_fact();
      appFunction.grid_masonry();
      appFunction.portfolio_isotop();
      appFunction.magnific_popup();
    }
  };

  /* --------------------------------------------- Document ready function --------------------------------------------- */
  $(function() {
    appFunction.initialize();
  });
})(jQuery);
