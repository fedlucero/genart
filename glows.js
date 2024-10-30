
function randomFromList(items){
    return items[Math.floor(Math.random()*items.length)];}
  
    function random(min, max) {
      return Math.floor((Math.random() * (max - min + 1)) + min);}
  
      // function calcularOpacidad(ancho, cercania) {
      //   // Calcula un valor de opacidad basado en el ancho y la cercanía
      //   var distancia = Math.max(0, ancho / 2 - cercania);
      //   var opacidad = 1 - distancia / (ancho / 2);
      //   return opacidad;
      // }
  
      function encontrarPuntoDos(x1, y1, x2, y2,x4) {
        const m = (y2-y1)/(x2-x1)
        const x3 = (x1+x2)/2
        const y3 = (y1+y2)/2
        const m2= (-1)/m
        const y4 = m2*(x4-x3)+y3
        return y4
      }
  
      function encontrarPuntoPerpendicular(x1, y1, x2, y2, y) {
        const puntoMedioX = (x1 + x2) / 2; // coordenada x del punto medio de la línea original
        const puntoMedioY = (y1 + y2) / 2; // coordenada y del punto medio de la línea original
        const m = -(x2 - x1) / (y2 - y1); // pendiente de la línea perpendicular a la línea original
        const b = puntoMedioY - m * puntoMedioX; // ordenada al origen de la línea perpendicular
        const x = (y - b) / m; // coordenada x del punto de intersección entre las dos líneas
        return x;
      }
  
     const color=Math.random()
  
     if(color<0.25){
   coloresTodos = ["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4"]
     }else if(color<0.5){
   coloresTodos = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"]
     }else if(color<0.75){
   coloresTodos = ["#70d6ff", "#ff70a6", "#ff9770", "#ffd670", "#e9ff70"]
     }else if(color<0.9){
   coloresTodos = ["#f72585", "#7209b7", "#3a0ca3", "#4361ee", "#4cc9f0"]
     }else{
   coloresTodos = ["#a3f307", "#05f9e2", "#e2f705", "#f50b86", "#ff6f00"]
     }
  
      const principal = randomFromList(coloresTodos)
      const colorSecundario = coloresTodos.filter(color => color != principal);
      const secundario = randomFromList(colorSecundario)
  
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      const width = 400
      const height = 700
  
  float = Math.random()
  
  if(float<0.5){
  iniX=random(200,400)
  anchoCara=random(80,120)
  cenX= iniX+anchoCara
  finX=iniX+anchoCara*2
  
  iniY=random(400,600)
  finY=900+random(50,150)
  cenFinY=finY+50
  
  
  
  createBackground()
  function createBackground() {
    var lg = ctx.createLinearGradient(0,0, width,0);
    lg.addColorStop(0, principal);
    lg.addColorStop(0.1, principal);
    lg.addColorStop(0.9, secundario);
    lg.addColorStop(1, secundario);
    ctx.fillStyle = lg;
    ctx.fillRect(0, 0, width, height);
  }
  
  ctx.beginPath()
  ctx.lineWidth=4
  ctx.strokeStyle="rgba(0,0,0,0.1)"
  ctx.filter = "blur(2px)";
  ctx.moveTo(0,900)
  ctx.lineTo(width,900)
  ctx.stroke()
  ctx.closePath()
  
  
  ctx.beginPath()
  ctx.fillStyle="rgba(255,255,255,0.5)"
  ctx.filter = "blur(110px)";
  ctx.moveTo(iniX,iniY)
  ctx.lineTo(finX,iniY)
  ctx.lineTo(finX,finY)
  
  ctx.lineTo(iniX,finY)
  ctx.fill()
  ctx.closePath()
  ctx.filter = "blur(0px)";
  
  ctx.beginPath()
  ctx.fillStyle=principal
  ctx.moveTo(iniX,iniY)
  ctx.lineTo(iniX,finY)
  ctx.lineTo(cenX,cenFinY)
  ctx.lineTo(cenX,iniY)
  ctx.fill()
  ctx.closePath()
  
  ctx.beginPath()
  ctx.fillStyle=secundario
  ctx.moveTo(cenX,iniY)
  ctx.lineTo(finX,iniY)
  ctx.lineTo(finX,finY)
  ctx.lineTo(cenX,cenFinY)
  ctx.fill()
  ctx.closePath()
  
  
  ctx.beginPath()
  ctx.fillStyle="rgba(255,255,255,0.1)"
  ctx.filter = "blur(1px)";
  ctx.moveTo(iniX,iniY)
  ctx.lineTo(finX,iniY)
  ctx.lineTo(finX,finY)
  ctx.lineTo(cenX,cenFinY)
  ctx.lineTo(iniX,finY)
  ctx.fill()
  ctx.closePath()
  
  ctx.beginPath()
  ctx.fillStyle="rgba(0,0,0,0.02)"
  ctx.filter = "blur(1px)";
  ctx.moveTo(iniX,finY)
  ctx.lineTo(cenX,cenFinY)
  ctx.lineTo(iniX,cenFinY)
  ctx.fill()
  ctx.closePath()
  
  ctx.beginPath()
  ctx.fillStyle="rgba(0,0,0,0.02)"
  ctx.filter = "blur(1px)";
  ctx.moveTo(finX,finY)
  ctx.lineTo(cenX,cenFinY)
  ctx.lineTo(finX,cenFinY)
  ctx.fill()
  ctx.closePath()
  }else{
    iniX=random(200,400)
    anchoCara=random(80,120)
    cenX= iniX+anchoCara
    finX=iniX+anchoCara*2
    
    iniY=random(400,600)
    finY=900-random(50,150)
    cenFinY=finY+50
  
    ySombra=900+random(100,200)
    
    
    
    createBackground()
    function createBackground() {
      var lg = ctx.createLinearGradient(0,0, width,0);
      lg.addColorStop(0, principal);
      lg.addColorStop(0.1, principal);
      lg.addColorStop(0.9, secundario);
      lg.addColorStop(1, secundario);
      ctx.fillStyle = lg;
      ctx.fillRect(0, 0, width, height);
    }
    
    ctx.beginPath()
    ctx.lineWidth=4
    ctx.strokeStyle="rgba(0,0,0,0.1)"
    ctx.filter = "blur(2px)";
    ctx.moveTo(0,900)
    ctx.lineTo(width,900)
    ctx.stroke()
    ctx.closePath()
    
    
    ctx.beginPath()
    ctx.fillStyle="rgba(255,255,255,0.5)"
    ctx.filter = "blur(110px)";
    ctx.moveTo(iniX,iniY)
    ctx.lineTo(finX,iniY)
    ctx.lineTo(finX,finY)
    
    ctx.lineTo(iniX,finY)
    ctx.fill()
    ctx.closePath()
    ctx.filter = "blur(0px)";
    
    ctx.beginPath()
    ctx.fillStyle=principal
    ctx.moveTo(iniX,iniY)
    ctx.lineTo(iniX,finY)
    ctx.lineTo(cenX,cenFinY)
    ctx.lineTo(cenX,iniY)
    ctx.fill()
    ctx.closePath()
    
    ctx.beginPath()
    ctx.fillStyle=secundario
    ctx.moveTo(cenX,iniY)
    ctx.lineTo(finX,iniY)
    ctx.lineTo(finX,finY)
    ctx.lineTo(cenX,cenFinY)
    ctx.fill()
    ctx.closePath()
    
    
    ctx.beginPath()
    ctx.fillStyle="rgba(255,255,255,0.1)"
    ctx.filter = "blur(1px)";
    ctx.moveTo(iniX,iniY)
    ctx.lineTo(finX,iniY)
    ctx.lineTo(finX,finY)
    ctx.lineTo(cenX,cenFinY)
    ctx.lineTo(iniX,finY)
    ctx.fill()
    ctx.closePath()
  
    ctx.beginPath()
    ctx.fillStyle="rgba(0,0,0,0.02)"
    ctx.filter = "blur(2px)";
    ctx.moveTo(iniX,ySombra)
    ctx.lineTo(cenX,ySombra+50)
    ctx.lineTo(finX,ySombra)
    ctx.lineTo(cenX,ySombra-50)
    ctx.lineTo(iniX,ySombra)
    ctx.fill()
  
  
    // ctx.beginPath()
    // ctx.fillStyle="rgba(0,0,0,0.05)"
    // ctx.filter = "blur(2px)";
    // ctx.moveTo(iniX,ySombra)
    // ctx.lineTo(cenX,ySombra+50)
    // ctx.lineTo(iniX,ySombra+100)
    // ctx.lineTo(iniX-anchoCara,ySombra+50)
    // ctx.fill()
    // ctx.closePath()
  
    ySombra50=ySombra+50
    
    x4 = encontrarPuntoPerpendicular(iniX,ySombra, cenX, ySombra50,2200)
    x42 = encontrarPuntoPerpendicular(cenX,ySombra50,finX,ySombra,2200)
    console.log(x4);
    y4=400+ySombra
    
    ctx.beginPath()
    ctx.fillStyle="rgba(0,0,0,0.03)"
    ctx.filter = "blur(4px)";
    ctx.moveTo(cenX,ySombra+50)
    ctx.lineTo(finX,ySombra)
    ctx.lineTo(x42,y4)
    ctx.fill()
  
    ctx.beginPath()
    ctx.fillStyle="rgba(0,0,0,0.03)"
    ctx.filter = "blur(4px)";
    ctx.moveTo(iniX,ySombra)
    ctx.lineTo(cenX,ySombra+50)
    ctx.lineTo(x4,y4)
    ctx.lineTo(iniX,ySombra)
    ctx.fill()
  
   
    
   
  
  }
  
  
  
  
  
  fxpreview()
  
  
  
  
  