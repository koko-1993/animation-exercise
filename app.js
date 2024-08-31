const bodyel1 = document.querySelector("body");

// console.log(bodyel1);

bodyel1.addEventListener('mousemove',(event)=>{

    // console.log(event.offsetX);

    const xposition = event.offsetX;
    const yposition = event.offsetY;
    const spanele = document.createElement("span");
    spanele.style.left = xposition + "px";
    spanele.style.top = yposition + "px";

    const size = Math.random()*100;
    spanele.style.width = size + "px";
    spanele.style.height = size + "px";

    bodyel1.appendChild(spanele);

    setTimeout(()=>{
        spanele.remove();
    }, 3000);
});