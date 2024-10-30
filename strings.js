

function randomFromList(items){
    return items[Math.floor(Math.random()*items.length)];
}


function randomFromList(items){
  return items[Math.floor(Math.random()*items.length)];
  }
let x,y,tam

function setup(){

    
    createCanvas(400,700)

   var windowHeight=700
    
    

    diez=windowHeight*0.01
    
    borde = diez*2

    finalH = windowHeight-borde
    finalW = 400-borde
    
    x1  =  Math.floor(random(borde,borde+diez))
    y1  =   Math.floor(random(borde,windowHeight/4))

    tamx =  Math.floor(random((400)/3,400-x1-borde))
    tamy =  Math.floor(random(tamx,windowHeight-borde-y1))

    tamx2 =  tamx/3
    tamy2 =  tamy/3



    x2  =  Math.floor(random(borde,windowHeight))
    y2 = Math.floor(random(borde,borde*2))


    x3  =  Math.floor(random(borde,windowHeight))
    y3  = Math.floor(random(borde,borde*2))


    x4  =  Math.floor(random(windowHeight/6+borde,windowHeight*5/6-borde))
    


    x5  =  borde
    y5  =  Math.floor(random(400,windowHeight-borde))
   

    x1 = borde
    y1 = Math.floor(random(0,diez*20))
    bx1 = Math.floor(random(borde,(400)/2))
    by1 = Math.floor(random(borde,y1))
    bx2 = Math.floor(random((400)/2,400-borde))
    by2 = Math.floor(random(y1,y1*2))
    x2 = finalW
    y2 = Math.floor(random(0,diez*10))

    

    background(10)
    
    noLoop()
   

    
}

function draw(){

    
    strokeWeight(1)
    noFill()
   
    c = Math.floor(random(1,150))
    for (let i = 0; i < c; i++){
       
        x1 = borde

   
        y1 = windowHeight*3/4 /*pobar con 0*/
       
        bx1 = Math.floor(random(borde,(400)/2))
        by1 = Math.floor(random(y1,windowHeight))
        bx2 = Math.floor(random((400)/2,400-borde))
        
        x2 = finalW
      
        y2 =windowHeight*3/4
        by2 = Math.floor(random(y1,y2))
        stroke(280)
        strokeWeight(1)
        bezier(x1,y1-10*i,bx1,by1,bx2,by2,x2,y2-10*i)
        // stroke(0)
        // strokeWeight(2)
        // bezier(x1,(y1-10*i)-5,bx1,by1,bx2,by2,x2,(y2-10*i)-2)
      
        }
        fill(10)
        noStroke()
        rect(0,0,400,borde)

}
