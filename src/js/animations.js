import $ from 'jquery';

export default function() {
  const controller = new ScrollMagic.Controller();

  const headers = ["#slide01 .uk-heading-hero", "#slide02 .uk-heading-hero", "#slide03 .uk-heading-hero", "#slide04 .uk-heading-hero"];

  headers.forEach(function(header, index) {
    let num = index + 1;

    const headerScene = new ScrollMagic.Scene({
      triggerElement: header,
      offset: -95
    })
    .setClassToggle(`#slide0${num} .uk-heading-hero`, 'is-active')
    // .addIndicators()
    .addTo(controller);
  });

  const navScene = new ScrollMagic.Scene({
    triggerElement: '.is-dark',
    duration: '200%'
  })
  .setClassToggle('.nav-container', 'uk-light')
  .addTo(controller);

  console.log('====================================');
  console.log('hello from animations');
  console.log('====================================');
}