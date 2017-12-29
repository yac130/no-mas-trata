function set_body_height() { // set body height = window height
  $('body').height($(window).height());
}

// video portada
  var player;
  var obj = $("#videoTrata");
  var pos = obj.position();
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('videoTrata', {
        events: {
            'onStateChange': onPlayerStateChange,
            'onReady': onPlayerReady
          }
      });
    }
    if(window.opera){
      addEventListener('load', onYouTubeIframeAPIReady, false);
  }

// fin video portada
  function onPlayerStateChange(event) {        
    if(event.data === 0) {            
      $('#videoTrata').fadeOut('slow');
      $('.overlay').fadeIn('slow');
    }
  }

// scroll video portada
  function onPlayerReady(event) {
    $(document).on('scroll', function() {
      var scrollTop = $(window).scrollTop();
        if (scrollTop > pos.top + 500) {
            player.stopVideo();
        }
    })
  }

$(document).ready(function() {

  $(window).bind('resize', set_body_height);
  set_body_height();  

  // play video
  $('.play-icon').click(function() {
    $('#videoTrata').fadeIn('slow');
    $('.overlay').fadeOut('slow');
  });

  //slider

  $('.slider').slick({
     arrows: false,
     dots: true
  });

  //rutas mapas

  // play video
  $('#ruta-1').click(function() {
    $('#mapa-ruta-1').fadeIn('slow');
    $('#mapa-ruta-2').fadeOut('slow');
    $('#mapa-ruta-3').fadeOut('slow');
    $('#mapa-ruta-4').fadeOut('slow');
    $('#mapa-ruta-5').fadeOut('slow');
    $('#mapa-ruta-6').fadeOut('slow');
  });

  $('#ruta-2').click(function() {
    $('#mapa-ruta-2').fadeIn('slow');
    $('#mapa-ruta-1').fadeOut('slow');
    $('#mapa-ruta-3').fadeOut('slow');
    $('#mapa-ruta-4').fadeOut('slow');
    $('#mapa-ruta-5').fadeOut('slow');
    $('#mapa-ruta-6').fadeOut('slow');
  });

  $('#ruta-3').click(function() {
    $('#mapa-ruta-3').fadeIn('slow');
    $('#mapa-ruta-1').fadeOut('slow');
    $('#mapa-ruta-2').fadeOut('slow');
    $('#mapa-ruta-4').fadeOut('slow');
    $('#mapa-ruta-5').fadeOut('slow');
    $('#mapa-ruta-6').fadeOut('slow');
  });

  $('#ruta-4').click(function() {
    $('#mapa-ruta-4').fadeIn('slow');
    $('#mapa-ruta-1').fadeOut('slow');
    $('#mapa-ruta-2').fadeOut('slow');
    $('#mapa-ruta-3').fadeOut('slow');
    $('#mapa-ruta-5').fadeOut('slow');
    $('#mapa-ruta-6').fadeOut('slow');
  });

  $('#ruta-5').click(function() {
    $('#mapa-ruta-5').fadeIn('slow');
    $('#mapa-ruta-1').fadeOut('slow');
    $('#mapa-ruta-2').fadeOut('slow');
    $('#mapa-ruta-3').fadeOut('slow');
    $('#mapa-ruta-4').fadeOut('slow');
    $('#mapa-ruta-6').fadeOut('slow');
  });

  $('#ruta-6').click(function() {
    $('#mapa-ruta-6').fadeIn('slow');
    $('#mapa-ruta-1').fadeOut('slow');
    $('#mapa-ruta-2').fadeOut('slow');
    $('#mapa-ruta-3').fadeOut('slow');
    $('#mapa-ruta-4').fadeOut('slow');
    $('#mapa-ruta-5').fadeOut('slow');
  });

});


// rutas

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}


