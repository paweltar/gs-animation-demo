import $ from 'jquery';

export default function() {
  const controller = new ScrollMagic.Controller();

  const headers = ["#slide01 .uk-heading-hero", "#slide02 .uk-heading-hero", "#slide03 .uk-heading-hero", "#slide04 .uk-heading-hero"];

  headers.forEach(function(header, index) {
    let num = index + 1;

    const headerScene = new ScrollMagic.Scene({
      triggerElement: header,
      offset: -195
    })
    .setClassToggle(`#slide0${num} .uk-heading-hero`, 'is-active')
    .addTo(controller);
  });

  const navScene = new ScrollMagic.Scene({
    triggerElement: '.is-dark',
    duration: '200%'
  })
  .setClassToggle('.nav-container', 'uk-light')
  .addTo(controller);

  headers.forEach(function(header, index) {
    let num = index + 1;

    const navDotsScene = new ScrollMagic.Scene({
      triggerElement: header,
      offset: -200,
      duration: '100%'
    })
    .setClassToggle(`#nav-dot0${num}`, 'uk-active')
    .addTo(controller);
  });

  console.log('====================================');
  console.log('hello from animations');
  console.log('====================================');
}