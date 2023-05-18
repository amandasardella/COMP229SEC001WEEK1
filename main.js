/*
import { halfOf, multiply } from "./lib.js";
console.log(halfOf(84));
console.log(multiply(22, 2));
*/

/*
function sum1(a, b) {
  return a + b;
}
let result = sum1(1, 2);
console.log(result);
*/

//NORMAL FUNCTION
/*
function sum1(a, b) {
    return a + b;
}
let result = sum1(1, 2);
console.log(result);
*/

//ARROW FUNCTION
/*
const sum1 = (a, b) => {
    return a + b;
}
let result = sum1(1, 2);
console.log(result);
*/

//OR (ARROW FUNCTION SHORTER)
/*
const sum1 = (a, b) => a + b;
let result = sum1(1, 2);
console.log(result);
*/

//LET AND CONST
/*
function reinitConst() {
  let me = 1;
  console.log(me);
  me = 2;
  console.log(me);
}
reinitConst();
*/

//DEFAULT VALUE
/*
function add(x, y = 0) {
  console.log(x + y);
}
add(1);
add(1, 2);
*/

//REST
/*
function userFriends(user, ...friends) {
  console.log(user + " has " + friends.length + " friends");
}
userFriends("User", "Bob", "Alice", "Cal");
*/

//SPREAD - turns array into call argument
/*
function userTopFriends(firstFriend, secondFriend, thirdFriends) {
  console.log(firstFriend);
  console.log(secondFriend);
  console.log(thirdFriends);
}
userTopFriends(...["Alice", "Bob", "Michelle"]);
*/

//CLOSURES
/*
function parent() {
  const message = "Hello World";
  function child() {
    alert(message);
  }
  child();
}
parent();
*/
