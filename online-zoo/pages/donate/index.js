let amounts = document.querySelectorAll(".feed__bar_item"),
  feedAmount =  document.querySelector('.feed__input')  

amounts.forEach(el => {
  el.addEventListener("click", function() {         
    amounts.forEach(item => {
        item.classList.remove("item_active")
    })
    el.classList.add("item_active")
    let number = Number(el.children[1].innerText) 
    feedAmount.value = number
  })
})

feedAmount.addEventListener("input", function() {
  let new_amount = this.value
  console.log(typeof new_amount, new_amount, 'new_amount')
  let amount_class = `.feed__bar_item${new_amount}`
  console.log(amount_class)
  let new_circles = document.querySelector(amount_class)
  if (new_amount) {
    amounts.forEach(item => {
      item.classList.remove("item_active")
    })
    if (new_circles) {
      new_circles.classList.add("item_active")
    }    
  }
})

