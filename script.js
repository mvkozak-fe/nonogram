const body = document.querySelector('body');
const wrapper = document.createElement('div');
const header = document.createElement('h1');
const playMode = document.createElement('div');
let startBtn;
const playGame = document.createElement('div');
const gameTemps = document.createElement('div');
const playBlock = document.createElement('div');
const playInfo = document.createElement('div');
const resetBtn = document.createElement('button');
const solutionBtn = document.createElement('button');
const saveBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const menuGameBtn = document.createElement('button');
const modal = document.createElement('div');
const modalContent = document.createElement('div');
let matrixBlocks;
let matrixBlocksAll = document.createElement('div');
let targetBlock;
let targetCrossBlock;
let gameMatrix;
let keyMatrixTop;
let keyMatrixLeft;
let modeGameArr;
let timer;
let timeRes = 0;
let levelName = document.createElement('h2');
const timerBlock = document.createElement('div');
const audioBtn = document.createElement('div');
const themeBtn = document.createElement('div');
let resArr = [];
let solution = false;

function addTimer(){
    let sec = 0;
    let min = 0;
    let seconds = 0;
    timer = setInterval(function(){       
        min = Math.floor(seconds/60);
        sec = seconds - (min * 60);
        if (min < 10) {
            min = '0' + min;
        }
        if (sec < 10) {
            sec = '0' + sec;
        } 
        timerBlock.innerHTML = min + ':' + sec; 
               
               
        seconds++;

    }, 1000);
}

function addDividers() {
    let keyTopLines = document.querySelectorAll('.key-top');
    for (let i = keyTopLines.length-1; i > 0; i-=5) {
        keyTopLines[i].classList.add('key-top-line');
    }
    let keyLeftLines = document.querySelectorAll('.key-left');
    for (let i = keyLeftLines.length-6; i > 0; i-=5) {
        keyLeftLines[i].classList.add('key-left-line');
    }
    let matrixLinesBold = document.querySelectorAll('.matrix-line');
    for (let i = 5; i < matrixLinesBold.length; i+=5) {
        matrixLinesBold[i].classList.add('matrix-line-bold');
    }
    let matrixBlockBold = document.querySelectorAll('.matrix-block');
    for (let i = matrixBlockBold.length - 1; i > 0; i -= 5) {
        matrixBlockBold[i].classList.add('matrix-block-bold');
    }
}

//DARK/LIGHT THEME

function chooseTheme() {
    if (themeBtn.classList.contains('theme-btn-night')) {       
        darkTheme(); 
    } else {
        lightTheme();
    }
}
function darkTheme() {
    document.body.classList.add('body-dark');
    header.classList.add('header-dark');
    wrapper.classList.add('wrapper-dark');
    levelName.classList.add('header-dark');
    let matrixBlock = document.querySelectorAll('.matrix-block');
    matrixBlock.forEach(item => item.classList.add('matrix-block-dark'));
    let keyLeftColor = document.querySelectorAll('.key-left');        
    keyLeftColor.forEach(item => item.classList.add('key-left-dark'));
    let keyTopColor = document.querySelectorAll('.key-top');        
    keyTopColor.forEach(item => item.classList.add('key-top-dark'));
    let targetDark = document.querySelectorAll('.target');
    targetDark.forEach(item => item.classList.add('target-dark'));
    let targetCrossDark = document.querySelectorAll('.target-cross');
    targetCrossDark.forEach(item => item.classList.add('target-cross-dark'));
    let scoreLines = document.querySelectorAll('.score-line');
    scoreLines.forEach(item => item.classList.add('score-line-dark'));
    timerBlock.classList.add('score-line-dark');
    modalContent.classList.add('modal-content-dark');
    matrixBlocksAll.classList.add('border-dark-color');
    keysTop.classList.add('border-dark-color');
    keysLeft.classList.add('border-dark-color');
    let keyTopLines = document.querySelectorAll('.key-top');

    
    for (let i = keyTopLines.length-1; i > 0; i-=5) {
        keyTopLines[i].classList.add('border-dark-color');
    }
    let keyLeftLines = document.querySelectorAll('.key-left');
    for (let i = keyLeftLines.length-6; i > 0; i-=5) {
        keyLeftLines[i].classList.add('border-dark-color');
    }
    let matrixLinesBold = document.querySelectorAll('.matrix-line');
    for (let i = 5; i < matrixLinesBold.length; i+=5) {
        matrixLinesBold[i].classList.add('border-dark-color');
    }
    let matrixBlockBold = document.querySelectorAll('.matrix-block');
    for (let i = matrixBlockBold.length - 1; i > 0; i -= 5) {
        matrixBlockBold[i].classList.add('border-dark-color');
    }
   
}
function lightTheme() {
    document.body.classList.remove('body-dark');
        wrapper.classList.remove('wrapper-dark');
        header.classList.remove('header-dark');
        levelName.classList.remove('header-dark');
        let matrixBlock = document.querySelectorAll('.matrix-block');
        matrixBlock.forEach(item => item.classList.remove('matrix-block-dark'));
        let keyLeftColor = document.querySelectorAll('.key-left');
        keyLeftColor.forEach(item => item.classList.remove('key-left-dark'));
        let keyTopColor = document.querySelectorAll('.key-top');        
        keyTopColor.forEach(item => item.classList.remove('key-top-dark'));
        let targetDark = document.querySelectorAll('.target');
        targetDark.forEach(item => item.classList.remove('target-dark'));
        let targetCrossDark = document.querySelectorAll('.target-cross');
        targetCrossDark.forEach(item => item.classList.remove('target-cross-dark'));
        let scoreLines = document.querySelectorAll('.score-line');
        scoreLines.forEach(item => item.classList.remove('score-line-dark'));
        timerBlock.classList.remove('score-line-dark');
        modalContent.classList.remove('modal-content-dark');
        matrixBlocksAll.classList.remove('border-dark-color');
        keysTop.classList.remove('border-dark-color');
        keysLeft.classList.remove('border-dark-color');
        let keyTopLines = document.querySelectorAll('.key-top');
        for (let i = keyTopLines.length-1; i > 0; i-=5) {
            keyTopLines[i].classList.remove('border-dark-color');
        }
        let keyLeftLines = document.querySelectorAll('.key-left');
        for (let i = keyLeftLines.length-6; i > 0; i-=5) {
            keyLeftLines[i].classList.remove('border-dark-color');
        }
        let matrixLinesBold = document.querySelectorAll('.matrix-line');
        for (let i = 5; i < matrixLinesBold.length; i+=5) {
            matrixLinesBold[i].classList.remove('border-dark-color');
        }
        let matrixBlockBold = document.querySelectorAll('.matrix-block');
        for (let i = matrixBlockBold.length - 1; i > 0; i -= 5) {
            matrixBlockBold[i].classList.remove('border-dark-color');
        }

}
themeBtn.addEventListener('click', function() {
    themeBtn.classList.toggle('theme-btn-night');
    chooseTheme(); 
}) 
//SOUNDS
const audioWin = new Audio('./sounds/win.mp3');
const audioTarget = new Audio('./sounds/target.mp3');
const audioEmpty = new Audio('./sounds/empty.mp3');
const audioCross = new Audio('./sounds/cross.mp3');




//Matrix for 5*5 nonograms
const umbrella = [[0,1,1,1,0],[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,1,1,0,0]];
const masque = [[1,1,1,1,1],[1,0,1,0,1],[1,1,1,1,1],[0,1,1,1,0],[0,0,1,0,0]];
const sunglasses = [[1,0,0,0,1],[1,0,0,0,1],[1,1,0,1,1],[1,1,1,1,1],[1,1,0,1,1]];
const note = [[0,1,1,1,1],[0,1,0,0,1],[0,1,0,0,1],[1,1,0,1,1],[1,1,0,1,1]];
const cross = [[0,1,1,1,0],[1,1,0,1,1],[1,0,0,0,1],[1,1,0,1,1],[0,1,1,1,0]];

// keyMatrixTop for 5*5 nonograms
const umbrellaTop = [[1], [2, 1], [5], [2], [1]];
const masqueTop = [[3], [2, 1], [5], [2, 1], [3]];
const sunglassesTop = [[5], [3], [1], [3], [5]];
const noteTop = [[2], [5], [1], [1, 2], [5]];
const crossTop = [[3], [2, 2], [1, 1], [2, 2], [3]];

//keyMatrixLeft for 5*5 nonograms

const umbrellaLeft = [[3], [5], [1], [1], [2]];
const masqueLeft = [[5], [1, 1, 1], [5], [3], [1]];
const sunglassesLeft = [[1, 1], [1, 1], [2, 2], [5], [2, 2]];
const noteLeft = [[4], [1, 1], [1, 1], [2, 2], [2, 2]];
const crossLeft = [[3], [2, 2], [1, 1], [2, 2], [3]];

const lightModeGameArr = ['umbrella', 'masque', 'sunglasses', 'note', 'cross'];

//Matrix for 10*10 nonograms
const basket = [[0,0,0,0,1,1,0,0,0,0],[0,0,1,1,0,0,1,1,0,0],[0,1,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,1,0],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,0,0]];
const duck = [[0,0,0,1,1,1,0,0,0,0],[0,0,1,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0],[0,1,1,1,0,0,1,0,0,0],[1,1,1,1,1,0,1,0,0,0],[0,0,0,1,0,1,0,0,0,1],[0,0,1,0,0,0,1,1,1,1],[0,1,0,0,1,0,0,0,0,1],[0,1,0,0,1,1,0,0,1,1],[0,1,1,0,0,1,1,1,0,1]];
const tea = [[0,0,1,0,1,0,1,0,0,0],[0,1,0,1,0,1,0,0,0,0],[1,1,1,1,1,1,1,1,0,0],[1,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,0,1],[1,0,1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1,1,1],[1,1,0,0,1,1,1,1,0,0],[0,1,1,1,1,1,1,0,0,0],[0,0,1,1,1,1,0,0,0,0]];
const teapot = [[0,0,1,1,1,1,1,0,0,0],[0,1,0,0,0,0,0,1,0,0],[0,1,0,0,1,0,0,1,0,0],[0,0,1,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1,0,1],[1,0,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,0],[1,1,0,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,0,0,0]];
const tree = [[0,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,0,1,1,1,0],[1,1,1,1,1,0,1,1,1,1],[1,1,0,1,1,1,0,0,1,1],[1,1,1,0,1,1,1,1,1,0],[0,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,1,1,0,0,0],[0,0,0,0,1,1,0,0,0,0],[0,1,0,0,1,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]];
// keyMatrixTop for 10*10 nonograms
const basketTop = [[4], [7], [1, 5], [1, 5], [1, 5], [1, 5], [1, 5], [1, 5], [7], [4]];
const duckTop = [[1], [2, 3], [4, 1, 1], [1, 3], [1, 1, 1, 2], [1, 1, 2], [4, 1, 1], [1, 1], [1, 1], [5]];
const teaTop = [[6], [2, 1, 3], [1, 1, 3, 2], [2, 3, 2], [1, 1, 6], [2, 6], [1, 1, 5], [6], [1, 1], [4]];
const teapotTop = [[4], [2, 2, 2], [1, 5, 1], [1, 7], [1, 8], [1, 7], [1, 7], [2, 5], [2], [3]];
const treeTop = [[3, 1], [5, 2], [3, 2, 1], [4, 1, 1], [10], [1, 7], [3, 1, 1, 1], [3, 1, 1], [4, 1], [2, 2]];
//keyMatrixLeft for 10*10 nonograms
const basketLeft= [[2], [2, 2], [1, 1], [1, 1], [1, 1], [10], [10], [10], [10], [6]];
const duckLeft = [[3], [1, 1], [1, 1, 1], [3, 1], [5, 1], [1, 1, 1], [1, 4], [1, 1, 1], [1, 2, 2], [2, 3, 1]];
const teaLeft = [[1, 1, 1], [1, 1, 1], [8], [1, 3], [8, 1], [1, 6, 1], [10], [2, 4], [6], [4]];
const teapotLeft = [[5], [1, 1], [1, 1, 1], [5], [7, 1], [8, 1], [1, 8], [1, 7], [2, 5], [6]];
const treeLeft = [[6], [4, 3], [5, 4], [2, 3, 2], [3, 5], [5], [3], [2], [1, 2, 1], [10]];

const mediumModeGameArr =  ['basket', 'duck', 'tea', 'teapot', 'tree'];

//Matrix for 15*15 nonograms
const dragon = [[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],[0,0,0,1,1,0,0,0,0,0,0,1,1,1,1],[0,0,1,1,0,0,0,0,0,0,0,1,1,1,1],[0,1,1,0,0,0,0,0,0,0,0,1,1,0,0],[1,1,0,0,0,0,0,0,0,0,0,1,1,1,0],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,0],[1,1,0,0,0,0,1,1,1,1,0,0,1,1,0],[1,1,0,0,0,1,1,1,1,1,1,0,1,1,0],[1,1,1,0,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[1,1,1,0,0,0,0,0,0,0,1,1,0,0,0],[1,1,0,0,0,0,0,0,0,0,1,1,1,0,0]];
const dog = [[0,0,1,1,1,0,0,0,0,1,1,0,0,0,0],[0,1,0,0,1,0,0,0,1,0,0,1,0,0,0],[1,0,0,1,1,0,0,1,0,0,0,1,1,0,0],[1,0,1,1,0,0,0,1,0,0,1,0,1,1,1],[1,0,1,0,0,0,0,0,1,1,0,0,0,0,1],[1,1,0,1,1,1,0,0,0,1,0,0,0,1,1],[0,1,1,1,1,1,1,1,1,1,0,1,1,1,0],[0,1,1,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,0,0,0,0,0,0,0,0,1,1,0,0,0],[0,1,0,0,1,0,0,1,0,0,0,1,0,0,0],[0,1,0,0,1,1,1,1,0,0,0,1,0,0,0],[1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],[1,0,1,0,0,1,0,1,0,1,0,1,0,1,1],[1,1,0,1,0,1,0,0,1,1,0,0,1,0,0],[0,1,1,1,0,1,1,1,1,0,1,1,1,0,0]];
const elephant = [[0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],[0,1,1,1,1,0,0,0,0,1,1,1,1,1,0],[1,1,0,1,0,0,0,0,0,0,1,0,0,1,1],[1,0,0,0,1,0,0,0,0,1,0,0,0,0,1],[1,0,0,0,1,0,0,0,0,1,0,1,0,0,1],[1,0,0,1,0,1,0,0,0,0,0,1,0,0,1],[1,1,0,1,1,1,0,0,1,0,0,1,0,1,1],[0,1,1,1,1,0,0,0,1,0,1,1,1,1,0],[0,1,0,1,0,0,0,1,1,1,1,0,0,0,0],[0,1,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,1,0,1,0,0,1,1,1,0],[1,1,1,1,1,1,1,0,1,0,0,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
const zebra = [[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,1,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,1,1,0,0,0,0,0,0,0],[0,1,1,0,1,0,1,1,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,1,1,0,0,0,0,0,0],[1,1,1,0,0,0,1,1,1,1,0,0,0,0,0],[1,1,1,1,1,1,1,0,1,1,1,0,0,0,0],[0,0,0,0,1,1,0,1,1,1,1,1,1,1,1],[0,0,0,0,0,1,1,0,1,0,1,0,1,0,1],[0,0,0,0,0,1,0,1,1,0,1,0,1,0,1],[0,0,0,0,0,1,1,1,0,1,0,1,1,0,1],[0,0,0,0,0,0,1,0,0,1,0,1,0,1,0],[1,1,1,1,1,1,1,1,0,1,0,1,0,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,1,1,1,1,1,1]];
const deer = [[1,0,0,1,0,0,0,0,0,0,0,1,0,0,1],[1,1,0,1,1,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,0,1,0,1,0,1,1,0,1,1],[0,1,1,1,1,0,1,0,1,0,1,1,1,1,0],[0,0,1,1,1,1,0,0,0,1,1,1,1,0,0],[0,0,0,1,1,0,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,0,1,0,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,0,1,1,1,1,1,1],[0,1,0,1,1,0,0,0,0,1,1,1,1,1,1],[0,1,1,1,1,0,0,0,0,1,1,1,1,1,1],[0,0,1,1,1,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1]];
// keyMatrixTop for 15*15 nonograms
const dragonTop = [[7, 2], [12], [2, 6], [2, 4], [1, 5], [6], [7], [7], [7], [7], [8], [4, 7], [12, 1], [3, 7], [2]];
const dogTop = [[4, 3], [1, 6, 2], [1, 2, 2, 1, 1], [1, 2, 2, 1, 2], [3, 2, 3], [2, 1, 3], [1, 1, 1], [2, 1, 4, 1], [1, 1, 1, 1, 2], [1, 4, 2], [1, 1, 2, 1], [2, 7, 1], [2, 1, 1, 2], [1, 2, 1], [3, 3]];
const elephantTop = [[5, 3], [2, 5, 3], [1, 1, 1, 3], [2, 4, 1, 3], [2, 2, 2, 1, 3], [1, 2, 5], [1, 2, 3], [1, 2, 1, 1], [1, 3, 4], [2, 2, 1, 1], [2, 2, 1], [1, 4, 3], [1, 1, 3], [2, 2, 3], [5, 1]];
const zebraTop = [[3, 3], [4, 3], [2, 2, 3], [1, 1, 3], [2, 1, 2, 3], [1, 5, 3], [3, 2, 1, 5], [4, 1, 2, 3], [6, 1], [3, 5], [4, 2], [1, 5], [4, 2], [1, 4], [4, 2]];
const deerTop = [[3], [3, 3], [2, 2, 2], [6, 6], [5, 7], [1, 1, 3], [2, 6], [2, 3], [2, 5], [11], [14], [5, 8], [2, 7], [3, 6], [3, 5]];
//keyMatrixLeft for 15*15 nonograms
const dragonLeft = [[2], [2, 4], [2, 4], [2, 2], [2, 3], [2, 2], [2, 4, 2], [2, 6, 2], [3, 10], [14], [14], [12], [11], [3, 2], [2, 3]];
const dogLeft = [[3, 2], [1, 1, 1, 1], [1, 2, 1, 2], [1, 2, 1, 1, 3], [1, 1, 2, 1], [2, 3, 1, 2], [9, 3], [2, 3], [1, 2], [1, 1, 1, 1], [1, 4, 1], [1, 2, 2, 2], [1, 1, 1, 1, 1, 1, 2], [2, 1, 1, 2, 1, 1], [3, 4, 3, 1]];
const elephantLeft = [[6], [4, 5], [2, 1, 1, 2], [1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [2, 3, 1, 1, 2], [4, 1, 4], [1, 1, 4], [1, 2], [6], [1, 2], [7, 1, 3], [7, 1, 3], [15]];
const zebraLeft = [[2], [1, 1], [2, 2], [2, 1, 2], [2, 2], [3, 4], [7, 3], [2, 8], [2, 1, 1, 1, 1], [1, 2, 1, 1, 1], [3, 1, 2, 1], [1, 1, 1, 1], [8, 1, 1, 1], [15], [8, 6]];
const deerLeft = [[1, 1, 1, 1], [2, 2, 2, 2], [2, 2, 1, 1, 2, 2], [4, 1, 1, 4], [4, 4], [2, 5], [6], [1, 1, 4], [10], [12], [7, 6], [1, 2, 6], [4, 6], [3, 6], [6]];
const hardModeGameArr =  ['dragon', 'dog', 'elephant', 'zebra', 'deer'];


wrapper.classList.add('wrapper');
body.append(wrapper);
header.textContent = 'Nonogram';
themeBtn.classList.add('theme-btn');
wrapper.append(themeBtn);
wrapper.append(header);
playMode.classList.add('play-mode');
wrapper.append(playMode);


const lightModeBtn = document.createElement('button');
lightModeBtn.classList.add('start-btn', 'light-mode');
playMode.append(lightModeBtn);
lightModeBtn.textContent = 'Level 1 (5x5)';

const mediumModeBtn = document.createElement('button');
mediumModeBtn.classList.add('start-btn', 'medium-mode');
playMode.append(mediumModeBtn);
mediumModeBtn.textContent = 'Level 2 (10x10)';

const hardModeBtn = document.createElement('button');
hardModeBtn.classList.add('start-btn', 'hard-mode');
playMode.append(hardModeBtn);
hardModeBtn.textContent = 'Level 3 (15x15)';

//RANDOM
const randomBtn = document.createElement('button');
randomBtn.classList.add('start-btn');
randomBtn.textContent = 'RANDOM GAME';
playMode.append(randomBtn);
const tempsAll = [].concat(lightModeGameArr, mediumModeGameArr, hardModeGameArr);
randomBtn.addEventListener('click', function() {
    let rand =  Math.floor(Math.random() * tempsAll.length)
    
    switchId(tempsAll[rand]);
    lightModeGame();
})

//LAST GAME
const lastGameBtn = document.createElement('button');
lastGameBtn.classList.add('start-btn');
playMode.append(lastGameBtn);
lastGameBtn.textContent = 'CONTINUE LAST GAME';
//SCORE
const scoreBtn = document.createElement('button');
scoreBtn.classList.add('start-btn');
playMode.append(scoreBtn);
scoreBtn.textContent = 'SCORE';


 
const keysLeft = document.createElement('div');
keysLeft.classList.add('keys-left');
const keysTop = document.createElement('div');
keysTop.classList.add('keys-top');

lightModeBtn.addEventListener('click', function() {
    modeGameArr = lightModeGameArr;
    levelName.textContent = lightModeBtn.textContent;
    chooseModeGame();

});
mediumModeBtn.addEventListener('click', function() {
    modeGameArr = mediumModeGameArr;
    levelName.textContent = mediumModeBtn.textContent;
    chooseModeGame();
})
hardModeBtn.addEventListener('click', function() {
    modeGameArr = hardModeGameArr;
    levelName.textContent = hardModeBtn.textContent;
    chooseModeGame();
})



function chooseModeGame() {
    playMode.style.display = 'none';  
    playBlock.style.display = 'flex';
    wrapper.append(levelName);
    levelName.classList.add('level-name');
    gameTemps.classList.add('game-temps');
    wrapper.append(gameTemps);
    gameTemps.style.display = 'flex';
    for (let i = 0; i < modeGameArr.length; i++) {
        const gameBtn = document.createElement('button');
        gameBtn.classList.add('start-btn');
        gameBtn.classList.add('game-btn');
        gameBtn.textContent = modeGameArr[i];
        gameBtn.id = modeGameArr[i];
        gameTemps.append(gameBtn);
    }
    let gameBtns = document.querySelectorAll('.game-btn');
    
    for (let i = 0; i < gameBtns.length; i++) {
        gameBtns[i].addEventListener('click', function(event) {
            let gameBtnTarget = event.target.closest('.game-btn');          
            

//SWITCH
            switchId(gameBtnTarget.id)
            lightModeGame();
        })  
    }

}

function switchId(targetId) {
    switch(targetId) {
        case 'umbrella':
        gameName = 'umbrella';
        gameMatrix =  umbrella;  
        keyMatrixTop = umbrellaTop;
        keyMatrixLeft = umbrellaLeft;
        break;
        case 'masque': 
        gameName = 'masque';
        gameMatrix =  masque;  
        keyMatrixTop = masqueTop;
        keyMatrixLeft = masqueLeft;
        break;
        case 'sunglasses': 
        gameName = 'sunglasses';
        gameMatrix =  sunglasses;  
        keyMatrixTop = sunglassesTop;
        keyMatrixLeft = sunglassesLeft;
        break;
        case 'note': 
        gameName = 'note';
        gameMatrix =  note;  
        keyMatrixTop = noteTop;
        keyMatrixLeft = noteLeft;
        break;
        case 'cross': 
        gameName = 'cross';
        gameMatrix =  cross;  
        keyMatrixTop = crossTop;
        keyMatrixLeft = crossLeft;
        break;
        case 'basket': 
        gameName = 'basket';
        gameMatrix =  basket;  
        keyMatrixTop = basketTop;
        keyMatrixLeft = basketLeft;
        break;
        case 'duck': 
        gameName = 'duck';
        gameMatrix =  duck;  
        keyMatrixTop = duckTop;
        keyMatrixLeft = duckLeft;
        break;
        case 'tea': 
        gameName = 'tea';
        gameMatrix =  tea;  
        keyMatrixTop = teaTop;
        keyMatrixLeft = teaLeft;
        break;
        case 'teapot': 
        gameName = 'teapot';
        gameMatrix =  teapot;  
        keyMatrixTop = teapotTop;
        keyMatrixLeft = teapotLeft;
        break;
        case 'dragon': 
        gameName = 'dragon';
        gameMatrix =  dragon;  
        keyMatrixTop = dragonTop;
        keyMatrixLeft = dragonLeft;
        break;            
        case 'dog': 
        gameName = 'dog';
        gameMatrix =  dog;  
        keyMatrixTop = dogTop;
        keyMatrixLeft = dogLeft;
        break;  
        case 'tree': 
        gameName = 'tree';
        gameMatrix =  tree;  
        keyMatrixTop = treeTop;
        keyMatrixLeft = treeLeft;
        break;  
        case 'elephant': 
        gameName = 'elephant';
        gameMatrix =  elephant;  
        keyMatrixTop = elephantTop;
        keyMatrixLeft = elephantLeft;
        break;  
        case 'zebra': 
        gameName = 'zebra';
        gameMatrix =  zebra;  
        keyMatrixTop = zebraTop;
        keyMatrixLeft = zebraLeft;
        break;  
        case 'deer': 
        gameName = 'deer';
        gameMatrix =  deer;  
        keyMatrixTop = deerTop;
        keyMatrixLeft = deerLeft;
        break;  
    }
}

function lightModeGame() {    
    console.log(gameMatrix);
    playMode.style.display = 'none';
    gameTemps.style.display = 'none';
    levelName.remove();
    let gameBtns = document.querySelectorAll('.game-btn');

    for (let i = 0; i < gameBtns.length; i++) {
        gameBtns[i].remove();
    }
    
    playBlock.classList.add('play-block');
    wrapper.append(playBlock);
    
    
    playBlock.append(playGame);    
    playGame.classList.add('play-game');
    playGame.append(keysTop);
    playGame.append(keysLeft);


    playInfo.classList.add('play-info');
    playBlock.append(playInfo);


    playInfo.append(timerBlock);
    timerBlock.classList.add('timer-block');
    timerBlock.innerHTML = '00:00';
   
   
    resetBtn.classList.add('start-btn');
    resetBtn.textContent = 'RESET';
    playInfo.append(resetBtn);

    solutionBtn.classList.add('start-btn');
    solutionBtn.textContent = 'SOLUTION';
    playInfo.append(solutionBtn);
    
    saveBtn.classList.add('start-btn');
    saveBtn.textContent = 'SAVE';
    playInfo.append(saveBtn);
    
    menuGameBtn.classList.add('start-btn');
    menuGameBtn.textContent = 'MENU';
    playInfo.append(menuGameBtn);

    audioBtn.classList.add('audio-btn');
    playInfo.append(audioBtn);  
    matrixBlocksAll.classList.add('matrix-block-all');
    playGame.append(matrixBlocksAll)
    for (let i = 0; i < keyMatrixTop.length; i++) {
        let keyTop = document.createElement('div');
        keyTop.classList.add('key-top');
        keysTop.append(keyTop);
        for (let j = 0; j < keyMatrixTop[i].length; j++) {            
            let keyNumTop = document.createElement('div');
            keyTop.append(keyNumTop);
            keyNumTop.textContent = keyMatrixTop[i][j];

        }
    }
    for (let i = 0; i < keyMatrixLeft.length; i++) {
        let keyLeft = document.createElement('div');
        keyLeft.classList.add('key-left');
        keysLeft.append(keyLeft);
        for (let j = 0; j < keyMatrixLeft[i].length; j++) {
        
            let keyNumLeft = document.createElement('div');
            keyLeft.append(keyNumLeft);
            keyNumLeft.textContent = keyMatrixLeft[i][j];

        }
    }

    for (let i = 0; i < gameMatrix.length; i++) {
        let matrixLine = document.createElement('div');
        matrixLine.classList.add('matrix-line');
        matrixBlocksAll.append(matrixLine);
        for (let j = 0; j < gameMatrix[i].length; j++) {            
            let matrixBlock = document.createElement('div');
            matrixBlock.classList.add('matrix-block');
            matrixLine.append(matrixBlock);
        }
    }
    keysTop.classList.add('keys-top-border');
    keysLeft.classList.add('keys-left-border');
    addDividers();
    if (themeBtn.classList.contains('theme-btn-night')) {
        darkTheme();
    }

}



audioBtn.addEventListener('click', function() {    
    audioBtn.classList.toggle('audio-btn-mute');
})


 
// Заполнение нонограммы
playGame.addEventListener('contextmenu', function(event) {
    event.preventDefault();
})

playGame.addEventListener('mousedown', function(event) {
    
    let target = event.target.closest('.matrix-block');

    if (event.button == 0) {
        
        if (target.classList.contains('target')) {
            if (audioBtn.classList.contains('audio-btn-mute')) {
                soundsMute();
            } else {
                audioEmpty.play();
            }
            
        } else {

            if (audioBtn.classList.contains('audio-btn-mute')) {
                soundsMute();
            } else {
                audioTarget.play();
            }
           
        }

        if (target.classList.contains('target-cross')) {
            target.classList.remove('target-cross');
        }
        if (themeBtn.classList.contains('theme-btn-night')) {
            target.classList.toggle('target-dark');
        }
        target.classList.toggle('target');   
        matrixBlocks = document.querySelectorAll('.matrix-block');
        let arr = [];
        
        for (let i = 0; i < matrixBlocks.length; i++) {
            if (matrixBlocks[i].classList.contains('target')) {
                arr.push(1)
            } else {
                arr.push(0);
            }
           
        }


        let gameMatrixArr = gameMatrix.flat();
        
        if (arr.toString() == gameMatrixArr.toString()) {
            showModal();
        }
    } else if (event.button == 2) { 
        
        if (audioBtn.classList.contains('audio-btn-mute')) {
            soundsMute();
        } else {
            audioCross.play();    
        }
        if (themeBtn.classList.contains('theme-btn-night')) {
            target.classList.toggle('target-cross-dark');
        }
       
        target.classList.toggle('target-cross');   
    }

    targetBlock = document.querySelectorAll('.target');
    targetCrossBlock = document.querySelectorAll('.target-cross');

    

    if ((targetBlock.length == 1 && targetCrossBlock.length == 0) || (targetBlock.length == 0 && targetCrossBlock.length == 1)) {        
        clearInterval(timer);
        addTimer();
    }

    

});


resetBtn.addEventListener('click', function() {  
    resetMatrix();
});



function resetMatrix() {
    targetBlock = document.querySelectorAll('.matrix-block');
    targetBlock.forEach(item => {
        item.classList.remove('target');
        item.classList.remove('target-cross');
        item.classList.remove('target-dark');
        item.classList.remove('target-cross-dark');
    })
}
function solutionDisabled() {
    playGame.classList.add('play-game-disabled');
    resetBtn.classList.add('play-game-disabled');
    solutionBtn.classList.add('play-game-disabled');
    saveBtn.classList.add('play-game-disabled');
}
solutionBtn.addEventListener('click', function() {
    solution = true;
    if (solution) {        
        solutionDisabled();
    }
    resetMatrix();
    let matrixElem = document.querySelectorAll('.matrix-block');
    let gameMtrx = gameMatrix.flat();
    for (let i = 0; i < gameMtrx.length; i++) {
        if (gameMtrx[i] == 1) {
            matrixElem[i].classList.add('target');
        }
    }
})

//MODAL

modal.classList.add('modal');

modalContent.classList.add('modal-content');
const modalText = document.createElement('div');
modalText.classList.add('modal-text');
const modalBtn = document.createElement('button');
modalBtn.classList.add('start-btn', 'modal-btn');

function showModal() {
    if (audioBtn.classList.contains('audio-btn-mute')) {
        soundsMute();
    } else {
        audioWin.play();
    }
    
    modal.style.display = 'block';
    document.body.appendChild(modal);       
    modal.appendChild(modalContent);        
    modalContent.appendChild(modalText);
    timeRes = timerBlock.innerHTML;
    localStorage.setItem('scoreTime', timeRes);
    modalText.textContent = 'Great! You have solved the nonogram in ' + timeRes + '!';
    localStorage.setItem('saveGameName', gameName);
    let name = localStorage.getItem('saveGameName');
    let score = localStorage.getItem('scoreTime');
    console.log(name);
    let scoreRes = score + ' ' + name;
    resArr.push(scoreRes);
    console.log(resArr);
    resArr.sort();    
    localStorage.setItem('saveResArr', JSON.stringify(resArr));

    modalContent.appendChild(modalBtn);
    modalBtn.textContent = 'START';
    clearInterval(timer);
    
}
function startGame() {
    modal.style.display = 'none';
    playMode.style.display = 'flex';
    
    let matrixLine = document.querySelectorAll('.matrix-line');
    for (let i = 0; i < matrixLine.length; i++) {
        matrixLine[i].remove();
    }
    matrixBlocks = document.querySelectorAll('.matrix-block');
    for (let i = 0; i < matrixBlocks.length; i++) {
        matrixBlocks[i].remove();
    }
    let keysTopArr = document.querySelectorAll('.key-top');
    for (let i = 0; i < keysTopArr.length; i++) {
        keysTopArr[i].remove();

    }
    let keysLeftArr = document.querySelectorAll('.key-left');
    for (let i = 0; i < keysLeftArr.length; i++) {
        keysLeftArr[i].remove();        
    }
    keysLeft.remove();
    keysTop.remove();
    wrapper.lastElementChild.remove();
}
modalBtn.addEventListener('click', startGame);
menuGameBtn.addEventListener('click', function() {
    startGame();
    playGame.classList.remove('play-game-disabled');
    resetBtn.classList.remove('play-game-disabled');
    solutionBtn.classList.remove('play-game-disabled');
    saveBtn.classList.remove('play-game-disabled');
    
});
function soundsMute() {
    audioCross.pause();
    audioEmpty.pause();
    audioTarget.pause();
    audioWin.pause();
}

//score
const scoreBlock = document.createElement('div');
scoreBlock.classList.add('score-block');


let scoreLine;

wrapper.append(scoreBlock);
for (let i= 0; i < 5; i++) {
    scoreLine = document.createElement('div');
    scoreLine.classList.add('score-line');
    scoreBlock.append(scoreLine);

}
let scoreLines = document.querySelectorAll('.score-line');

menuBtn.classList.add('start-btn');
scoreBlock.append(menuBtn);
menuBtn.textContent = 'MENU';
scoreBlock.style.display = 'none';
scoreBtn.addEventListener('click', function() {
    scoreBlock.style.display = 'flex';
    menuBtn.style.display = 'block';
    playMode.style.display = 'none';

    resArr = JSON.parse(localStorage.getItem('saveResArr'));
    console.log(resArr);
    if (resArr.length > 5) {
        resArr.length = 5;
    }
    for (let i = 0; i < scoreLines.length; i++) {
        scoreLines[i].textContent = resArr[i];
    }

});
menuBtn.addEventListener('click', function() {
    scoreBlock.style.display = 'none';
    playMode.style.display = 'flex';
    menuBtn.style.display = 'none';
}) ;
saveBtn.addEventListener('click', function() {
    console.log(gameMatrix);
    localStorage.setItem('saveGameMatrix', JSON.stringify(gameMatrix));
    localStorage.setItem('savekeyMatrixTop', JSON.stringify(keyMatrixTop));    
    localStorage.setItem('savekeyMatrixLeft', JSON.stringify(keyMatrixLeft));
    matrixBlocks = document.querySelectorAll('.matrix-block');
    let saveArr = [];
    for (let i = 0; i < matrixBlocks.length; i++) {
        if (matrixBlocks[i].classList.contains('target')) {
            saveArr.push(1); 
        } else if (matrixBlocks[i].classList.contains('target-cross')) {
            saveArr.push(2);
        } else {
            saveArr.push(0);
        }
    }
    console.log(saveArr);
    localStorage.setItem('saveMatrixBlocks', saveArr);
    


});
lastGameBtn.addEventListener('click', function() {
    gameMatrix = JSON.parse(localStorage.getItem('saveGameMatrix'));    
    keyMatrixTop = JSON.parse(localStorage.getItem('savekeyMatrixTop'));
    console.log(keyMatrixTop);
    keyMatrixLeft = JSON.parse(localStorage.getItem('savekeyMatrixLeft'));
    let saveMatrixArr = localStorage.getItem('saveMatrixBlocks');
    saveMatrixArr = saveMatrixArr.split(',');  
    lightModeGame();  
    matrixBlocks = document.querySelectorAll('.matrix-block');    
    for (let i = 0; i < saveMatrixArr.length; i++) {
        if (saveMatrixArr[i] == 1) {
            matrixBlocks[i].classList.add('target');
        } else if (saveMatrixArr[i] == 2) {
            matrixBlocks[i].classList.add('target-cross');
        }
    }
    playMode.style.display = 'none';  
});

