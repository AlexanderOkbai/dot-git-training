console.log(
  "----------------------------------------------------------------------"
);

var x = 17;
function reverseCompare() {
  var y = x % 10;
  var z = Math.floor(x / 10);
  var xyz = "" + y;
  var reversed = xyz + z;
  console.log(reversed);
  if (x > reversed) {
    console.log("original is greater than the reversed = OK !");
  } else if (x == reversed) {
    console.log("Original and reversed of original are equal!");
  } else {
    console.log("Reversed is greater than the original = Not Ok !");
  }
}
reverseCompare();

console.log(
  "----------------------------------------------------------------------"
);
var numb = 6;
var store = 1;
function factorial(numb) {
  for (var natural = 1; natural < numb; natural++) {
    store = store * (numb - natural);
  }
  return numb * store;
}
console.log(factorial(numb));

console.log(
  "----------------------------------------------------------------------"
);
var zeroNumb = 1;
var stored = 1;
function zeroFactorial(zeroNumb) {
  if (zeroNumb == 0 || zeroNumb == 1) {
    return 1;
  } else {
    for (var natural = 1; natural < zeroNumb; natural++) {
      stored = stored * (zeroNumb - natural);
    }
    return zeroNumb * stored;
  }
}
console.log(zeroFactorial(zeroNumb));

console.log(
  "----------------------------------------------------------------------"
);

var myArray = [10, 4, 1, 5];

function checkMeera(myArray) {
  var x;
  for (let index = 0; index < myArray.length; index++) {
    x = 2 * myArray[index];
    for (let i = 0; i < myArray.length; i++) {
      if (x === myArray[i]) {
        return true;
      }
    }
  }
  return false;
}

if (checkMeera(myArray)) {
  console.log("Not Meere");
} else {
  console.log("Meere");
}

console.log(
  "----------------------------------------------------------------------"
);
const array = [1, -6, 4, -3];

function isMeeraArray(array) {
  for (let i = 0; i < array.length; i++) {
    var y = array[i] * 2;
    if (array.includes(y)) {
      return true;
    }
  }
  return false;
}

if (isMeeraArray(array)) {
  console.log("NOT a Meera");
} else {
  console.log("Meera");
}
console.log(
  "----------------------------------------------------------------------"
);

var ele = [1, 1, 2, 3, 0, 3];
var counter = 1;
function na(par) {
  for (let i = 0; i < ele.length; i++) {
    for (let j = 1; j <= ele.length; j++) {

      if (ele[i] == ele[j]) {
        counter++;
      }

    }
    if (counter == 2) {
      return 1;
    }
    else {
      return 0;

    }
  }

}
console.log(na(ele));