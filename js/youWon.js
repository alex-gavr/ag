export function youWonFull(){

  let winButton = document.getElementById('youWon');
  let pic1 = "";
  let pic2 = "";
  // let pic3 = "";
  // const pic3 = document.getElementById('thirdImage').src;
  let winText = document.getElementById('winText');
  let win = 0;

  function youWon(){
    if(pic1 === pic2){
    win++;
    winText.innerHTML = `Ты выиграл ${win} раз`;
    winButton.classList.remove("invis");
    gsap.from(winButton, {
      duration: 3,
      x: -300,
      opacity: 1,
      scale: 0,
      ease: 'elastic.out(1,0.3)'
    });
  }
  }

  playButton.addEventListener("click", () => {
    pic1 = document.getElementById('firstImage').src;
    pic2 = document.getElementById('secondImage').src;
    // pic3 = document.getElementById('thirdImage').src;
    youWon();
  });
}