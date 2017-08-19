import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import $ from 'jquery';
// import 'aos/dist/aos.css';
// import AOS from 'aos'
// import uikitCss from 'uikit/dist/css/uikit.css'
// import animations from './animations'
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.css';
import {TweenMax, Power2, TimelineLite} from "gsap";

UIkit.use(Icons);


// function leaving() {
//   const tl = new TimelineLite();
//   // const header = $('.header');

//   // TweenMax.to(header, 1, {opacity: 0, y: 50});

//   console.log('im leaving');
// }

// function loaded() {
//   // const header = $('.header');
  
//   // TweenMax.from(header, 1, {opacity: 0, y: 50});
//   console.log('section loaded!');
// }

$(document).ready(function() {
  const menu = $('#menu-overlay');
  const navDots = $('#fp-nav');

	$('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#myMenu',
    navigation: true,
    navigationPosition: 'right',
    normalScrollElements: '#menu-overlay',
    onLeave: function(index, nextIndex, direction){
      menu.addClass('menu-active');
      navDots.addClass('dot-light');    
    },
    afterLoad: function(anchorLink, index){
      setTimeout(function(){ 
        menu.removeClass('menu-active');
        navDots.removeClass('dot-light');
      }, 1500);
    },
  });
});
