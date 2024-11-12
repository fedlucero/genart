

function randomFromList(items){
    return items[Math.floor(Math.random()*items.length)];}
  
    function random(min, max) {
      return Math.floor((Math.random() * (max - min + 1)) + min);}


      const gco=['destination-over','lighter', 'copy','xor', 'screen', 'overlay', 'darken',
             'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light',
             'difference', 'hue', 'saturation', 'color','luminosity']
      const a = random(0,15)
   

        const color = Math.random()
        if(color<0.3){
       coloresTodos = ["#ff7b00", "#ff8800", "#ff9500", "#ffa200", "#ffaa00", "#ffb700", "#ffc300", "#ffd000", "#ffdd00", "#ffea00", "#db00b6", "#e500a4", "#f20089","#07c8f9", "#09a6f3","#c200fb", "#d704b2", "#e2068d", "#ec0868", "#f41c34", "#fc2f00", "#f45608", "#ec7d10", "#f69d0d", "#ffbc0a","#fe149a", "#ff13cd", "#ff13fc", "#e113fd", "#b513fd"]
        }else if(color<0.6){
       coloresTodos = ["#8338ec", "#3a86ff","#2d00f7", "#6a00f4", "#8900f2", "#a100f2", "#b100e8","#0c63e7", "#0d41e1","#257ce6", "#2082e4", "#1c8fe7", "#169ce8", "#0fb4ec", "#0ac1ed", "#06cdef", "#00daf0", "#06dcd5", "#14ddac"]}else{
       coloresTodos = ["#af3b6e","#e661b2","#ec4e20","#ff760c","#ffe330","#0a47ed","#410099","#643a71","#00d1d9","#75b09c","#005277"]
      }
      const color1 = randomFromList(coloresTodos)
      const color2 = coloresTodos.filter(color => color != color1);
      const color22 = randomFromList(coloresTodos)
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
      
    const canvas = document.getElementById("aura");
    const ctx = canvas.getContext("2d");
    const width = 400
    const height = 700
    ctx.globalCompositeOperation = gco[a];
    ctx.globalAlpha =.65 

   

    var lg = ctx.createLinearGradient(0,0, width,0);
    lg.addColorStop(0, color1);
    lg.addColorStop(0.2, color22);
    lg.addColorStop(0.4, color33);
    lg.addColorStop(0.6, color44);
   
    lg.addColorStop(0.8, color66);
    lg.addColorStop(1, color77);

    var lg2 = ctx.createLinearGradient(0,0, width,0);
    lg2.addColorStop(0, color1);
    lg2.addColorStop(0.4, color1);
    lg2.addColorStop(0.6, color77);
    lg2.addColorStop(1, color77);

        y0=-20
        size=5
        x0=-14
    
    ctx.beginPath()
    ctx.fillStyle=lg2
    ctx.fillRect(0,0,width,height)
    ctx.fill()
    ctx.closePath()
    

    function rectangulo(x,y,ancho,alto,color){
        ctx.beginPath()
        ctx.rect(x,y,x+ancho,y+alto)
        ctx.fillStyle=color
        ctx.fill()
    }



     for(x=0;x<40;x++){
         x0=random(-60,0)
         alto=random(10,30)
         y0 +=size
        ctx.translate(random(-50,50),10)
         rectangulo(x0,y0-random(2,15),width*2,random(5,50),lg)
     }



     
