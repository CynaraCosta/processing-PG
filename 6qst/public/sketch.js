const red = [255, 0, 0]
const green = [0, 255, 0]
const blue = [0, 0, 255]
const big_circle_d = 200; 
const little_circle_d = 50;
const angle_x_base = -Math.PI/3;
var rot_big_circle = 0;
var rot_little_circle = 0;

function setup() {
    createCanvas(windowWidth - 15, windowHeight - 20, WEBGL);
    frameRate(60);
}

function draw () {
    background('grey');
    orbitControl();
    
    rotateX(Math.PI/3)
    axis();
    rotateX(-Math.PI/3)

    stroke("white");
    noFill();
    rect(0, 0, big_circle_d, -big_circle_d);
    
    circle(big_circle_d/2, -big_circle_d/2, big_circle_d);
  
    // transladar para o meio do quadrado
    translate(big_circle_d/2, -big_circle_d/2, little_circle_d/2)
  
    // rotacionando o circulo pequeno no grande
    rotateZ(rot_big_circle)
    
    // transladando para o centro do circulo grande
    translate(0, -big_circle_d/2, 0)
    // rotacionando o circulo pequeno perpendicular
    rotateX(-Math.PI/2)
  
    circle(0, 0, little_circle_d)
    
    // desfazendo rotação do circulo pequeno perpendicular
    rotateX(Math.PI/2)
    
    // rotação circulo pequeno bolinha
    rotateY(rot_little_circle)
    
    stroke(red);
    strokeWeight(8)
    point(0,0, little_circle_d/2)
    
    // desfazendo rotação circulo pequeno bolinha
    rotateY(-rot_little_circle)
    rot_little_circle += (-Math.PI/60)
    
    // desfazendo translação para o centro do circulo grande
    translate(0, big_circle_d/2, 0)
    
    // desfazendo rotação o circulo pequeno no grande
    rotateZ(-rot_big_circle)
    rot_big_circle -= (Math.PI/120)
    
    // voltando eixo para o 0 0 0 
    translate(-big_circle_d/2, big_circle_d/2, -little_circle_d/2)
  
}


function axis(){
    
    // rotacionando para 60 o eixo Z 
    rotateZ(Math.PI/3)
  
    strokeWeight(3)
    // eixo x - vermelho
    stroke('rgba(255, 0, 0, 0.5)');
    line(-300, 0, 0, 0, 0, 0);
    stroke(255, 0, 0);
    line(0, 0, 0, 300, 0, 0);

    // eixo y - verde
    stroke('rgba(0, 255, 0, 0.5)');
    line(0, -300, 0, 0, 0, 0);
    stroke(0, 255, 0);
    line(0, 0, 0, 0, 300, 0);

    // eixo z - azul
    stroke('rgba(0, 0, 255, 0.5)');
    line(0, 0, -300, 0, 0, 0);
    stroke(0, 0, 255);
    line(0, 0, 0, 0, 0, 300);

    noStroke();
}