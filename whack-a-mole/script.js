const holes = document.querySelectorAll('.hole'); 
const scoreboard = document.querySelector('.score'); 
const mole = document.querySelectorAll('.mole'); 
let lastHole; 

function randomTime(min, max){ 
	return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
const idx = Math.floor(Math.random()  * holes.length);
const hole= holes[idx];

if(hole === lastHole){ 
console.log('same hole'); 
return randomHole(holes);
}

lastHole = hole;
return hole; 
}

function peep(){ 
const time = randomTime(200, 1000); 
const hole = randomHole(holes); 
console.log(time, hole); 
hole.classList.add('up');
setTimeout(() => { 
hole.classList.remove('up'); 
peep();
}, time); 

}