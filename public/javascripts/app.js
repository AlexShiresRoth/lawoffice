
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

/* animations on scroll */

$('.js-wp-about').waypoint(function(direction){
    $('.js-wp-about').addClass('animated fadeIn');
},{
    offset:'60%'
});
    $('.js-wp-1').waypoint(function(direction){
    $('.js-wp-1').addClass('animated fadeIn');
},{
    offset:'60%'
});
$('.js-wp-practices').waypoint(function(direction){
    $('.js-wp-practices').addClass('animated fadeIn');
},{
    offset:'60%'
});
$('.js-wp-4').waypoint(function(direction){
    $('.js-wp-4').addClass('animated pulse');
},{
    offset:'60%'
});
    
     /* mobile nav */
     {
       const mobileNav = document.querySelector('.mobile-nav');
       const navAppear = document.querySelector('.js-main-nav');
       
         mobileNav.addEventListener("click", function() {
            navAppear.classList.toggle('visible');
            this.classList.toggle('inactive');
         });
     }
     

    
    
    
    /* MAPS */
var map = new GMaps({
  div: '.map',
  lat: 40.775611 ,
  lng:  -73.103699,
  zoom: 10
});
    
  map.addMarker({
  lat: 40.775611,
  lng:  -73.103699,
  title: 'Bohemia',
     infoWindow: {
  content: '<p>80 Orville Drive, Bohemia, NY</p>'
}
  /*click: function(e) {
  for(var i = 0; i < map.length; i++){
      alert(map[i]);
  }

  }*/
});
});
    
    