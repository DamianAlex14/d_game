const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.imageSmoothingEnabled = false;

const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

const image = new Image();
const getoUpImage = new Image();
const getoDownImage = new Image();
const getoLeftImage = new Image();
const getoRightImage = new Image();

let movingUp = false;
let movingDown = false;
let movingRight = false;
let movingLeft = false;

let currentImage = getoUpImage

let loaded = 0;

const spriteSize = 32;
const scale = 3;
const playerSize = spriteSize * scale;
let mapX = -215
let mapY = -950

const collisionsMap = [];

const mapWidth = 15;

for (
    let i = 0;
    i < collisions.length;
    i += mapWidth
) {
    collisionsMap.push(
        collisions.slice(i, i + mapWidth)
    );
}

function start() {

    const x = canvas.width / 2 - playerSize / 2;
    const y = canvas.height / 2 - playerSize / 2;

    const worldX = -mapX + x;
    const worldY = -mapY + y + 32;
    
const tileSize = 1457 / 15;

const debugX = worldX + mapX;
const debugY = worldY + mapY;


const column = Math.floor(worldX / tileSize);
const row = Math.floor(worldY / tileSize);

    
console.log(row, column);

     if (
    movingUp &&
    collisionsMap[row]?.[column] !== 84
    ) {
    mapY += 2;
    }

      if (
    movingDown &&
    collisionsMap[row][column] !== 84
    ) {
    mapY = mapY - 2;
    }

     if (
    movingRight &&
    collisionsMap[row][column] !== 84
    ) {
    mapX = mapX - 2;
    }
    
      if (
    movingLeft &&
    collisionsMap[row][column + 1] !== 84
    ) {
    mapX = mapX + 2;
    }

    c.clearRect(0, 0, canvas.width, canvas.height);

    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.drawImage(image, mapX, mapY);

    c.strokeRect(x, y, playerSize, playerSize);

    c.drawImage(currentImage, x, y, playerSize, playerSize);
    for (let row = 0; row < 15; row++) {
    for (let col = 0; col < 15; col++) {
        c.strokeRect(
            mapX + col * tileSize,
            mapY + row * tileSize,
            tileSize,
            tileSize
        );
    }
}
    c.fillStyle = "red";
    c.fillRect(
    debugX - 2,
    debugY - 2,
    5,
    5
    );

    requestAnimationFrame(start);
}


function check() {
    loaded++;
    if (loaded === 5) start();
}

rightButton.addEventListener(
    'touchstart',
    () => {
        currentImage = getoRightImage;
        movingRight = true;
        console.log (movingRight)
    }
);

rightButton.addEventListener(
    'touchend',
    () => {
        movingRight = false;
        console.log (movingRight)
    }
);

leftButton.addEventListener(
    'touchstart',
    () => {
        currentImage = getoLeftImage;
        movingLeft = true;
        console.log(movingLeft)
    }
);

leftButton.addEventListener(
    'touchend',
    () => {
        movingLeft = false;
        console.log (movingLeft)
    }
);

upButton.addEventListener(
    'touchstart',
    () => {
        currentImage = getoUpImage;
        movingUp = true;
        console.log(movingUp)
    }
);

upButton.addEventListener(
    'touchend',
    () => {
        movingUp = false;
        console.log (movingUp)
    }
);

downButton.addEventListener(
    'touchstart',
    () => {
        currentImage = getoDownImage;
        movingDown = true;
        console.log(movingDown)
    }
);

downButton.addEventListener(
    'touchend',
    () => {
        movingDown = false;
        console.log (movingDown)
    }
);




image.onload = check;
getoDownImage.onload = check;
getoUpImage.onload = check;
getoRightImage.onload = check;
getoLeftImage.onload = check;

image.src = '/assets/images/TestMap.png';
getoUpImage.src = '/assets/images/backGeto.png';
getoDownImage.src = '/assets/images/frontGeto.png';
getoRightImage.src = '/assets/images/rightGeto.png';
getoLeftImage.src = '/assets/images/leftGeto.png';