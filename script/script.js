const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 5;
const player1IdelFrames =getSpriteImages(20, 'images\\player\\00_idle\\');
console.log(player1IdelFrames)
class AnimationSource {
    constructor(frames,width, height) {
        this.current = 0;
        this.width = width;
        this.height = height;
        this.frames = frames
    }

    draw() {
    
        ctx.drawImage(this.frames[this.current], 0, 0, this.width, this.height);
        this.current = (this.current + 1) % this.frames.length;
    
    }
}


const sprite = new AnimationSource(player1IdelFrames, 200, 200);

animate();

function animate() {
    sprite.draw();
    requestAnimationFrame(animate);
}

const background1 = new Image();
background1.src = "images/backgroundLayers/layer-1.png";

const background2 = new Image();
background2.src = "images/backgroundLayers/layer-2.png";

const background3 = new Image();
background3.src = "images/backgroundLayers/layer-3.png";

const background4 = new Image();
background4.src = "images/backgroundLayers/layer-4.png";

const background5 = new Image();
background5.src = "images/backgroundLayers/layer-5.png";

let x = 0;
let x2 = 2400;


class Layer {
    constructor(image, speedPrecentage, localGameSpeed) {
        this.width = 2400;
        this.height = 700;
        this.x2 = this.width;
        this.x = 0;
        this.image = image;
        this.speedModifire = speedPrecentage;
        this.localGameSpeed = localGameSpeed;
        this.speed = this.speedModifire * this.localGameSpeed;
    }
    update() {
        this.speed = this.localGameSpeed * this.speedModifire;
        if (this.x <= -this.width) {
            this.x = this.width + this.x2 + this.localGameSpeed;
        }
        if (this.x2 <= -this.width) {
            this.x2 = this.width + this.x + this.localGameSpeed;
        }

        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);

    }
    draw() {
        ctx.drawImage(this.image, this.x, 0, this.width, this.height);
        ctx.drawImage(this.image, this.x2, 0, this.width, this.height);

    }
}

class Enemy {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    move() {

    }
    update() {

    }
}

let layer1 = new Layer(background1, 0.2, gameSpeed);
let layer2 = new Layer(background2, 0.4, gameSpeed);
let layer3 = new Layer(background3, 0.6, gameSpeed);
let layer4 = new Layer(background4, 0.8, gameSpeed);
let layer5 = new Layer(background5, 1, gameSpeed);
const layers = [layer1, layer2, layer3, layer4, layer5];
animatBackground()
function animatBackground() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    layers.forEach((layer) => {
        layer.update()
        layer.draw();
    })
    requestAnimationFrame(animatBackground)
}



enemy1 = {
    x: 0,
    y: 0,
    width: 200,
    height: 200,
}



// animateEnemy();
// function animateEnemy(){

//     ctx.fillRect(enemy1.x,enemy1.y,enemy1.width,enemy1.height);
// requestAnimationFrame(animateEnemy);
// }




Promise.all(player1IdelFrames.map(img => {
    return new Promise((resolve) => {
        img.onload = resolve;
    });
})).then(() => {
    animate();
});

function getSpriteImages(size, path) {
    const frames = [];
    for (let i = 1; i <= size; i++) {
        const img = new Image();
        img.src = `${path}${i}.png`;
        frames.push(img);
    }
    return frames;
}