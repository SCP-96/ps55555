
function preload() {
img = loadImage('https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg');
}

function setup() {
canvas = createCanvas(500, 500);
canvas.position(110, 250);
}

function draw() {
image(img, 10, 10, 150, 120);
fill(200, 0, 0);
stroke(300, 0, 1);
circle(350, 50, 70);
circle(350, 200, 70);
circle(50, 350, 70);
circle(200, 350, 70);
}
