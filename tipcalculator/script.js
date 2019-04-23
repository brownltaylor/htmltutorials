const form = document.querySelector('#myForm');
const billInput = document.getElementById('billAmount');
const tipPercent = document.getElementById('tipPercentage');
const numOfPeople = document.getElementById('totalPeople');
const btn = document.getElementById('calculate');
let tipOutput = document.getElementById('tip');
let totalPrice = document.getElementById('price');


form.addEventListener('submit', calculateTip);

function calculateTip(e){ 
	e.preventDefault();

	if(billInput.value === '' || tipPercent.value === ''){ 
		alert('Please enter all fields');
} 

	let tipDecimal = tipPercent.value / 100; 
	let tipTotal = billInput.value * tipDecimal;
	let discountPrice = billInput.value - tipTotal;
	
	tipOutput.classList.add(discountPrice); 
	tipOutput.innerHTML = discountPrice;



}



