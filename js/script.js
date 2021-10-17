// const body = document.body;
//
// body.addEventListener("click", () => {
//   body.innerHTML = `<h1> Hello, World! </h1>`
// })

const meFromLeft = document.getElementById('meFromLeft');

// HERE WE MOVE ME FROM LEFT
const observer = new IntersectionObserver(callbackFunction, {
  rootMargin: "0px 0px -30% 0px",
});

function callbackFunction(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("meFromLeft_a");
    } else{
      entry.target.classList.remove("meFromLeft_a");
    }
  });
};

observer.observe(meFromLeft);

// HERE WE MOVE ME FROM TOP right]

const meFromTopRight = document.getElementById('meFromTopRight');

const ob = new IntersectionObserver(callback,{
  rootMargin: "0px 0px -30% 0px",
});

function callback(entries){
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add("meFromTopRight_a");
    } else{
      entry.target.classList.remove("meFromTopRight_a");
    }
  });
};
ob.observe(meFromTopRight);

// HERE WE MOVE SECTION 3 part 1

const ob1 = new IntersectionObserver(callback1,{
  rootMargin: "0px 0px -10% 0px",
});



document.querySelectorAll('#third_section div').forEach(div => {
  ob1.observe(div);
});

function callback1(entries){
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add("item_a");
    } else{
      entry.target.classList.remove("item_a");
    }
  });
};

// Section 6 with SKILSS

// 50 works
const ob50 = new IntersectionObserver(callback50,{
  rootMargin: "0px 0px -10% 0px",
});

let be50 = document.querySelectorAll('.be50')
be50.forEach(be50 =>{
  ob50.observe(be50);
});

function callback50(entries){
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add("YAY50");
    } else{
      entry.target.classList.remove("YAY50");
    }
  });
};

// 60
const ob60 = new IntersectionObserver(callback60,{
  rootMargin: "0px 0px -10% 0px",
});

let be60 = document.querySelectorAll('.be60')
be60.forEach(be60 =>{
  ob60.observe(be60);
});

function callback60(entries){
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add("YAY60");
    } else{
      entry.target.classList.remove("YAY60");
    }
  });
};

// =========================

const ob70 = new IntersectionObserver(callback70,{
  rootMargin: "0px 0px -10% 0px",
});

let be70 = document.querySelectorAll('.be70')
be70.forEach(be70 =>{
  ob70.observe(be70);
});

function callback70(entries){
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add("YAY70");
    } else{
      entry.target.classList.remove("YAY70");
    }
  });
};

// ====================

const ob75 = new IntersectionObserver(callback75,{
  rootMargin: "0px 0px -10% 0px",
});

let be75 = document.querySelectorAll('.be75')
be75.forEach(be75 =>{
  ob75.observe(be75);
});

function callback75(entries){
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add("YAY75");
    } else{
      entry.target.classList.remove("YAY75");
    }
  });
};
// ========================================

const ob80 = new IntersectionObserver(callback80,{
  rootMargin: "0px 0px -10% 0px",
});

let be80 = document.querySelectorAll('.be80')
be80.forEach(be80 =>{
  ob80.observe(be80);
});

function callback80(entries){
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add("YAY80");
    } else{
      entry.target.classList.remove("YAY80");
    }
  });
};

// ========================================

const ob85 = new IntersectionObserver(callback85,{
  rootMargin: "0px 0px -10% 0px",
});

let be85 = document.querySelectorAll('.be85')
be85.forEach(be85 =>{
  ob85.observe(be85);
});

function callback85(entries){
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add("YAY85");
    } else{
      entry.target.classList.remove("YAY85");
    }
  });
};

// ========================================
const ob90 = new IntersectionObserver(callback90,{
  rootMargin: "0px 0px -10% 0px",
});

let be90 = document.querySelectorAll('.be90')
be90.forEach(be90 =>{
  ob90.observe(be90);
});

function callback90(entries){
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add("YAY90");
    } else{
      entry.target.classList.remove("YAY90");
    }
  });
};

// ========================================

const ob95 = new IntersectionObserver(callback95,{
  rootMargin: "0px 0px -10% 0px",
});

let be95 = document.querySelectorAll('.be95')
be95.forEach(be95 =>{
  ob95.observe(be95);
});

function callback95(entries){
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add("YAY95");
    } else{
      entry.target.classList.remove("YAY95");
    }
  });
};

// ========================================
const ob100 = new IntersectionObserver(callback100,{
  rootMargin: "0px 0px -10% 0px",
});

let be100 = document.querySelectorAll('.be100')
be100.forEach(be100 =>{
  ob100.observe(be100);
});

function callback100(entries){
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add("YAY100");
    } else{
      entry.target.classList.remove("YAY100");
    }
  });
};

// ========================================
