// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 5,
  width: 4,
  isSquare : function () {
    if ( this.length === this.width) {
      return  "rectangle is a square"
    } else  return "rectangle is not a square"
  }
};
var isSquare = function () {
  console.log(rectangle.isSquare);
};

// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 4,
  sideB: 6,
  sideC: 4,
  isEquilateral : function() {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return "trianle is Equilateral!"
    } else return "trianle is not Equilateral"
  },
  isIsosceles : function() {
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
      return "triangle is isIsosceles";
    } else return "triangle is not isIsosceles"
  },
  area : function() {
    var number = (this.sideA + this.sideB + this.sideC)/2;
    var area = (number*(number-this.sideA)*(number-this.sideB)*(number-this.sideC))/2;
    return area;
  },
  isObtuse : function() {
    num1 = this.sideA ^ 2;
    num2 = this.sideB ^ 2;
    num3 = this.sideC ^ 2;
    if ((num1 + num2) < num3 || (num1 + num3) < num2 || (num2 + num3) < num1) {
      return "This is obtuse.";
    } else {
      return "This is not obtuse.";
    }
  }
};
var isEquilateral = function() {
  console.log(triangle.isEquilateral());
};
var isIsocsceles = function() {
  console.log(triangle.isIsocsceles());
};
var area = function() {
  console.log(triangle.area());
};
var isObtuse = function() {
  console.log(triangle.isObtuse());
};


// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};
var cashRegister = function (shopingCart) {
  var sum = 0;
  for (var key in shopingCart) {
    var price = shopingCart[key];
    sum += Number.parseFloat(price);
  };
  // var items = Object.keys(shopingCart); // create an array of the items
  // for (var i = 0; i < items.length; i++) {
  //   var oneAtATime = items[i]; // get the name of the key for the item
  //   var price = shopingCart.oneAtATime; // get the price for the item
  //   sum += Number.parseFloat(price); // convert the price to a float and add it to the sum
  // };
  return sum;
  console.log(sum);
};
// Output
cashRegister(cartForParty); // 60.55
