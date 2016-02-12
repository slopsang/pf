/* 
  this is main javascript 
*/

window.onload = function() {
  Sticker.init('.sticker');
}


$('.ssgpay').parallax({imageSrc: 'img/ssgpay.png'});
$('.nebulaOS').parallax({imageSrc: 'img/nebulaOS.png'});
$('.upark').parallax({imageSrc: 'img/upark.png'});
$('.policeshooting').parallax({imageSrc: 'img/policeshooting.png'});
$('.spotify').parallax({imageSrc: 'img/spotify.png'});
$('.review').parallax({imageSrc: 'img/review.png'});

$(document).ready(function(){    
  var scroll_start = 0;
  var startchange = $('.navbar');
  var offset = startchange.offset();

  var anotherchange = $('#intro');

  $(document).scroll(function() { 
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
      $('.navbar').css('background-color', '#ffffff');
      $('.link').css('color', '#000000');
      $("#mainlogo").attr('src', 'img/blacklogo1.png');
      $('#videobar').css('background-color', 'transparent');
      // $('.logos').javascript('onmouseover', 'img/blacklogo.png');
      // $('.logos').javascript('onmouseout', 'img/blacklogo2.png');
    } else {
      $('.navbar').css('background-color', 'transparent');
      $('.link').css('color', '#ffffff');
      $("#mainlogo").attr('src', 'img/whitelogo.png');
      $('#videobar').css('background-color', 'transparent');
    }
  });
  
});

// I tried to do this for changing images when hover but doesn't work
// $("#mainlogo").scroll(function onHover() {
//   scroll_start = $(this).scrollTop();
//   if (scroll_start > offset.top) {
//     $("#mainlogo").attr('src', 'img/whitelogo2.png');
//   } else {
//     $("#mainlogo").attr('src', 'img/blacklogo2.png');
//   }
// });
// $("#mainlogo").scroll(function offHover() {
//   scroll_start = $(this).scrollTop();
//   if (scroll_start > offset.top) {
//     $("#mainlogo").attr('src', 'img/whitelogo.png');
//   } else {
//     $("#mainlogo").attr('src', 'img/blacklogo.png');
//   }
// });


/* home image change js */
/*
console.log("first");

var currentBackground = 0;
var backgrounds = [];
backgrounds[0] = '../img/army.png';
backgrounds[1] = '../img/armypic.jpg';
backgrounds[2] = '../img/sky.png';

console.log("second");

function changeBackground() {
    currentBackground++;
    if(currentBackground > 2) currentBackground = 0;

console.log("second");

    $('#homeimg').fadeOut(300,function() {
        $('#homeimg').css({
            'background-image' : "url('" + backgrounds[currentBackground] + "')"
        });
        $('#homeimg').fadeIn(300);
    });

    console.log("third");

    setTimeout(changeBackground, 4000);
}

$(document).ready(function() {
    setTimeout(changeBackground, 4000);        
});
*/


