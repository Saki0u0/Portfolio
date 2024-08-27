window.onload = function() {
  gsap.registerPlugin(ScrollTrigger);

  let lineOne = gsap.timeline({
    scrollTrigger: {
      trigger: '.menu',
      scrub: true,
      markers: true,
      pin: true,
      start: 'top top',
      end: 'bottom bottom',
    }
  });

  lineOne.from(".logo span", {
    y: '100vh',
    duration: 1,
    stagger: 0.2
  });
};
