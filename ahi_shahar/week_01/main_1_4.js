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
  return sum;
  console.log(sum);
};
// Output
cashRegister(cartForParty); // 60.55

var cards = [];
var badData = function(num,result,reason,ccDate) {
  cards.push( {
  valid : result,
  number : num,
  result : reason,
  date : ccDate
} );
}
var data = function (num,result,ccDate) {
  cards.push( {
  valid : result,
  number : num,
  date : ccDate
  });
}

var currentDate = {
  month : "10",
  year : "2016",
  date : function() {
    return this.year + this.month;
  }
}; // Close objec

// var card = prompt("please enter a valid card number ####-####-####-####");
// var expDate = prompt("please enter your expiration date YYYY-MM");
var validateCreditCard = function (card, expDate) {
  var cardString = '';
  for ( i = 0 ; i < card.length ; i += 1){
    if (card.charAt(i) !== '-') {
      cardString = cardString + card.charAt(i);
    };
  }; //close loop
  var ccDate = '';
  for ( i = 0 ; i < expDate.length ; i += 1){
    if (expDate.charAt(i) !== '-') {
      ccDate = ccDate + expDate.charAt(i);
    };
  }; //close loop
  if ( isNaN(cardString) === true ) return badData(card,false,"must_only_have_numbers!",ccDate);
  // confirms the number contains integers only
  if ( cardString.length != 16) return badData(card,false,"must_have_16_digits!",ccDate);
  // check the number consists of 16 digits
  if ( isNaN(ccDate) === true ) return badData(card,false,"expiry_date_must_only_have_numbers!",ccDate);
  // confirms the number contains integers only
  if ( ccDate.length != 6) return badData(card,false,"must_enter YYYY-MM in numbers!",ccDate);
  // check the number consists of 6 digits
  if ( currentDate.date() > ccDate) return badData(card,false,"Card has EXPIRED!",ccDate);
  var first = cardString.charAt(0);
  var isSame = 0;
  for ( i = 0 ; i < cardString.length ; i += 1) {
    if ( first.charCodeAt() != cardString.charCodeAt(i)) isSame += 1;  // Check for un-identical numbers
  };
  if (isSame === 0) return badData(card,false,"must_have_at_least_two_different_digits",ccDate); // if no un-identical numbers found, INVALID CARD
  if (Number.parseInt(cardString)%2 != 0) return badData(card,false,"last_digit_is_not_even!",ccDate);  // Check that the last digit is even..
  var total = 0;
  for ( i = 0 ; i < cardString.length ; i += 1){
    var value = Number.parseInt(cardString.charAt(i));
    total += value;
  };
  if ( total < 16 ) return badData(card,false,"total_of_digits_under_16!",ccDate);
return data(card,true,ccDate)
};
