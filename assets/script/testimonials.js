const container = document.querySelector('.feedback-area__user-message-area');
const testimonialsMover = document.querySelector('.testimonials-mover');
let interval = setInterval(replace, 10000);
let pause = false;

container.addEventListener('click', (event) => {
  if(event.target.closest('.feedback-area__user-message')){
    if(pause) return
    pause = true;
    clearInterval(interval);
    setTimeout(() => {
      interval = setInterval(replace, 10000)
      pause = false;}, 20000);
  }
});
function replace(){
  let value = parseInt(testimonialsMover.style.marginLeft);
  if(!value) value = 0;
  value -= 500;
  if(value < -4500) value = 0;
  testimonialsMover.style.marginLeft = value +'px';
}