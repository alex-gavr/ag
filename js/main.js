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




// barba.init({ 
//   debug: true,
//   views: [
//   {
//     namespace: 'game',
//     afterEnter(){
//       randomPicsFull();
//       youWonFull();
//     }
//   },
//   {
//     namespace: 'index',
//     afterEnter(){
//       scriptFull();
//       animationFull();
//     }
//   }
// ],
//   transitions: [
//     {
//       leave: ({current})=> 
//         pageTransitionIn(current.container),
//         // data.current.container.remove();
//       beforeEnter: ({next}) => {
//         window.scrollTo(0,0);
//       },
//       enter({next}) {
//         pageTransitionOut(next.container);
//       }
//   }]
// });

// to:{
//   namespace: ['game']
// },

barba.use(barbaCss);

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
  transitions: [
    {
      name: 'game', 
      to:{
        namespace: ['game']
      },
      sync: true,
      leave() {},
      enter() {},
    },{
      name: 'index',
      to:{
        namespace: ['index']
      },
      sync: true,
      leave() {},
      enter() {},
    }
  ]
})




// function reloadJs(src) {
//   $('script[src="' + src + '"]').remove();
//   $('<script>').attr('src', src).appendTo('head');
// }
// function reloadJSforGame(){
//   reloadJs('js/randomPics.js');
//   reloadJs('js/youWon.js');
// }
