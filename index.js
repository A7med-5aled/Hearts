const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove' , (e)=> {
    const span = document.createElement('span');
    const xPos = e.offsetX;
    const yPos = e.offsetY;
    const random = Math.random()*100;
    span.style.width = random + 'px';
    span.style.height = random +'px';
    span.style.top = yPos +'px';
    span.style.left = xPos +'px';
    bodyEl.appendChild(span);
    setTimeout( ()=> {
        span.remove();
    },3000);

    
 
    // console.log(e);
    
    // console.log('span')
})