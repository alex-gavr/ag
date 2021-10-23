import { randomPicsFull } from "./randomPics.js";
import { youWonFull } from "./youWon.js";
import { scriptFull } from "./script.js";
import { animationFull } from "./animation.js";



const loadingScreen = document.querySelector('.loading-screen');
// gsap.to(loadingScreen, { duration: .5, scaleY: 1, transformOrigin: 'bottom left'})
// gsap
//       .timeline({ delay: 1 }) // More readable to put it here
//     //   .add('start') // Use a label to sync screen and content animation
//     .to(loadingScreen, {
//         duration: 0.5,
//         scaleY: 0,
//         skewX: 0,
//         transformOrigin: 'top left',
//         ease: 'power1.out'
//     });



const pageTransitionIn = (container) => {
  return gsap.to(loadingScreen, { duration: .5, scaleY: 1, transformOrigin: 'bottom left'})
}

const pageTransitionOut = (container) => {
  return gsap
    .timeline({ delay: 1 }) // More readable to put it here
    .to(loadingScreen, {
      duration: 0.5,
      scaleY: 0,
      skewX: 0,
      transformOrigin: 'top left',
      ease: 'power1.out'
    });
}


// barba.hooks.after(() => {
//   const oldScript = document.querySelectorAll(".removeThem");
//   oldScript.forEach(oldScript =>{
//     oldScript.remove();
//   });
// })

// barba.hooks.beforeEnter(()=> {
//   const oldScript = document.querySelectorAll("jscode");
//   oldScript.forEach(script =>{
//     script.remove();
//   });
// });

// barba.hooks.afterEnter(() {
//   let script = document.createElement('script');
//   script.src = 'js/randomPics.js'; // location of your draggable js file that is responsible for that image loading and dragging functionality
//   next.container.appendChild(script);
// });

// barba.hooks.after(() => {
//   const bottomDOM = document.getElementsByTagName("body")[0]
//   const newScript = document.createElement("script")
//   const oldScript = document.getElementById('randomPics')
//   console.log(oldScript);
//   oldScript.remove();
  
//   newScript.src = "js/randomPics.js";
//   newScript.setAttribute('id','randomPics');
//   bottomDOM.appendChild(newScript);
// });



barba.init({ 
  debug: true,
  views: [
  {
    namespace: 'game',
    afterEnter(){
      randomPicsFull();
      youWonFull();
    }
  },
  {
    namespace: 'index',
    afterEnter(){
      scriptFull();
      animationFull();
    }
  }
],
  transitions: [{
      leave: ({current})=> 
        pageTransitionIn(current.container),
        // data.current.container.remove();
      beforeEnter: ({next}) => {
        window.scrollTo(0,0);
      },
      enter({next}) {
        pageTransitionOut(next.container);
      }
  }]
});

// function reloadJs(src) {
//   $('script[src="' + src + '"]').remove();
//   $('<script>').attr('src', src).appendTo('head');
// }
// function reloadJSforGame(){
//   reloadJs('js/randomPics.js');
//   reloadJs('js/youWon.js');
// }
