
const constraint = matter.constraint

const engine= matter.engine

const world = matter.world

const bodies = matter.bodies

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

stand = new Ground(width/2,750,800,20)

polygon = bodies.circle(50,200,20)

box1 = new Box  (440,500,40,40)
box2 = new Box (480,500,40,40)
box3 = new Box (520,500,40,40)
box4 = new Box(560,500,40,40)
box5 = new Box(460,460,40,40)
box6 = new Box (500,460,40,40)
box7 = new Box (540,460,40,40)
box8 = new Box (480,420,40,40)
box9 = new Box (520,420,40,40)
box10 = new Box (500,380,40,40)

slingshot = new slingshot(this.polygon,{x:100,y:200})

}

function draw() {
  background(255,255,255);  
  drawSprites();
}