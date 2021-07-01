const main = document.querySelector('.video-area__iframe');
const sides = document.querySelector('.video-area__slider');
const hearth = document.querySelector('.video-area__icon:last-child');
const svgfill = document.querySelector('.svg-hearth');
hearth.addEventListener('click', (event) => {
  svgfill.classList.toggle('fill');
})
sides.addEventListener('click', (event) => {
  if(event.target.matches('.block')){
    temp = main.src;
    let iframe = event.target.nextElementSibling;
    let heartColor = svgfill.classList.contains('fill');
    let data = iframe.dataset.liked;
    svgfill.classList.remove('fill');
    iframe.dataset.liked = false;
    if(heartColor) iframe.dataset.liked = true;
    if(data === 'true') svgfill.classList.add('fill');
    main.src = iframe.src;
    iframe.src = temp;
  }
})
