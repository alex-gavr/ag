export function randomPicsFull(){

  let playButton = document.getElementById('playButton');
  let pics = document.querySelectorAll('.randomPic');
  
  playButton.addEventListener("click", () => {
    pics.forEach(pic =>{
      let randomPic = Math.floor(Math.random() * 45) + 1;
        pic.src= `https://alex-gavr.github.io/ag/pics/forGame/${randomPic}.jpg`;
        console.log(pic.src);
      // }
    });
  });
}