let diameter = 1000;
let numberCircles = 2;
let xBegin = 250;
let yBegin = 250;
let bacon1 = [0,0,0];
let bacon2 = [5,5,5];
let bacon3 = [10,10,10];
let counter = 0;
let rotationVal = 0;
let addX = 0;
let xspacing = 16;
let w;
let theta = 0.0;
let amplitude = 75.0;
let period = 500.0;
let dx;
let yvalues;


function preload() {
  myMovingslug = loadSpriteSheet('abstract/ElvisSlugSlime.png', 96, 96, 40);
  mySlug = loadAnimation(myMovingslug);
}

function setup() {
  createCanvas(1350, 550);
  noStroke();
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  clear();
  background(240, 205, 255);
  calcWave();
  renderWave();


  for(let i = 0; i < numberCircles; i++){
    for(let j = 0; j < numberCircles; j++){
    

      let addX = 0;
    
   if(i%2==0){
       rotationVal = 0;
       

   } else {
       rotationVal = PI;   

     }
      
  if(j%2 == 0){
    rotationVal = rotationVal - 0;
    thisColor = bacon1;
    addX = diameter/2;
  }else{
    rotationVal = rotationVal - PI/2;
    thisColor = bacon2;
  }
      
   if(j%4 == 0){
   rotationVal = rotationVal + PI;
   }   
      
    let x = diameter * i + addX;
    let y = diameter*j*0.95;
      
    push();
    
      translate(x,y);    
      rotate(rotationVal+counter/500);
      translate(-x, -y);
    
      fill(bacon1);
      arc(x , y, diameter, diameter, 0, PI/4);
      fill(bacon3);
      arc(x , y, diameter, diameter, PI/4, PI/2);
      fill(bacon2);
      arc(x , y, diameter, diameter, PI/2, PI*3/4);
      fill(bacon3);
      arc(x , y, diameter, diameter, PI*3/4, PI);
      fill(bacon1);
      arc(x , y, diameter, diameter, PI, PI*5/4);
      fill(bacon3);
      arc(x , y, diameter, diameter, PI*5/4, PI*3/2);
      fill(bacon2);
      arc(x , y, diameter, diameter, PI*3/2, PI*7/4);
      fill(bacon3);
      arc(x , y, diameter, diameter, PI*7/4, TWO_PI);
    pop();

    

    }
  }

  counter+=10

  animation(mySlug, 999, 333);
}

function calcWave() {
    theta += 0.02;
  
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = sin(x) * amplitude;
      x += dx;
    }
  }
  
  function renderWave() {
    noStroke();
    fill(0);
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
    }
  }
