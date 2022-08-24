//gonna add life to the calc here

// pseudocode
// 1-create individual functions for add sub multiply and div test them in console
// 2- Create a function that takes in an operator and 2 number then call one of above function on numbers.. use  console first to check
// 3- Add a clear button
// 4- a function that show on display when click number button. store the display value in a variable to use for next step
// store the first number user click then save which operation is selected then operate on them when user clicks = key.

// lets create individual function


//functions for operators

const add = function(...number) {
    let num = number;
    let sum = 0;
    for (let i of num) {
      sum += i;
    }
    return sum;
  }

const product = function(...number) {
    let num = number;
    let product = 1;
    for (let i of num) {
      product*= i;
    }
    return product;
  }

  const difference = function(...number) {
    let num = number;
    let difference = number[0];
    for(let i=1;i<num.length;i++)
      {
        difference -= num[i];
      }
    return difference;
  }
  const division = function(...number) {
    let num = number;
    let divide = number[0];
    
    for(let i=1;i<num.length;i++)
      {
        divide /= num[i];
      }
    return divide;
  }

const operator = function(){
    let opt = prompt("Enter operator to perform calculation on numbers(Only +,-,*,/)");
    let num = [];
    let times = parseInt(prompt("How many numbers you want to operate on?"));
    for(let i=0; i<times;i++){
        num[i]=parseInt(prompt('enter num '+(i+1)));
    }
    // console.log(num);
    if(opt=="+"){
        return console.log(add(...num));
    }
    else if(opt == "-"){
        return console.log(difference(...num));
    }
    else if(opt == '*'){
        return console.log(product(...num));
    }
    else if(opt == '/'){
        return console.log(division(...num));
    }
    else {
        alert("Wrong input!");
        operator();
    }
}

//   operator();

  const btn = document.querySelector('.btnPlay');
//   console.log(btn);
  btn.addEventListener("click",operator);
  // for the part ahead ive a rough idea, that assign numbers to their respective button then 
//   those number get stores in the array which then gets displayed on the screen and then when
// 
// lets try on single numbers first
  
//following odin's step

// selectors numbers
const numOne = document.getElementById("one");
const numTwo = document.getElementById("two");
const numThree = document.getElementById("three");
const numFour = document.getElementById("four");
const numFive = document.getElementById("five");
const numSix = document.getElementById("six");
const numSeven = document.getElementById("seven");
const numEight = document.getElementById("eight");
const numNine = document.getElementById("nine");
const numZero = document.getElementById("zero");

//selectors operators
const addBtn = document.getElementById("add");
const subBtn=document.getElementById("subtract");
const multiplyBtn =document.getElementById("multiply");
const divBtn = document.getElementById("divide");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");


//global variables
let numOps = [];

//btn events
numOne.addEventListener('click', one);
numTwo.addEventListener('click', two);
numThree.addEventListener('click', three);
numFour.addEventListener('click', four);
numFive.addEventListener('click', five);
numSix.addEventListener('click', six);
numSeven.addEventListener('click', seven);
numEight.addEventListener('click', eight);
numNine.addEventListener('click', nine);
numZero.addEventListener('click', zero);

//btn operations
function one(){
    numOps.push(1);
    console.log(numOps);
}