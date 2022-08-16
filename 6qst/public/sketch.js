const red = [255, 0, 0]
const green = [0, 255, 0]
const blue = [0, 0, 255]
const big_circle_d = 200; 
const little_circle_d = 50;
const angle_x_base = -Math.PI*2/3;
var rot_big_circle = 0;
var rot_little_circle = 0;

//const RAD = 6.28319

function setup() {
    createCanvas(windowWidth - 15, windowHeight - 20, WEBGL);
    frameRate(60);
}

function draw () {
    background('grey');
    orbitControl();
    
    rotateX(Math.PI/3);
    rotateY(-Math.PI/3);
    rotateZ(Math.PI/3);

    stroke("white");
    noFill();
    rect(0, 0, big_circle_d, -big_circle_d);

    circle(big_circle_d/2, -big_circle_d/2, big_circle_d);
   
    push();
    translate(big_circle_d/2, -big_circle_d);
    rotateX(-Math.PI/2);
    circle(0, - little_circle_d/2, little_circle_d);

    stroke(red);
    strokeWeight(8)
    point(0, -little_circle_d);
    
    rotate(rot_little_circle);
    rot_little_circle += 1
    
    pop();
    
    rotateX(angle_x_base);

    //rotate(rot_big_circle);

    //rotate(rot_little_circle);
    
    // considerando o movimento circular da bolinha na bola grande
    //rot_big_circle -= (Math.PI/2*240);
    // considerando o movimento circular da bolinha nela mesma
    //rot_little_circle += (Math.PI/2*60);


    axis();
}

function axis(){
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
