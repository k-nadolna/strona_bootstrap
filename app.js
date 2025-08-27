const navbar = document.querySelector('.navbar');

function navbarScrolled() {
  if(window.scrollY > 50){
    navbar.classList.add('scrolled');
  }else{
    navbar.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', navbarScrolled);



// const img = document.querySelector('.img-about');

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');
//       observer.unobserve(entry.target);
//     }
//   });
// }, { threshold: 0.1 });

// console.log(img);
// observer.observe(img);
