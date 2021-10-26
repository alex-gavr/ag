// ============= FIRST SECTION BOX ================
// ============= FIRST SECTION BOX ================
// ============= FIRST SECTION BOX ================

export function animationFull(){

  let el = document.querySelector('.first_section_div');

  anime({
    targets: el,
    translateY: '30vh',
    duration: function() {
      return anime.random(500, 5000);
    },
    borderRadius: function() {
      return ['0%', anime.random(5, 50) + '%'];
    },
    width: '+=100px',
    rotate: function() {
      return anime.random(-360, 360);
    },

    direction: 'alternate'
  });


  // ========= SECOND SECTION ALSO ABOUT ME ============
  // ========= SECOND SECTION ALSO ABOUT ME ============
  // ========= SECOND SECTION ALSO ABOUT ME ============
  // ========= DISABLED ==================
  let el2 = document.querySelector('#moveButAlso');

  let animation = function(entry){
    anime({
      targets: el2,
      keyframes: [{
          translateY: "-40vh",
          duration: 900
        },
        {
          translateX: '-30vw',
          duration: 900
        },
        {
          translateX: '20vw',
          translateY: '20vh',
          duration: 500
        },
        {
          translateX: 0,
          duration: 900,
          delay: 500
        },
        {
          translateY: 0,
          duration: 900
        }
      ],
      easing: 'easeOutElastic(1, .8)',
    });
  }

  //  Observer

  let observer_section2 = new IntersectionObserver(callbackFunction_section2, {
    // rootMargin: "0px 0px -30% 0px",
    threshold: 0.5
  });

  function callbackFunction_section2(entries) {
    entries.forEach(entry => {

      if (entry.intersectionRatio > 0) {
        animation(entry.target);
      }
    });
  };

  // ======= TOGGLE THIS TO SWITCH ON=======

  // observer_section2.observe(el2);

  // ============= FIFTH SECTION WITH 4 DIVS ===============
  // ============= FIFTH SECTION WITH 4 DIVS ===============
  // ============= FIFTH SECTION WITH 4 DIVS ===============

  let el3 = document.querySelectorAll('#fifth_section > div');

  let animation2 = function(entry){
    anime({
      targets: el3,
      translateY: '-120%',
      delay: 500,
      duration: function() {
        return anime.random(800, 2000);
      },
      borderRadius: function() {
        return [anime.random(5, 50) + '%'];
      },
      easing: 'easeInOutBack'
    });
  }


  //  Observer
  let observer_section5 = new IntersectionObserver(callbackFunction_section5, {
    threshold: 0
  });

  function callbackFunction_section5(entries) {
    entries.forEach(entry => {

      if (entry.intersectionRatio > 0) {
        animation2(entry.target);
      }
    });
  }

  el3.forEach(div => {
    observer_section5.observe(div);
  });


  // ==== LAMP AND MENU ANIMATION ======
  // ==== LAMP AND MENU ANIMATION ======
  // ==== LAMP AND MENU ANIMATION ======


  let lamp = document.querySelector('#lamp');
  let menu = document.querySelector('#menu');
  let body = document.getElementsByTagName('body')[0];
  let closeX = document.querySelector('#close');
  let menuA = document.querySelectorAll('.menuA');
  let menuToGame = document.getElementById('menuToGame');



  function menuAnimation(){
    anime({
      targets: lamp,
      translateY: function() {
        return [anime.random(50, 200) + '%'];
      },
      translateX: function() {
        return ['-' + anime.random(50, 200) + '%'];
      },
      duration: 2000,
      width: "*=4",
      rotate: '1turn',
      easing: 'easeInOutBack',
      opacity: {
        value: 0,
        delay: 1500
      },
      direction: 'alternate'
    });

    body.style.overflow = 'hidden';


    anime({
    targets: menu,
      keyframes: [
        {
          delay: 3000,
          duration: 100,
          opacity: 1,
          width: '100vw',
          height: '100vh',
          skewX: '45deg',
          skewY: '45deg',
          easing: 'linear'
        },
        {
          duration: 2000,
          borderRadius: 0,
          skewX: '0deg',
          skewY: '0deg'
        }
      ]
    });
  }

  function reverseAnimation(){
    body.style.overflow = 'auto';
    anime({
      targets: menu,
      keyframes: [{
        width: '0vw',
        height: '0vh',
        skewX: '45deg',
        skewY: '45deg',
        duration: 1500,
        easing: 'easeInElastic(1, .5)'
      }
    ]
    });
  }
  lamp.addEventListener('click', e => {
    menuAnimation();
  });
  closeX.addEventListener('click', e => {
    reverseAnimation();
  });

  menuA.forEach(menu => {
    menu.addEventListener('click', e => {
      reverseAnimation();
    });
  })
  
  




  //  ============= SHOW HEADER IN SECTION 2 ==============
  //  ============= SHOW HEADER IN SECTION 2 ==============
  //  ============= SHOW HEADER IN SECTION 2 ==============

  let s1 = document.querySelector('#first_section');
  let header = document.querySelector('.header');

  function headerHide(){
    anime({
      targets: header,
      opacity: 0,
      duration: 5000,
    });
  }
  function headerShow(){
    anime({
      targets: header,
      opacity: 1,
      duration: 5000
    });
  }


  let observer_header = new IntersectionObserver(callbackFunction_header, {
    threshold: 0
  });

  function callbackFunction_header(entries) {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        headerHide();
      } else {
        headerShow();
      }
    });
  }

  // ======= TOGGLE THIS TO SWITCH ON=======

  observer_header.observe(s1);
}