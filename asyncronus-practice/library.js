const inventory = {
	sunglasses: 0, 
	pants: 960; 
	bags: 768;
};

const checkInventory = (order) =>{ 
return new Promise((resolve, reject) => { 
setTimeout(() => { 

	let inStock = order.every(item => inventory[item[0]] >= item[1]);
if (inStock) {
	resolve('Thank you. Your order was successful.');
}else{
	reject('We're sorry. Your order couldn't be processed at this time");
}
}, 1000);
});
};

