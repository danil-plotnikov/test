customSelect('.order-form__select');

class Slider {
 constructor (rangeElement, valueElement, options) {
   this.rangeElement = rangeElement
   this.valueElement = valueElement
   this.options = options

   // Attach a listener to "change" event
   this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
 }

 // Initialize the slider
 init() {
   this.rangeElement.setAttribute('min', options.min)
   this.rangeElement.setAttribute('max', options.max)
   this.rangeElement.value = options.cur

   this.updateSlider()
 }

 generateBackground(rangeElement) {   
   if (this.rangeElement.value === this.options.min) {
     return
   }

   let percentage =  (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100
   return 'background: linear-gradient(to right, #42A9ED ' + percentage + '%, #d3edff ' + percentage + '%, #dee1e2 100%)'
 }

 updateSlider (newValue) {
   this.valueElement.innerHTML = this.rangeElement.value + ' %'
   this.rangeElement.style = this.generateBackground(this.rangeElement.value)
 }
}

let rangeElement = document.querySelector('.order-slider__range')
let valueElement = document.querySelector('.order-slider-top__value') 

let options = {
 min: 0,
 max: 100,
 cur: 40
}

if (rangeElement) {
 let slider = new Slider(rangeElement, valueElement, options)
 slider.init()
}

let fileInput = document.querySelector('.order-file__input')
let fileText = document.querySelector('.order-file__text')

fileInput.addEventListener('change', function (e) {
 if (this.files[0] == undefined || this.files[0].length === 0) {
  fileText.textContent = 'Файл не прикреплен';
 } else {
  fileText.textContent = this.files[0].name
 }
})

//nav-mobile
let menu = document.querySelector('.header-menu')
let nav = document.querySelector('.header-nav')

menu.addEventListener('click', () => {
  nav.classList.toggle('active')
  menu.classList.toggle('active')
})
