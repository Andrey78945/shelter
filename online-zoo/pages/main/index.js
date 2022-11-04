// Pop-up 
if (this.document.documentElement.clientWidth < 992) {
let testimonials = document.querySelectorAll(".testimonials__item"),
  backstage =  document.querySelector('.black'),
  closeBtn = document.querySelector(".pop-up__close"),
  modal = document.querySelector(".modal"),
  content = document.querySelector(".modal__content")
  
function closePopUp() {
    document.body.classList.remove('_lock') 
    backstage.classList.remove('black_active') 
    modal.classList.remove("modal__open")
    content.removeChild(content.children[0])
}  

testimonials.forEach(el => {
  el.addEventListener("click", function() {
    document.body.classList.toggle('_lock')
    modal.classList.toggle("modal__open")
    backstage.classList.toggle('black_active')
    content.append(el.querySelector('.testimonials__content').cloneNode(true))
  })
})

content.addEventListener("click", closePopUp)
closeBtn.addEventListener("click", closePopUp)
backstage.addEventListener("click", closePopUp)
}

// Карусель Pets
/*
var swiper = new Swiper(".mySwiper", {
  // Default parameters  
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
 
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2
    }, 
    992: {
      slidesPerView: 3
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".pets__button-next",
  },
});
*/
// Карусель Testimonials
if (this.document.documentElement.clientWidth >= 992) {
  let itemToShow = 3
  let corr = 30
  if (this.document.documentElement.clientWidth >= 1200) {
    itemToShow = 4
    corr = 28
  }
  console.log(itemToShow, 'itemToShow')
  const slider = document.querySelector('.slider__container'),
  track = document.querySelector('.testimonials__list') 

  var index = 0
  var position = 0
  let itemWidth = (slider.clientWidth - (itemToShow - 1) * 30) / itemToShow 
  let move = itemWidth + corr
  console.log(slider.clientWidth, 'slider.clientWidth')
  const range = document.querySelector('input[type="range"]'), 
    items = document.querySelectorAll('.testimonials__item'),
    size = items.length

  items.forEach((item) => item.style.minWidth = `${itemWidth}px`)  

  function moveTrack(steps) {
    
    while (steps !== 0) {
      if (steps < 0) {
        position += move
        track.style.transform = `translateX(${position}px)`
      steps++
      } else {
        position += -move
        track.style.transform = `translateX(${position}px)`
        steps--
      }      
    }
  }

  let rangeValue = function(){
    let newValue = range.value;
    console.log(newValue)
    let steps = newValue - index
    index = newValue 
    moveTrack(steps)

  }

range.addEventListener("input", rangeValue);
}
