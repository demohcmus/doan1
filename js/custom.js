
// GOOGLE MAP
var map = '';
var center;

function initialize() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(13.758468, 100.567481),
      scrollwheel: false
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
  
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}

$(function(){
  loadGoogleMap();
});

// NIVO LIGHTBOX
$('#portfolio a').nivoLightbox({
        effect: 'fadeScale',
    });

// HIDE MOBILE MENU AFTER CLIKING ON A LINK
   $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

// phần chuyền hình ảnh 
    var responsiveSlider = function() {

      var slider = document.getElementById("slider");
      var sliderWidth = slider.offsetWidth;
      var slideList = document.getElementById("slideWrap");
      var count = 1;
      var items = slideList.querySelectorAll("li").length;
      var prev = document.getElementById("prev");
      var next = document.getElementById("next");
      
      window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
      });
      
      var prevSlide = function() {
        if(count > 1) {
          count = count - 2;
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
        else if(count = 1) {
          count = items - 1;
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
      };
      
      var nextSlide = function() {
        if(count < items) {
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
        else if(count = items) {
          slideList.style.left = "0px";
          count = 1;
        }
      };
      
      next.addEventListener("click", function() {
        nextSlide();
      });
      
      prev.addEventListener("click", function() {
        prevSlide();
      });
      
      setInterval(function() {
        nextSlide()
      }, 5000);
      
      };
      
      window.onload = function() {
      responsiveSlider();  
      }
      


      // phần button
      //Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}