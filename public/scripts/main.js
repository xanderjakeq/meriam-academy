$(document).ready(function() {
    $(window).on('scroll', function() {
      if (Math.round($(window).scrollTop()) > 100) {
        $('.navbar').addClass('scrolled');
      } else {
        $('.navbar').removeClass('scrolled');
      }
    });
  });

$(function() {
    $.scrollify({
        section : ".section",

        scrollbars:false,
      before:function(i,panels) {

        var ref = panels[i].attr("data-section-name");

        $(".nav .active").removeClass("active");
        $(".nav").find("a[href=\"#" + ref + "\"]").addClass("active");
      },
      afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".panel").each(function(i) {
          activeClass = "";
          if(i===0) {
            activeClass = "active";
          }
          pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });

        pagination += "</ul>";

        $(".home").append(pagination);
        /*

        Tip: The two click events below are the same:

        $(".pagination a").on("click",function() {
          $.scrollify.move($(this).attr("href"));
        });

        */
        $(".nav a").on("click",$.scrollify.move);
      }
    });
});