(function () {
function randomFromList(items){
    return items[Math.floor(Math.random()*items.length)];}
  
    function random(min, max) {
      return Math.floor((Math.random() * (max - min + 1)) + min);}

// Obtener el canvas y el contexto
var canvas = document.getElementById("backgrounds");
var ctx = canvas.getContext("2d");

const width = 400
const height = 700

const color = Math.random()
if(color<0.3){
coloresTodos = ["#ff7b00", "#ff8800", "#ff9500", "#ffa200", "#ffaa00", "#ffb700", "#ffc300", "#ffd000", "#ffdd00", "#ffea00", "#db00b6", "#e500a4", "#f20089","#07c8f9", "#09a6f3","#c200fb", "#d704b2", "#e2068d", "#ec0868", "#f41c34", "#fc2f00", "#f45608", "#ec7d10", "#f69d0d", "#ffbc0a","#fe149a", "#ff13cd", "#ff13fc", "#e113fd", "#b513fd"]
}else if(color<0.6){
coloresTodos = ["#8338ec", "#3a86ff","#2d00f7", "#6a00f4", "#8900f2", "#a100f2", "#b100e8","#0c63e7", "#0d41e1","#257ce6", "#2082e4", "#1c8fe7", "#169ce8", "#0fb4ec", "#0ac1ed", "#06cdef", "#00daf0", "#06dcd5", "#14ddac"]}else{
coloresTodos = ["#af3b6e","#e661b2","#ec4e20","#ff760c","#ffe330","#0a47ed","#410099","#643a71","#00d1d9","#75b09c","#005277"]
}

const color1 = randomFromList(coloresTodos)
const color2 = coloresTodos.filter(color => color != color1);
const color3 = coloresTodos.filter(color => color != color2);
const color33 = randomFromList(coloresTodos)
const color4 = coloresTodos.filter(color => color != color3);
const color44 = randomFromList(coloresTodos)
const color5 = coloresTodos.filter(color => color != color4);
const color55 = randomFromList(coloresTodos)
const color6 = coloresTodos.filter(color => color != color5);
const color66 = randomFromList(coloresTodos)
const color7 = coloresTodos.filter(color => color != color6);
const color77 = randomFromList(coloresTodos)

ctx.filter="blur(10px)"

ctx.beginPath()
ctx.fillRect(0,0,width,height)
ctx.fillStyle=color1
ctx.fill()
ctx.closePath()

cantidad=random(4,10)

for(x=0;x<2000;x++){
colorin=random(0,cantidad)
// Establecer el color de relleno de la mancha
ctx.fillStyle = coloresTodos[colorin];

// Empezar la ruta de dibujo
ctx.beginPath();

// Establecer un punto de inicio aleatorio
var x = Math.random() * canvas.width;
var y = Math.random() * canvas.height;
ctx.moveTo(x, y);

// Crear una curva cuadrática aleatoria con dos puntos de control
for (var i = 0; i < 400; i++) {
  var cpx = x + Math.random() * 100 - 50;
  var cpy = y + Math.random() * 100 - 50;
  x = x + Math.random() * 100 - 50;
  y = y + Math.random() * 100 - 50;
  ctx.quadraticCurveTo(cpx, cpy, x, y);
}

// Cerrar la ruta de dibujo
ctx.closePath();

// Rellenar la mancha
ctx.fill();
}

ctx.filter="blur(0px)"
puntos=Math.random()
if(puntos<0.7){
for(y=0;y<height;y++){
    
    b=6*y
    for(x=0;x<width;x++){
        colorp=randomFromList(coloresTodos)
        radio=Math.random()
        c=random(0,3)
        ctx.beginPath()
        ctx.arc(6*x,b,c+radio,0, 2 * Math.PI)
        ctx.fillStyle="rgba(255,255,255,0.1)"
       
        ctx.fill()
        ctx.closePath()
    }
  }
}

cir1=Math.random()
if(cir1<0.8){

for(x=0;x<200;x++){
    ctx.beginPath()
    ctx.arc(0,height/2,5*x,0, 2 * Math.PI)
    ctx.setLineDash([15, 15]);
    ctx.strokeStyle="rgba(255,255,255,0.2)"
    ctx.stroke()
    ctx.closePath()
}
}
cir2=Math.random()
if(cir2<0.8){
for(x=0;x<200;x++){
    ctx.beginPath()
    ctx.arc(width,height/2,5*x,0, 2 * Math.PI)
    ctx.setLineDash([15, 15]);
    ctx.strokeStyle="rgba(255,255,255,0.2)"
    ctx.stroke()
    ctx.closePath()
}
}

})();