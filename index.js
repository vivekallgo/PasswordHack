// Created by Jonathan Pizarra

//DONT DELETE THIS LINE</script><script type="text/babel">
window.onload = () => {
alert("Wait until N > 20 to see some beautiful patterns.")

const canv = document.getElementById("canv");
const stats = document.getElementById("stats");
const but = document.getElementById("but");

const h = window.innerHeight;
const w = window.innerWidth;
const pxr = window.devicePixelRatio;
let hp = h*pxr;
let wp = w*pxr;
let r = wp/2-10;
let toggle = false;
var setInt, setInt2 ;
//color vars
let color;
let red = 65;
let green = 15;
let blue = 245;
let redP = -1;
let greenP = 1;
let blueP = -1;
//dimensions
canv.height = hp;
canv.width = wp;
canv.style.height = h + "px";
canv.style.width = w + "px";
let c = canv.getContext("2d");
c.lineWidth = 1;
//
let rad =(deg)=> deg * Math.PI / 180;
let dotX =(a)=> (wp/2) + r * Math.cos(rad(a));
let dotY =(a)=> (hp/2) + r * Math.sin(rad(a));
let count = 0;

let clearc =()=>{
    c.beginPath();
    c.fillStyle = "#FFF";
    c.fillRect(0,0,wp,hp);
    c.closePath();
}

let arc =()=>{
   c.beginPath();
   c.arc(wp/2, hp/2, r, 0, Math.PI*2);
   c.closePath();
   c.strokeStyle = "blue";
   c.stroke();
}

let draw_lines =(count)=>{
    color = update_color();
    for(let j1=0; j1<500; j1++){
        c.beginPath();
        c.moveTo(dotX(j1*0.72), dotY(j1*0.72));
        c.lineTo(dotX(j1*0.72*count), dotY(j1*0.72*count));
        c.closePath();
        c.strokeStyle = color;
        c.stroke();
    }
}

let update_color =()=>{
    red += redP;
    green += greenP;
    blue += blueP;
    
    if(blue <= 0 || blue >= 255)
        blueP = -blueP;
    if(green <= 0 || green >= 200)
        greenP = -greenP;
    if(red <= 0 || red >= 255)
        redP = -redP;
    return "rgb(" + red + "," + green + "," + blue + ")";
}

let init1 =()=>{
  clearInterval(setInt2);
  setInt = setInterval(()=>{

    clearc();
    arc();
    draw_lines(count);
    stats.innerHTML = "N = " + count;
    count+=0.05;

  },70);
}

let init2 =()=>{
    clearc();
    clearInterval(setInt);
    let input = prompt("Enter a number.\nTry 26, 56, 100, 102, 112, 76 or 72");
    
    let j1 = 0;
    stats.innerHTML = "N = " + input;
    setInt2 = setInterval(()=>{
        arc();
        c.beginPath();
        c.moveTo(dotX(j1*0.72), dotY(j1*0.72));
        c.lineTo(dotX(j1*input*0.72), dotY(j1*input * 0.72));
        c.closePath();
        c.strokeStyle = update_color();
        c.stroke();
        j1++;
        update_color();
        update_color();
        if(j1 >= 500){
            clearInterval(setInt2);
            return;
        }
    },70) ;
}
but.addEventListener("click", ()=>{
    toggle? init1() :  init2();
    toggle = !toggle;
})

init1();


}
//DONT DELETE THIS LINE</script>