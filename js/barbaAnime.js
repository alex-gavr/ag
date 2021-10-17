


const animationEnter = () => {
  return gsap.from(container, {
    autoAlpha: 0,
    duration: 2,
    clearProps: 'all'
  })
}

const animationLeave = () => {
  return gsap.to(container, {
    autoAlpha: 0,
    duration: 2,
    clearProps: 'all'
  })
}

barba.init({
  transitions: [
    {
      once({next}){
        animationEnter(next.container);
      },
      leave ({current}){
        console.log('enter');
        animationLeave(current.container);
      },
      enter ({next}){
        animationEnter(next.container);
      },
    }
  ]
});
