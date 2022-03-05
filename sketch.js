function preload() {
  googleimg = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0GVd31ZFn2rnuKtmVRGf9ysXeLJz14NkXN2TsiT9XGPTvaX3ffp-s17xiyrsi1JAhvo&usqp=CAU");
}
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  fill('red');
  circle(60, 70, 80);
  fill('rgb(0,255,0)');
  rect(100, 63, 350, 20);
  fill('red');
  circle(490, 70, 80);
  fill('rgb(0,255,0)');
  rect(51, 110, 20, 350);
  fill('red');
  circle(60, 500, 80);
    fill('rgb(0,255,0)');
  rect(100, 490, 350, 20);
  fill('red');
  circle(490, 490, 80);
   fill('rgb(0,255,0)');
  rect(480, 110, 20, 340);
  image(googleimg, 140, 150, 250, 250)

}
