
// Бургер

const burger = document.querySelector('.burger__btn'),
  nav = document.querySelector('.header__burger'),
  logo = document.querySelector('.header__logo'),
  container =  document.querySelector('.black')

  if (burger) {
    burger.addEventListener("click", function(e) { 
      document.body.classList.toggle('_lock')
      burger.classList.toggle('toggle')
      nav.classList.toggle('header__burger_active')
      logo.classList.toggle('header__logo_active')
      container.classList.toggle('black_active')
    })

    container.addEventListener("click",function(e) {
      document.body.classList.remove('_lock')
      burger.classList.remove('toggle')
      nav.classList.remove('header__burger_active')
      logo.classList.remove('header__logo_active')
      container.classList.remove('black_active')
    })
  }

  
