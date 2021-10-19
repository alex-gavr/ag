

console.info('🚀App:init');

barba.init({
  transitions: [{
    leave(data) {
      console.log('hello');
    },
    enter(data) {
      console.log('bye');
    }
  }]
});
