
$(document).ready(function(){
    


/* scroll */

$('.scroll-to-plans').click(function(){
    $('html,body').animate({scrollTop: $('.js-plans').offset().top},1000);
})

$('.scroll-to-start').click(function(){
    $('html,body').animate({scrollTop: $('.js-features').offset().top},1000);
})


/* navigation scroll */


 $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    
     /* mobile nav */
     {
       const mobileNav = document.querySelector('.mobile-nav');
       const navAppear = document.querySelector('.js-main-nav');
       
         mobileNav.addEventListener("click", () => {
            navAppear.classList.toggle('visible');
            this.classList.toggle('inactive');
         });
     }
     /* service nav */
     {
       const navToggle = document.querySelector('.service-toggle');
       const serviceList = document.querySelector('.service-list');
       
       $(navToggle).click(() => {
           $(serviceList).slideToggle('slow');
       });
     }
});
    
    