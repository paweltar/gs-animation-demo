import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import $ from 'jquery';
import 'aos/dist/aos.css';
import AOS from 'aos'
import uikitCss from 'uikit/dist/css/uikit.css'
import animations from './animations'

UIkit.use(Icons);

$(window).on("load", function(){
  animations();
});
