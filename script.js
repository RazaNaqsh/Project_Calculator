//functions for operators
const add = function(...number) {
    let sum = 0;
    for (let i of number)
      sum += i;
    return sum;
  }
const product = function(...number) {
    let product = 1;
    for (let i of number)
    product*= i;
    return product;
  }
  const difference = function(...number) {
    let difference = number[0];
    for(let i=1;i<number.length;i++)
    difference -= number[i];
    return difference;
  }
  const division = function(...number) {
    let divide = number[0];
    for(let i=1;i<number.length;i++)
     divide /= number[i];
     return divide;
  }
const operate = function(){
    // let opt = prompt("Enter operator to perform calculation on numbers(Only +,-,*,/)");
 
    if(opt=="+")   
     return console.log(add(...num));
    else if(opt == "-")
        return console.log(difference(...num));
    else if(opt == '*')
        return console.log(product(...num));
    else if(opt == '/')
        return console.log(division(...num));
    else {
        alert("Wrong input!");
        operate();
    }
}
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
let numOps = '';
let valueOps = '';

//display text update
function updateText(){
    input.textContent=numOps;
    console.log(numOps);
}

//number btn events
numOne.addEventListener('click', function(){
numOps += 1;
updateText();
});

numTwo.addEventListener('click', function(){
numOps +=2;
updateText();
});

numThree.addEventListener('click', function(){
numOps +=3;
updateText();
});

numFour.addEventListener('click', function(){
numOps +=4;
updateText();
});

numFive.addEventListener('click', 
function(){
    numOps +=5;
    updateText();
});
numSix.addEventListener('click', function(){
    numOps +=6;
    updateText();
});
numSeven.addEventListener('click', function(){
    numOps +=7;
    updateText();
});
numEight.addEventListener('click', function(){
    numOps +=8;
    updateText();
});
numNine.addEventListener('click', function(){
    numOps +=9;
    updateText();
});
numZero.addEventListener('click', function(){
    numOps +=0;
    updateText();
});

//operation btn events
clearBtn.addEventListener('click',function(){
    numOps=[];
    input.textContent=0;
});
equalBtn.addEventListener('click',equal);
addBtn.addEventListener('click',function(){

});
subBtn.addEventListener('click',function(){

});
multiplyBtn.addEventListener('click',function(){

});
divBtn.addEventListener('click',function(){
    
});