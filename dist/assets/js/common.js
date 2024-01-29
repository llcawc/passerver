// commmon.js

// get current year
const year = document.querySelector('.year')
year ? (year.innerHTML = new Date().getFullYear()) : console.log('Selector ".year" not found')

// about
console.log('process is running ...')
