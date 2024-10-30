(function () {
    var canvas = document.getElementById('hoh');
var ctx = canvas.getContext('2d');

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}


const inY = canvas.height/8
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;



const q = Math.floor(random(1,1.3))



const paleta1 = ["#ff0f7b","#f89b29"]
const paleta2 = ["#0061ff","#60efff"]
const paleta3 = ["#293F14","#FF99C8"]//
const paleta4 = ["#ff1b6b","#45caff"]
const paleta5 = ["#42047e","#07f49e"]
const paleta6 = ["#293F14","#FF785A"]//
const paleta7 = ["#00ff87","#60efff"]
const paleta8 = ["#b5c6e0","#ebf4f5"]
const paleta9 = ["#e81cff","#40c9ff"]
const paleta10 = ["#103783","#9bafd9"]
const paleta11 = ["#9bafd9","#103783"]
const paleta12 = ["#102542","#cc2936"]
const paleta13 = ["#102542","#faae7b"]
const paleta14 = ["#2b2d42","#8d99ae"]//
const paleta15 = ["#102542","#f87060"]//
const paleta16 = ["#696eff","#f8acff"]
const paleta17 = ["#432371","#faae7b"]//
const paleta18 = ["#343e3d","#a8c256"]
const paleta19 = ["#0d3b66","#faf0ca"]//
const paleta20 = ["#00f59b","#7014f2"]//
const paleta21 = ["#264653","#2a9d8f"]
const paleta22 = ["#006e90","#f18f01"]//
const paleta23 = ["#d5b3ff","#fbd960"]//
const paleta24 = ["#60efff","#0061ff"]
const paleta25 = ["#e9b7ce","#d3f3f1"]//
const paleta26 = ["#ff5858","#ffc8c8"]//
const paleta27 = ["#5bc0eb","#fde74c"]//
const paleta28 = ["#95f9c3","#0b3866"]//
const paleta29 = ["#233d4d","#fe7f2d"]//
const paleta30 = ["#ffba49","#20a39e"]//
const paleta31 = ["#003049","#d62828"]//
const paleta32 = ["#f8c828","#007e5d"]//
const paleta33 = ["#ef798a","#f7a9a8"]//
const paleta34 = ["#6c9a8b","#e8998d"]//
const paleta35 = ["#e8c547","#30323d"]//
const paleta36 = ["#f68080","#f9b16e"]//
const paleta37 = ["#c05746","#adc698"]//
const paleta38 = ["#6c17b6","#ff5e00"]//
const paleta39 = ["#0f7173","#f05d5e"]//
const paleta40 = ["#FF99C8","#293F14"]//
const paleta41 = ["#45caff","#ff1b6b"]
const paleta42 = ["#07f49e","#42047e"]
const paleta43 = ["#FF785A","#293F14"]//
const paleta44 = ["#60efff","#00ff87"]
const paleta45 = ["#ebf4f5","#b5c6e0"]
const paleta46 = ["#40c9ff","#e81cff"]
const paleta47 = ["#9bafd9","#103783"]
const paleta48 = ["#103783","#9bafd9"]
const paleta49 = ["#f8acff","#696eff"]
const paleta50 = ["#faae7b","#432371"]//
const paleta51 = ["#a8c256","#343e3d"]
const paleta52 = ["#faf0ca","#0d3b66"]//
const paleta53 = ["#7014f2","#00f59b"]//
const paleta54 = ["#2a9d8f","#264653"]
const paleta55 = ["#f18f01","#006e90"]//
const paleta56 = ["#fbd960","#d5b3ff"]//
const paleta57 = ["#d3f3f1","#e9b7ce"]//
const paleta58 = ["#ffc8c8","#ff5858"]//
const paleta59 = ["#fde74c","#5bc0eb"]//
const paleta60 = ["#0b3866","#95f9c3"]//
const paleta61 = ["#20a39e","#ffba49"]//
const paleta62 = ["#007e5d","#f8c828"]//
const paleta63 = ["#f7a9a8","#ef798a"]//
const paleta64 = ["#e8998d","#6c9a8b"]//
const paleta65 = ["#30323d","#e8c547"]//
const paleta66 = ["#f9b16e","#f68080"]//
const paleta67 = ["#adc698","#c05746"]//
const paleta68 = ["#ff5e00","#6c17b6"]//
const paleta69 = ["#f05d5e","#0f7173"]//


const paletas = [paleta1,paleta2,paleta3,paleta4,paleta5,paleta6,paleta7,paleta8,paleta9,paleta10,paleta11,paleta12,paleta13,paleta14,paleta15,paleta16,paleta17,paleta18,paleta19,paleta20,paleta21,paleta22,paleta23,paleta24,paleta25,paleta26,paleta27,paleta28,paleta29,paleta20,paleta21,paleta22,paleta32,paleta33,paleta34,paleta35,paleta36,paleta37,paleta38,paleta39,paleta40,paleta41,paleta42,paleta43,paleta44,paleta45,paleta46,paleta47,paleta48,paleta49,paleta50,paleta51,paleta52,paleta53,paleta54,paleta55,paleta56,paleta57,paleta58,paleta59,paleta60,paleta61,paleta62,paleta63,paleta64,paleta65,paleta66,paleta67,paleta68,paleta69]
const paleta = randomFromList(paletas);

const colorTronco = `#212529`

function randomFromList(items){
    return items[Math.floor(Math.random()*items.length)];
    }

a = random(10,25)
b = random(10,25)
c = random(10,25)
d = random(10,40)
e = random(20,40)
f = random(20,40)
g = random(20,40)
h = random(0.4,0.8)
i = random(0.4,0.8)
j = random(0.4,0.8)
k = random(0.4,0.8)
l = random(0.4,0.8)
m = random(0.4,0.8)
n = random(0.4,0.8)
o = random(0.4,0.8)
xs = random(100,900)
ys  = random(50,400)
tams = random(6,30)
def = Math.random()
t = random(0,310)
di = random(1,5)

generate()
function generate(){
  const paleta = randomFromList(paletas);
createBackground()
createOverlay(paleta[0], 1, 2, m, f);
createTree()
}




function createBackground() {
  var lg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  lg.addColorStop(0, paleta[1]);
  lg.addColorStop(0.6, paleta[1]);
  lg.addColorStop(0.6, paleta[1]);
  lg.addColorStop(1, paleta[0]);
  ctx.fillStyle = lg;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function createTree(centerX, inY, length, angle, depth, branchWidth) {
 
  var newLength, newAngle, newDepth, maxBranch = 2,
      endX, endY, maxAngle = 2 * Math.PI / 5, subBranches;

  ctx.beginPath();
  ctx.moveTo(centerX, inY);
  endX = centerX + length * Math.cos(angle);
  endY = inY + length * Math.sin(angle);
  ctx.lineCap = 'round';
  ctx.lineWidth = branchWidth;
  ctx.lineTo(endX, endY);
  
  if (depth <= 1) {
   
    ctx.strokeStyle = colorTronco;
  }
  else if (depth <= 2) {
   
    ctx.strokeStyle = paleta[1];
  }
  else {
    ctx.strokeStyle =colorTronco;
  }
 
  ctx.stroke();
  newDepth = depth - 1;

  if(!newDepth) {
    return;
  }
  subBranches = (Math.random() * (maxBranch -1.3)) +1.3;
  branchWidth *= 0.8;

  for (var i = 0; i < subBranches; i++) {
    newAngle = angle + Math.random() * maxAngle - maxAngle * 0.5;
    newLength = length * (0.7 + Math.random() * 0.3);
    
    createTree(endX, endY, newLength, newAngle, newDepth, branchWidth);
  }

}

function createCasaPintada(ejex,ejey){
  x = ejex
  y= ejey
  tam =random(50,150)
  taml=tam*3/2
  largo= tam+taml
  
  ctx.beginPath()
  
  ctx.fillStyle="#495057"
  ctx.globalAlpha = 1;
  
  ctx.moveTo(x,y)
  ctx.lineTo(x,y+tam+200)
  ctx.lineTo(x+tam,y+tam+200)
  ctx.lineTo(x+tam,y)
  ctx.lineTo(x+tam/2,y-tam/2)
  ctx.lineTo(x,y)
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(x+tam/2,y-tam/2)
  ctx.lineTo(x+tam*2,y-tam/2)
  ctx.lineTo(x+largo,y)
  ctx.lineTo(x+tam,y)
  ctx.lineTo(x+tam/2,y-tam/2)
  ctx.fillStyle="#333333"
  
  ctx.fill()
  ctx.closePath()
  ctx.beginPath()
  ctx.moveTo(x+tam,y)
  ctx.lineTo(x+largo,y)
  ctx.lineTo(x+largo,y+tam+200)
  ctx.lineTo(x+tam,y+tam+200)
  ctx.lineTo(x+tam,y)
  ctx.fillStyle="#fefae0"
  
  ctx.fill()
  ctx.closePath()

 

  

  

}

function createCasaAtras(ejex,ejey){

  x = ejex
  y= ejey
  tam = random(70,100)
  tam3=tam*3
  tam2=tam*2
  medioTam= tam/3

  ctx.beginPath()
  ctx.moveTo(x,y)
  ctx.lineTo(x-tam3,y)
  ctx.lineTo(x-tam3,y-tam)
  ctx.lineTo(x-tam2,y-1.8*tam)
  ctx.lineTo(x-tam2,y-tam2)
  ctx.lineTo(x-tam,y-tam3)
  ctx.lineTo(x,y-tam2)
  ctx.lineTo(x,y)
  ctx.lineWidth = 1;
  ctx.fillStyle="#eeeeee"
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(x,y)
  ctx.lineTo(x,y-tam2)
  ctx.lineTo(x+medioTam,y-1.5*tam)
  ctx.lineTo(x+medioTam,y)
  ctx.lineTo(x,y)
  ctx.fillStyle="#495057"
  ctx.strokeStyle="#495057"
  ctx.lineWidth = 1;
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(x-tam3,y-tam)
  ctx.lineTo(x-tam2,y-1.8*tam)
  ctx.moveTo(x-tam2,y-tam2)
  ctx.lineTo(x-tam,y-tam3)
  ctx.lineTo(x,y-tam2)
  ctx.lineTo(x+medioTam,y-1.5*tam)
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#333333";
 
  ctx.stroke()

}
function createCasaCheta(ejex,ejey){

  x = ejex
  y= ejey
  tam = random(80,120)
  tam3=tam*3/2
  tam2=tam*2
  tam5=tam*5/2
  

  ctx.beginPath()
  ctx.moveTo(x,y+150)
  ctx.lineTo(x-tam5,y+150)
  ctx.lineTo(x-tam5,y-tam)
  // ctx.lineTo(x-tam3,y-tam3)
  ctx.lineTo(x-tam3,y-tam2)
  ctx.lineTo(x,y-tam)
  ctx.lineTo(x,y+150)
  ctx.lineWidth = 1;
  ctx.fillStyle="#eeeeee"
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(x-tam5,y-tam+6)
  ctx.lineTo(x-tam3,y-tam2+6)
  ctx.moveTo(x-tam3,y-tam2+6)
  ctx.lineTo(x,y-tam+6)
  ctx.strokeStyle = "#333333";
  ctx.lineWidth = 2;
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(x-tam5,y-tam)
  ctx.lineTo(x-tam3,y-tam2)
  ctx.moveTo(x-tam3,y-tam2)
  ctx.lineTo(x,y-tam)
  ctx.strokeStyle = "#333333";
  ctx.lineWidth = 5;
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.fillStyle="#495057"
  ctx.moveTo(x,y-tam)
  ctx.lineTo(x+tam/3,y-tam+10)
  ctx.lineTo(x+tam/3,y+50)
  ctx.lineTo(x,y+50)
  ctx.fill()
  ctx.strokeStyle = "#333333";
  ctx.lineWidth = 2;
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x,y-tam)
  ctx.lineTo(x+tam/3,y-tam+10)
  ctx.strokeStyle = "#333333";
  ctx.lineWidth = 2;
  ctx.stroke()
  ctx.closePath()
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x-tam3,y-tam2)
  ctx.lineTo(x-tam3+tam/3,y-tam2+10)
  ctx.lineTo(x+tam/3,y-tam+10)
  ctx.lineTo(x,y-tam)
  ctx.lineTo(x-tam3,y-tam2)
  ctx.strokeStyle = "#333333";
  ctx.fillStyle = "#333333";
  ctx.lineWidth = 1;
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  

 
  

}




function createOverlay(color, filling, saw, hard,alto) {
    hard = hard || 0.5;
    var	maxHeight =1000; //el inicio
    var t = random(50,800)
    var ar2 = random(50,800)
    var ar3 = random(50,800)
    var bol = random(50,800)
    var bol2 = random(50,800)
    var bol3 = random(50,800)
    var r = random(50,800)
    var postes = Math.random()
    var casa = random(50,700)
    var otraCasa= random(200,700)
    var casas = Math.random()
    var arboles = Math.random()

    var x,
height = 0.6 * maxHeight, 
slope = (Math.random() * saw) * 2 - saw;

for (x = 0; x < canvas.width; x++) {

height += slope * 0.25;

slope += (Math.random() * hard) * 2 - hard;

if (slope > saw) {
  slope = saw;
}

if (slope < -saw) {
  slope = -saw * 0.3;
}
      
      ctx.beginPath();
      
      ctx.moveTo(x , maxHeight );
      ctx.lineTo(x, height);
  
      ctx.globalAlpha = filling;
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.stroke();


      if(casas<0.33){
        if(x===otraCasa){
          createCasaAtras(x+300,height+100)
        }

      }else if(casas<0.66){
        if(x===otraCasa){
           createCasaCheta(x+300,height+50)
        }

      }else{
        if(x===otraCasa){
          createCasaPintada(x,height-40)
        }
      }


      if(arboles<0.5){
        if(x===t){
        alto= random(15,25)
        bush= random(12,19)
        createTree(x+2,height, alto, -Math.PI / 2, bush,4);
      }

      }else if(arboles<0.75){
        if(x===ar2){
          alto= random(15,25)
          bush= random(12,19)
          createTree(x+2,height, alto, -Math.PI / 2, bush,4);}

          if(x===ar3){
            alto3= random(15,25)
            bush3= random(12,19)
            createTree(x+2,height, alto3, -Math.PI / 2, bush3,4);}
      }else{
        if(x===bol){
          alto= random(15,25)
          bush= random(12,19)
          createTree(x+2,height, alto, -Math.PI / 2, bush,4);}

          if(x===bol2){
            alto2= random(15,25)
            bush2= random(12,19)
            createTree(x+2,height, alto2, -Math.PI / 2, bush2,4);
          }

            if(x===bol3){
              alto3= random(15,25)
              bush3= random(12,19)
              createTree(x+2,height, alto3, -Math.PI / 2, bush3,4);
            }

      }
  
    if(postes>0.5){

      if(x===r){
       
        createPoste(r+5,height+20)
     

      }}
     

      if(x%27===0){
        ctx.beginPath()
        ctx.moveTo(x+2,height)
        ctx.lineTo(x+random(-4,4),height-random(15,20))
        ctx.strokeStyle = colorTronco;
        ctx.stroke()
      }

  
  

    }
  }



  function createPoste(px,py){
    ctx.beginPath()
    ctx.moveTo(px,py)
    ctx.lineTo(px,py-100)
    ctx.lineWidth=4
    ctx.lineCap = 'round';
    ctx.strokeStyle = `#212529`
    ctx.moveTo(px,py-85)
    ctx.lineTo(px-15,py-88)
    ctx.moveTo(px,py-85)
    ctx.lineTo(px+15,py-82)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.arc(px-12,py-90,2,0 , 2* Math.PI)
    
    
  ctx.fill()
  ctx.stroke()
  ctx.closePath() 
  ctx.beginPath()
  ctx.arc(px+12,py-86,2,0 , 2* Math.PI) 
  
ctx.fill()
ctx.stroke()
ctx.closePath() 
ctx.beginPath()
ctx.bezierCurveTo(px-12,py-90,px,py-0,px,py);
ctx.moveTo(px+12,py-90)
ctx.bezierCurveTo(px+12,py-90,px,py-0,px,py);
ctx.lineWidth=1
ctx.stroke()
ctx.closePath()

  
  }
  })();