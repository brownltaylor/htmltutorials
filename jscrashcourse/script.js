<script>
const name='Taylor'; // strings can have'' or `` (`` will use ${} to concatenate)
const age= 20; 
const rating= 4.5;
const isCool = true; 
const x = null; 
const y = undefined; 
 

console.log(typeof name);//will print string

name.toUpperCase // will print string in uppercase
name.toLowerCase // will print in lowercase 
name.split// will split each element and print it on different lines
name.substring(0, 5);

//Arrays
const numbers =[3, 6, 8, 0, 1, 14]//must be encompassed in square brackets
 console.log(numbers[1])//this is calling an individual element in te array 
 numbers.push(8);//this will add a new item to the end of an array
 numbers.pop(); //this will remove the last element of the array 
 console.log(Array.isArray('numbers')); // this will return true 
 numbers.indexOf(8);

 //Object Literals

 //key-value pairs

 const person={ //this is an object 
 	firstName:"Taylor",
 	lastName:"Brown",
 	age: 24,
 	hobbies: ['music', 'coding', 'businesses'],
 	address:{  // this is an embedded object
 		street: '17 Three Rivers Dr.',
 		city: 'Newark',
 		state: 'DE',
 	}
 }

 console.log(person.firstName, person.lastName)//to print elements to the console
 console.log(person.hobbies[2]);//will print 'businesses'
 console.log(person.address.city); // to access the embedded object variables

//Destructuring 
 const { firstName, lastName } = person; // this is to 'pull out' and store variables
const { address: {city} } = person; // to pull embedded object variable 

person.email = 'brownltaylor@gmail.com'; // adds a variable to the object 

const todos = [ //this is like a 'stacked' array 
{
	id: 1,
	text: 'Take out trash', 
	isCompleted: true, 
},
{
	id: 2,
	text: 'Meeting with boss', 
	isCompleted: true,
},
{
	id: 3,
	text: 'Dentist appointment', 
	isCompleted: false, 
}
];
console.log(todos[1].text);//this is to call on individual data in each element 

//translating to json https://www.goanywhere.com/managed-file-transfer/translation/json
//you would normally send & recieve data to apis or through a server in json format 
const todoJSON = JSON.stringify(todos); // this will convert into a json string
console.log(todoJSON);

//For Loops 

for(let i = 0; i < 10; i++){ //very similar to java 
console.log(i); 
}

for(let i = 0; i < todos.length; i++){ 
console.log(todos[i].text); 
}

for(let todo /* this can be anything */ of todos){
	console.log(todo.text); 
}


//While Loop 
let i = 0; 
while(i < 10){ 
console.log(i);
}

//forEach, map, filter

// todos.forEach(function todoyou are initializing the variable here);
// console.log(todo); 



const todoText = todos.map(function(todo){
	return todo.text; 
})

//this is a filter added with a map... this will return the text from the items that are completed
const todoCompleted = todos.filter(function(todo){
	return todo.isCompleted === true; 
}).map(function(todo){ 
return todo.text
})


//if-else statements
const z = 10; 
const a = 4;

if(z == 10){ 
console.log('z is 10');



if(z > 5 || a < 15){ // if this OR this is true
console.log('your lucky numbers are ' + z + ' ' + a);

}

const color = z > 10 ? 'red' : 'blue'
//this is ternary format (shortens the if/else) before colon is if true and after is if false 

switch(color){ 
	case'red':
	console.log('color is red'); 
	break; 
	case 'blue': 
	console.log('color is blue');
	break; 
	default: 
	console.log('color is not red or blue');
	break;  
}

//this is a switch method -- another way of writing an if/else/else if statment

//how to write a function

function addNums(n1, n2){ 
console.log(n1 + n2); 
//or return num1 + num2

} // this is the equivilant of a method with a void return type in java

addNums(5, 5) 

const addNums2 = (num1 = 1, num2 = 2) => num1 + num2 //if you had only one parameter you wouldnt need the parenthesis

// //or => {
// 	return num1+ num2;
// }

//todos.forEach(todo) => console.log(todo);

//this stores the method result in a variable 


//OOP Object Oriented Programming///////////////////////////

function Person(firstName, lastName, dob){
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = dob;
	this.getBirthYear = function(){
		return dob.getFullYear();
	}
}

Person.prototype.getFullName = function(){
	return `${this.firstName ${thids.lastName}}`;
} //adds function to constructor (syntactic sugar)


//Class

class Person{
	constructor(firstName, lastName, dob){
		this.firstName = firstName; 
		this.lastName = lastName;
		this.dob = new Date(dob);
	}

	getBirthYear(){
		return this.dob.getFullYear();
	}
}

//instantiate object
const person1 = new Person('Taylor', 'Brown', '3-30-1995')
console.log(person1.firstName); 
console.log(person1.dob.getFullYear);


//single element selectors 
document.getElementById('');
document.querySelector();

//mutliple element selectors
document.querySelectorAll('');//works well for arrays 
document.getElementsByClassName('');
document.getElementsByTagName('');// li,
//you can also store these in variables 
const ul = document.querySelector('');
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = "Brad";
bt.addEventListener('click', (e) =>  {
	e.preventDefault();
	document.querySelector('body').classList.add('bg-dark');
	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello'</h1>';

});