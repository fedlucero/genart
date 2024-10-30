
function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];}
  
    function random(min, max) {
      return Math.floor((fxrand() * (max - min + 1)) + min);}
  
      // function calcularOpacidad(ancho, cercania) {
      //   // Calcula un valor de opacidad basado en el ancho y la cercanía
      //   var distancia = Math.max(0, ancho / 2 - cercania);
      //   var opacidad = 1 - distancia / (ancho / 2);
      //   return opacidad;
      // }
  
      function calcularOpacidad(ancho, cercania) {
        // Calcula un valor de opacidad basado en el ancho y la cercanía
        var distancia = Math.max(0, cercania - ancho / 2);
        var opacidad = 0.71 - distancia / (ancho / 2);
        return opacidad;
      }
  
      const coloresTodos = ["#af3b6e","#e661b2","#ec4e20","#ff760c","#ffe330","#0a47ed","#410099","#643a71","#00d1d9","#75b09c","#005277"]
    
      
      
      const principal = randomFromList(coloresTodos)
      const colorSecundario = coloresTodos.filter(color => color != principal);
      const secundario = randomFromList(colorSecundario)
  
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const width = 800
  const height = 1200
  tamñoSolGrande = random(200,700)
  tamañoSolChico = tamñoSolGrande/8
  xSol= random(100,700)
  centroX = 400
  centroY = 600
  //diferencia del centro y el sol
  dif = centroX - xSol
  
  //inicio monolito
  iniMonX=random(100,700)
  iniMonY=random(300,500)
  
  dif2= xSol - iniMonX
  
  
  minMon= centroY-iniMonY
  altoMon = random(minMon,400)
  anchoMon = random(80,120)
  
  //distancia del centro
  cercaniaAlSolY = altoMon+iniMonY - 600
  console.log(cercaniaAlSolY);
  
  diferenciaALsolY = iniMonY+altoMon -600
  console.log(diferenciaALsolY);
  
  diferenciaALsolX = iniMonX  -  xSol
  console.log(diferenciaALsolX);
  
  if (diferenciaALsolX<0){
    diferenciaX = diferenciaALsolX * -1
  }else{
    diferenciaX=diferenciaALsolX
  }
  
  console.log(diferenciaX);
  
  diferenciaTotal = diferenciaX + diferenciaALsolY
  console.log(diferenciaTotal/1000);
  
  // console.log(altoMon);
  // console.log(iniMonY);
  // console.log(cercaniaAlSol); 
  
  
  
  
  // Create a radial gradient
  // The inner circle is at x=110, y=90, with radius=30
  // The outer circle is at x=100, y=100, with radius=70
  const gradient = ctx.createRadialGradient(xSol, 600, tamañoSolChico, xSol, 600, tamñoSolGrande);
  
  // Add three color stops
  gradient.addColorStop(0, secundario);
  gradient.addColorStop(0.1, secundario);
  gradient.addColorStop(0.9, principal);
  gradient.addColorStop(1, principal);
  
  // Set the fill style and draw a rectangle
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  ctx.beginPath()
  ctx.fillStyle=principal
  ctx.moveTo(0,600)
  ctx.lineTo(250,600)
  //ctx.arc(400,600,150,0,Math.PI)
  ctx.lineTo(width,600)
  ctx.lineTo(width,height)
  ctx.lineTo(0,height)
  ctx.lineTo(0,600)
  ctx.fill()
  
  ctx.beginPath()
  ctx.filter = "blur(4px)";
  opacidad=1-(diferenciaTotal/1000)
  //ctx.fillStyle="rgba(0,0,0,0.8)"
  ctx.fillStyle=`rgba(0,0,0,${opacidad})`
  ctx.moveTo(iniMonX,iniMonY+altoMon)
  ctx.lineTo(iniMonX+anchoMon,iniMonY+altoMon)
  ctx.lineTo(iniMonX+anchoMon-dif2,iniMonY+altoMon+tamñoSolGrande/3)
  ctx.lineTo(iniMonX-dif2,iniMonY+altoMon+tamñoSolGrande/3)
  ctx.fill()
  
  
  ctx.beginPath()
  ctx.fillStyle=principal
  ctx.filter = "blur(0px)";
  ctx.fillRect(iniMonX,iniMonY,anchoMon,altoMon)
  ctx.fill()
  
  ctx.beginPath()
  
  ctx.fillStyle="rgba(0,0,0,0.2)"
  ctx.fillRect(iniMonX,iniMonY,anchoMon,altoMon)
  ctx.fill()
  ctx.closePath()
  
  
  
  
  
  
  
  
  
  fxpreview()
  
  