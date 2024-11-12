
function randomFromList(items){
    return items[Math.floor(Math.random()*items.length)];}
  
    function random(min, max) {
      return Math.floor((Math.random() * (max - min + 1)) + min);}
  
      // const coloresCielo = ["#ffbe0b", "#fb5607", "#ff006e"]
      // const coloresGrieta = ["#8338ec", "#3a86ff"]
  
      const coloresCielo = ["#ff7b00", "#ff8800", "#ff9500", "#ffa200", "#ffaa00", "#ffb700", "#ffc300", "#ffd000", "#ffdd00", "#ffea00", "#db00b6", "#e500a4", "#f20089","#07c8f9", "#09a6f3","#c200fb", "#d704b2", "#e2068d", "#ec0868", "#f41c34", "#fc2f00", "#f45608", "#ec7d10", "#f69d0d", "#ffbc0a","#fe149a", "#ff13cd", "#ff13fc", "#e113fd", "#b513fd"]
      const coloresGrieta = ["#8338ec", "#3a86ff","#2d00f7", "#6a00f4", "#8900f2", "#a100f2", "#b100e8","#0c63e7", "#0d41e1","#257ce6", "#2082e4", "#1c8fe7", "#169ce8", "#0fb4ec", "#0ac1ed", "#06cdef", "#00daf0", "#06dcd5", "#14ddac"]
  
      const cielo = randomFromList(coloresCielo)
      const grieta = randomFromList(coloresGrieta)
  
  const canvas = document.getElementById("gap");
  const ctx = canvas.getContext("2d");
  const width = 400
  const height = 700
  
  ctx.beginPath()
  ctx.fillStyle= cielo
  ctx.fillRect(0,0,width,height)
  ctx.fill()
  ctx.closePath()
  
  y1= random(1/3*height,7/12*height)
  primerFin = random(3/8*width,1/2*width)
  picos = random(3,10)
  picos2 = random(3,10)
  secciones = primerFin/picos
  quiebres=random(5,15)
  quebradura=(height-y1)/quiebres
  
  // ctx.beginPath()
  // sombrax=random(200,300)
  // sombray=random(200,300)
  // ctx.moveTo(secciones*picos,y1)
  // ctx.lineTo(secciones*picos+sombrax,y1+sombray)
  // ctx.lineTo(secciones*picos+sombrax,height)
  // ctx.lineTo(secciones*picos-100,height)
  // ctx.lineTo(secciones*picos,y1)
  // ctx.fillStyle=grieta
  // ctx.fill()
  // ctx.closePath()
  
  
  ctx.beginPath()
  dipic=random(10,20)
  disombray=random(-10,10)
  diagon=random(5,10)
  ctx.moveTo(secciones*picos,y1)
  for(x=1;x<diagon;x++){
    ctx.lineTo(secciones*picos+dipic*x,y1+10*x+disombray)
  }
  
  ctx.lineTo(width,y1+200)
  ctx.lineTo(width,height)
  ctx.lineTo(secciones*picos-100,height)
  ctx.lineTo(secciones*picos-60,750)
  ctx.lineTo(secciones*picos,y1)
  ctx.fillStyle=grieta
  ctx.fill()
  ctx.closePath()
  
  
  
  ctx.beginPath()
  
  //primerFin es el final del primer iceberg
  //difAltura altura picos
  // y1 primer punto de la primer pared
  ctx.moveTo(0,y1)
  //picos cantidad de picos de la pared
  for(x=1;x<picos;x++){
    difAltura= random(-10,10)
    difseccion= random(-20,20)
    ctx.lineTo(secciones*x-difseccion,y1+difAltura)
    
    
  }
  ctx.lineTo(secciones*picos,y1)
  
  for(x=1;x<quiebres;x++){
    difAlturaqui= random(-10,10)
    difquiebre= random(-10,10)
    ctx.lineTo(secciones*picos-difquiebre,y1+quebradura*x+difAlturaqui)
  }
  ctx.lineTo(secciones*picos,height)
  ctx.lineTo(0,height)
  ctx.lineTo(0,y1)
  ctx.fillStyle="#f1faee"
  ctx.fill()
  ctx.closePath()
  
  
  ctx.beginPath()
  segundo= random(30,100)
  punto=secciones*picos+segundo
  ctx.moveTo(punto,y1)
  secciones2 = (width-(punto))/picos2
  
  
  for(x=1;x<picos2;x++){
    difAltura2= random(-10,10)
    difseccion2= random(-20,20)
    ctx.lineTo(punto+secciones2*x-difseccion2,y1+difAltura2)
    
  }
  ctx.lineTo(width,y1)
  ctx.lineTo(width,height)
  ctx.lineTo(punto,height)
  
  for(x=1;x<quiebres;x++){
    difAlturaqui2= random(-10,40)
    difquiebre2= random(-10,10)
    ctx.lineTo(punto+difquiebre2,height-quebradura*x+difAlturaqui2)
  }
  ctx.lineTo(punto,y1)
  
  ctx.fillStyle="#f1faee"
  ctx.fill()
  
  
  
  console.log(secciones*picos+segundo);
  
  
  
