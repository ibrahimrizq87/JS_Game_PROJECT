const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 0;
//const player1IdelFrames =getSpriteImages(20, 'images\\player\\00_idle\\');




// class AnimationSource {
//     constructor(frames,width, height) {
//         this.current = 0;
//         this.width = width;
//         this.height = height;
//         this.frames = frames
//     }

//     draw() {

//         ctx.drawImage(this.frames[this.current], 0, 0, this.width, this.height);
//         this.current = (this.current + 1) % this.frames.length;

//     }
// }


// const sprite = new AnimationSource(player1IdelFrames, 200, 200);

// animate();

// function animate() {
//     sprite.draw();
//     requestAnimationFrame(animate);
// }


// class Enemy {
//     constructor(x, y, width, height) {
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//     }
//     move() {

//     }
//     update() {

//     }
// }


// Promise.all(player1IdelFrames.map(img => {
//     return new Promise((resolve) => {
//         img.onload = resolve;
//     });
// })).then(() => {
//     animate();
// });

// function getSpriteImages(size, path) {
//     const frames = [];
//     for (let i = 1; i <= size; i++) {
//         const img = new Image();
//         img.src = `${path}${i}.png`;
//         frames.push(img);
//     }
//     return frames;
// }



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


let layer1 = new Layer(background1, 0.2, gameSpeed);
let layer2 = new Layer(background2, 0.4, gameSpeed);
let layer3 = new Layer(background3, 0.6, gameSpeed);
let layer4 = new Layer(background4, 0.8, gameSpeed);
let layer5 = new Layer(background5, 1, gameSpeed);

const layers = [layer1, layer2, layer3, layer4, layer5];

// let idel_punch = new Image();
// idel_punch.src='images/player1/idel&bunch.png';

// let run = new Image();
// run.src='images/player1/run.png';

// let jump = new Image();
// jump.src='images/player1/jump.png';

// let ko = new Image();
// ko.src='images/player1/ko.png';
// class Player {
//     constructor(image1,image2,image3,image4) {
//         this.images = [new Image(), new Image(),new Image(),new Image()];
//         this.images[0] =image1;
//         this.images[1] = image2;
//         this.images[2] =image3;
//         this.images[3] = image4;
        
//         this.states = [
//             { 'state': 'idel', 'start': 0, 'end': 20, 'source': 0 },
//             { 'state': 'run_ready', 'start': 0, 'end': 10, 'source': 1 },
//             { 'state': 'run_start', 'start': 11, 'end': 29, 'source': 1 },
//             { 'state': 'run_finish', 'start': 30, 'end': 40, 'source': 1},
//             { 'state': 'jump_ready', 'start': 0, 'end': 10, 'source': 2},
//             { 'state': 'jump_start', 'start': 11, 'end': 21, 'source': 2 },
//             { 'state': 'jump_finish', 'start': 22, 'end': 32, 'source':2},
//             { 'state': 'ko', 'start': 0, 'end': 40, 'source': 3 },
//             { 'state': 'bunch', 'start': 21, 'end': 30, 'source': 0 }
//         ];

//         this.currentFrame = 0;
//         this.currentState = this.states[8];

//         this.frameRate = 60; 
//         this.lastFrameTime = 0;
//         this.frameInterval = 1000 / this.frameRate;
//     }

//     handleInput(input) {
//     }

    

//     draw() {
//         const frameWidth = 796;
//         const frameHeight = 719;
         

//         const sourceIndex = this.currentState.source;
//         const frameX = (this.currentFrame + this.currentState.start) * frameWidth;
//         const frameY = 0;
//         const size = this.currentState.end - this.currentState.start +1;

//         ctx.drawImage(
//             this.images[sourceIndex],
//             frameX, frameY, frameWidth, frameHeight,
//             0, CANVAS_HEIGHT - 350, frameWidth / 3, frameHeight / 3
//         );

//         if (this.currentFrame >= size) {
//             this.currentFrame = 0;
//         } else {
//             this.currentFrame++;
//         }
//     }
// }

// const player = new Player(idel_punch,run,jump,ko);

// function animateBackground() {
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

//     layers.forEach((layer) => {
//                 layer.update()
//                 layer.draw();
//             });

//     player.draw();

//     requestAnimationFrame(animateBackground);
// }

// animateBackground();





class Player {
    constructor(images) {
        this.images = images;
        this.states = [
            { 'state': 'idel', 'start': 0, 'end': 20, 'source': 0 },
            { 'state': 'run_ready', 'start': 0, 'end': 10, 'source': 1 },
            { 'state': 'run_start', 'start': 11, 'end': 29, 'source': 1 },
            { 'state': 'run_finish', 'start': 30, 'end': 40, 'source': 1 },
            { 'state': 'jump_ready', 'start': 0, 'end': 10, 'source': 2 },
            { 'state': 'jump_start', 'start': 11, 'end': 21, 'source': 2 },
            { 'state': 'jump_finish', 'start': 22, 'end': 32, 'source': 2 },
            { 'state': 'ko', 'start': 0, 'end': 40, 'source': 3 },
            { 'state': 'bunch', 'start': 21, 'end': 30, 'source': 0 }
        ];

        this.currentFrame = 0;
        this.currentState = this.states[4];
        this.frameRate = 10; 
        this.lastFrameTime = 0;
        this.frameInterval = 1000 / this.frameRate; 
    }

    handleInput(input) {
    }

    draw(timestamp) {
        const frameWidth = 796;
        const frameHeight = 719;

        const sourceIndex = this.currentState.source;
        const frameX = (this.currentFrame + this.currentState.start) * frameWidth;
        const frameY = 0;
        const size = this.currentState.end - this.currentState.start + 1;

        ctx.drawImage(
            this.images[sourceIndex],
            frameX, frameY, frameWidth, frameHeight,
            0, CANVAS_HEIGHT - 350, frameWidth / 3, frameHeight / 3
        );

       

        if (timestamp - this.lastFrameTime > this.frameInterval) {
            this.currentFrame++;
            if (this.currentFrame >= size) {
                this.currentFrame = 0;
            }
            this.lastFrameTime = timestamp;
        }
    }
}

const images = [
    new Image(), // idel_punch image
    new Image(), // run image
    new Image(), // jump image
    new Image()  // ko image
];

// let idel_punch = new Image();
// idel_punch.src='images/player1/idel&bunch.png';

// let run = new Image();
// run.src='images/player1/run.png';

// let jump = new Image();
// jump.src='images/player1/jump.png';

// let ko = new Image();
// ko.src='images/player1/ko.png';
images[0].src = 'images/player1/idel&bunch.png';
images[1].src = 'images/player1/run.png';
images[2].src = 'images/player1/jump.png';
images[3].src = 'images/player1/ko.png';

const player = new Player(images);

function animateBackground(timestamp) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    layers.forEach((layer) => {
        layer.update()
        layer.draw();
    });

    player.draw(timestamp);

    requestAnimationFrame(animateBackground);
}

animateBackground();