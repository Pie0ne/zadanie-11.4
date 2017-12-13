
function Phone(brand, price, color, weight, premiere, os) {
   	this.brand = brand;
	this.price = price;
	this.color = color; 
	this.weight = weight;
	this.premiere = premiere;
	this.os = os;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + 
			", the weight is " + this.weight + ", OS is " + this.os + " and the premiere was " + this.premiere);
}

var iPhone6S = new Phone('Apple', 2250, 'silver', 143, 2015, 'iOS');

iPhone6S.printInfo();

var samsungGalaxyS6 = new Phone('Samsung', 1500, 'black', 138, 2015, 'Android');

samsungGalaxyS6.printInfo();

var onePlusOne = new Phone('OnePlus', 1000, 'white', 162, 2014,'Android');

onePlusOne.printInfo();

