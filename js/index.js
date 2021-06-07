// Your code goes here

// 1 mouse enter
let logoHead = document.querySelector('h1')

logoHead.addEventListener('mouseenter', function (event) {
  event.target.style.color = 'blue'
})

// 2 mouse leave

logoHead.addEventListener('mouseleave', event => {
  event.target.style.color = 'black'
})

// 3 click

let links = document.querySelector('.nav-link')
  
links.addEventListener('click', function () {
  console.log('You clicked on the home link')
})

// 4 double click

let busPic = document.querySelector('.intro img')

busPic.addEventListener('dblclick', event => {
  busPic.style.transform = 'scale(1.5)'
  busPic.style.transition = 'transform 2s'
})

busPic.addEventListener('click', event => {
  busPic.style.transform = 'scale(1)'
})

// 5 load

window.addEventListener('load', event => {
  // alert('Thank you for noticing this new notice. Your noticing it has been noted')
  // alert('And will be reported to the authorities')
})



// 6 mouse over

const navLinks = document.querySelectorAll('.nav a')
navLinks.forEach((elem) => {
  elem.addEventListener('mouseover', event => {
    event.target.style.color = 'purple'
  })

  elem.addEventListener('mouseleave', event => {
    event.target.style.color = 'black'
  })
})


// 7 key up

const navHead = document.querySelector('.main-navigation')

document.addEventListener('keyup', function (event) {
  if (event.key === 'Shift') {
    navHead.style.backgroundColor = '#defce6'
  }
})