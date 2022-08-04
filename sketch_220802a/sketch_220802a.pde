float init_x = 30;
float init_y = 320;
float velocity_x = 7.0;
float velocity_y = 10.0;
int r = 30;
float gravity = 0.5;

void setup(){
  size(500, 350);
  smooth();
  frameRate(60);
 }

void draw(){

  background(155);
  
  init_x = init_x + velocity_x;
  init_y = init_y + velocity_y;

  // translacao
  applyMatrix( 1.0, 0.0, init_x, 
               0.0, 1.0, init_y);

  velocity_y += gravity;

  if(init_x + r/2 >= width || init_x - r/2 <= 0){
    velocity_x *= -1;
  }

  if(init_y >= height - r/2){
    velocity_y *= -1;
    velocity_y += gravity;  
  }
  
  ellipse(0, 0, r, r);
}
