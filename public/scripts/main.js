$(document).ready(function() {
    $(window).on('scroll', function() {
      if (Math.round($(window).scrollTop()) > 100) {
        $('.navbar').addClass('scrolled');
      } else {
        $('.navbar').removeClass('scrolled');
      }
    });
  });

  console.log($('.section').width(), $('.section').height())
  let offsetForScrollify = 1;
  if($( window ).width() < 600){
    $('.fb-container').css('width', '300px')
    $('.fb-page').attr('data-height','70px')
    $('.logo').remove()
    offsetForScrollify = 0;
  }

$(function() {
    $.scrollify({
        section : ".section",
        offset:offsetForScrollify,
        scrollbars:false,
        interstitialSection:".footer",
      before:function(i,panels) {

        var ref = panels[i].attr("data-section-name");
        
        console.log(i,ref)

        $(".nav .active").removeClass("active");
        if(i>=1 && i<=3){
          $(".nav").find("a[href=\"#" + 'about' + "\"]").addClass("active");
        }else if(i>=4){
          $(".nav").find("a[href=\"#" + 'contact' + "\"]").addClass("active");
        }
        else{
          $(".nav").find("a[href=\"#" + ref + "\"]").addClass("active");
        }
        $(".pagination .active").removeClass("active");

        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
      
      },
      afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".section").each(function(i) {
          activeClass = "";
          if(i===0) {
            activeClass = "active";
          }
          // <span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span>
          pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"></a></li>";
        });

        pagination += "</ul>";

        $(".home").append(pagination);
        /*

        Tip: The two click events below are the same:

        $(".pagination a").on("click",function() {
          $.scrollify.move($(this).attr("href"));
        });

        */
        $(".nav a, .pagination a").on("click",$.scrollify.move);
      }
    });

    var typed = new Typed('#slogan', {
      strings: [ "'Providing Excellent Foundation for your Child's Future' ^1000", "Call us (202) 248-1848"],
      typeSpeed: 50,
      loop: true,
        loopCount: Infinity,
        backDelay: 5000,
    });

    var call = new Typed('#visit', {
      strings: [ "We love our family","so feel free to visit","during normal business hours. ^1000"],
      typeSpeed: 50,
      loop: true,
        loopCount: Infinity,
        backDelay: 1000,
    });
});