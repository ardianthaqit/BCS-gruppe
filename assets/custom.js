
// SLIDER FOR TESTOMNAILS 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  });
// END SLIDER FOR TESTOMNAILS

// START SLIDER IMAGE

// END SLIDER IMAGE 


// TABS
  $(document).ready(function() {
    $('ul.tabs').each(function(){
      var active, content, links = $(this).find('a');
      active = links.first().addClass('active');
      content = $(active.attr('href'));
      links.not(':first').each(function () {
        $($(this).attr('href')).hide();
      });
      $(this).find('a').click(function(e){
        active.removeClass('active');
        content.hide();
        active = $(this);
        content = $($(this).attr('href'));
        active.addClass('active');
        content.show();
        return false;
      });
    });
  });
  // END TABS 