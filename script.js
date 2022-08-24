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

  const btn = document.querySelector('.btnPlay');
  btn.addEventListener("click",operator);

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
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");

//selectors dom elements
const input = document.querySelector('.inputText');
const displayOps = document.querySelector('.displayValue');

//global variables
let numOps = [];
let valueOps = [];

//number btn events
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

//operation btn events
clearBtn.addEventListener('click',clear);
equalBtn.addEventListener('click',equal);
addBtn.addEventListener('click',addOps);
subBtn.addEventListener('click',subOps);
multiplyBtn.addEventListener('click',multiplyOps);
divBtn.addEventListener('click',divOps);



//operation btns functions
function clear(){
    numOps=[];
    input.textContent=numOps;
    displayOps.textContent=numOps;
    c=console.log(numOps);
}

//btn operations functions
function one(){
    numOps.push(1);
    numOps=numOps.join('');
    numOps=[parseInt(numOps)];
    input.textContent=numOps;
    if(numOps > 9999999999 ){
        limit();
    }
    console.log(numOps);
}
function two(){
    numOps.push(2);
    numOps=numOps.join('');
    numOps=[parseInt(numOps)];
    input.textContent=numOps;
    if(numOps > 9999999999 ){
        limit();
    }
    console.log(numOps);
}
function three(){
    numOps.push(3);
    numOps=numOps.join('');
    numOps=[parseInt(numOps)];
    input.textContent=numOps;
    if(numOps > 9999999999 ){
        limit();
    }
    console.log(numOps);
}
function four(){
    numOps.push(4);
    numOps=numOps.join('');
    numOps=[parseInt(numOps)];
    input.textContent=numOps;
    if(numOps > 9999999999 ){
        limit();
    }
    console.log(numOps);
}
function five(){
    numOps.push(5);
    numOps=numOps.join('');
    numOps=[parseInt(numOps)];
    input.textContent=numOps;
    if(numOps > 9999999999 ){
        limit();
    }
    console.log(numOps);
}
function six(){
    numOps.push(6);
    numOps=numOps.join('');
    numOps=[parseInt(numOps)];
    input.textContent=numOps;
    if(numOps > 9999999999 ){
        limit();
    }
    
    console.log(numOps);
}
function seven(){
    numOps.push(7);
    numOps=numOps.join('');
    numOps=[parseInt(numOps)];
    input.textContent=numOps;
    if(numOps > 9999999999 ){
        limit();
    }
    console.log(numOps);
}
function eight(){
    numOps.push(8);
    numOps=numOps.join('');
    numOps=[parseInt(numOps)];
    input.textContent=numOps;
    if(numOps > 9999999999 ){
        limit();
    }
    console.log(numOps);
}
function nine(){
    numOps.push(9);
    numOps=numOps.join('');
    numOps=[parseInt(numOps)];
    input.textContent=numOps;
    if(numOps > 9999999999 ){
        limit();
    }
    console.log(numOps);
}
function zero(){
    numOps.push(0);
    numOps=numOps.join('');
    numOps=[parseInt(numOps)];
    input.textContent=numOps;
    if(numOps > 9999999999 ){
        limit();
    }
    console.log(numOps);
}

function limit(){
    alert("Dont type such large numbers!")
    clear();
}

//function for operations
function addOps(){
    numOps.push("+");
    valueOps = numOps;
    displayOps.textContent=valueOps;
    console.log(numOps);
}
function subOps(){
    numOps.push("-");
    valueOps = numOps;
    displayOps.textContent=valueOps;
    console.log(numOps);
}
function multiplyOps(){
    numOps.push("*");
    valueOps = numOps;
    displayOps.textContent=valueOps;
    console.log(numOps);
}
function divOps(){
    numOps.push("/");
    valueOps = numOps;
    displayOps.textContent=valueOps;
    console.log(numOps);
}

