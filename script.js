let sliderOutput = document.querySelector('.range-slider-output');

document.querySelector('.range-slider').addEventListener('input', function(event) {
  sliderOutput.innerHTML = event.currentTarget.value;
});