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
let numOpsOne = '';
let numOpsTwo ='';
let valueOps = '';
let operatorChosen = '';

//display text update
function updateText(){
    if(operatorChosen.length == 0)
    input.textContent=numOpsOne;
    else
    input.textContent=numOpsTwo;
    displayOps.textContent=valueOps;
    console.log("numOne: "+numOpsOne);
    console.log("numTwo: "+numOpsTwo);
    console.log("operatorChosen: "+ operatorChosen);
}

//number btn events
numOne.addEventListener('click', function(){
    if(operatorChosen.length == 0)
numOpsOne += 1;
else{
    numOpsTwo +=1;
}
updateText();
});

numTwo.addEventListener('click', function(){
    if(operatorChosen.length == 0)
numOpsOne +=2;
else{
    numOpsTwo +=2;
}
updateText();
});

numThree.addEventListener('click', function(){
    if(operatorChosen.length == 0)
    numOpsOne +=3;
    else{
        numOpsTwo +=3;
    }
updateText();
});

numFour.addEventListener('click', function(){
    if(operatorChosen.length == 0)
    numOpsOne +=4;
    else{
        numOpsTwo +=4;
    }
updateText();
});

numFive.addEventListener('click', 
function(){
    if(operatorChosen.length == 0)
    numOpsOne +=5;
    else{
        numOpsTwo +=5;
    }
    updateText();
});
numSix.addEventListener('click', function(){
    if(operatorChosen.length == 0)
    numOpsOne +=6;
    else{
        numOpsTwo +=6;
    }
    updateText();
});
numSeven.addEventListener('click', function(){
    if(operatorChosen.length == 0)
    numOpsOne +=7;
    else{
        numOpsTwo +=7;
    }
    updateText();
});
numEight.addEventListener('click', function(){
    if(operatorChosen.length == 0)
    numOpsOne +=8;
    else{
        numOpsTwo +=8;
    }
    updateText();
});
numNine.addEventListener('click', function(){
    if(operatorChosen.length == 0)
    numOpsOne +=9;
    else{
        numOpsTwo +=9;
    }
    updateText();
});
numZero.addEventListener('click', function(){
    if(operatorChosen.length == 0)
    numOpsOne +=0;
    else{
        numOpsTwo +=0;
    }
    updateText();
});

//operation btn events
clearBtn.addEventListener('click',function(){
    numOpsOne='';
    numOpsTwo='';
    valueOps='';
    operatorChosen='';
    input.textContent=0;
});
equalBtn.addEventListener('click',function(){
    if(operatorChosen == '+'){
        let num1 = parseInt(numOpsOne);
        let num2 = parseInt(numOpsTwo);
        input.textContent = add(num1,num2);
    }
});
addBtn.addEventListener('click',function(){
    if(operatorChosen.length==0)
operatorChosen = '+';
else{
    operatorChosen = '';
    operatorChosen ='+';
}
    console.log(operatorChosen);
});
subBtn.addEventListener('click',function(){

});
multiplyBtn.addEventListener('click',function(){

});
divBtn.addEventListener('click',function(){
    
});