const buttons = document.querySelector('.map__buttons');
const map = document.querySelector('.map-image');
const container = document.querySelector('.map-container');
let scale = 1, x = 0, y = 0;
buttons.addEventListener('click', (event) => {
  if(event.target.matches('.next')){
    scale += 0.1;
    map.style.transform = `scale(${scale})`;
  }
  if(event.target.matches('.previous')){
    scale -= 0.1;
    map.style.transform = `scale(${scale})`;
  }
})

map.addEventListener('mousedown', (event) => {
  map.style.position = "relative";
  const containerShiftY = container.getBoundingClientRect().top;
  const containerShiftX = container.getBoundingClientRect().left;
  const x = event.clientX + containerShiftX - map.getBoundingClientRect().left;
  const y = event.clientY + containerShiftY - map.getBoundingClientRect().top;
  console.log(containerShiftY, containerShiftX);
  console.log(event.clientX, event.clientY);
  document.addEventListener('mousemove', move);
  function move(event){
    mapMove(event.pageY, event.pageX);
  }
  function mapMove(pageY, pageX){
    map.style.top = pageY - y  + 'px';
    map.style.left = pageX - x  + 'px';
  }
  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', move);
  });
})





