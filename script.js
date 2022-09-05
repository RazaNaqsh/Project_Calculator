
//global variables
let numOpsOne = '';
let numOpsTwo ='';
let operatorChosen = '';
let num1;
let num2;


//functions for operators
const add = function(...number) {
    let sum = 0;
    for (let i of number)
      sum += i;
    // return sum;
    if(sum.toString().length>12){
        return "Error!"
    }
    else
    return sum;
  }
const product = function(...number) {
    let product = 1;
    for (let i of number)
    product*= i;
    // return product;
    if(product.toString().length>12){
        return "Error!"
    }
    else
    return product;
  }
  const difference = function(...number) {
    let difference = number[0];
    for(let i=1;i<number.length;i++)
    difference -= number[i];
    // return difference;
    if(difference.toString().length>12){
        return "Error!"
    }
    else
    return difference;
  }
  const division = function(...number) {
    let divide = number[0];
    for(let i=1;i<number.length;i++)
     divide /= number[i];
    //  return divide;
    if(divide.toString().length>12){
        return "Error!"
    }
    else
    return divide;
  }
const operate = function(){
     num1 = parseFloat(numOpsOne);
    num2 = parseFloat(numOpsTwo);
    if(numOpsOne == "Error!" || numOpsTwo == "Error!")
    {
        allbtn.disable = true;
        clearBtn.disable=false;
        displayOps.textContent = "Press clear"
        
    }
    else{
     if(numOpsTwo == ''){
        equalBtn.disable = true;
    }
    else if(operatorChosen == '+'){
        numOpsOne= add(num1,num2);
        numOpsTwo = '';
        input.textContent= numOpsOne;
        displayOps.textContent=numOpsOne;
    }
    else if(operatorChosen == '-'){
        numOpsOne= difference(num1,num2);
        numOpsTwo = '';
        input.textContent= numOpsOne;
        displayOps.textContent=numOpsOne;
    }
    else if(operatorChosen == '*'){
        numOpsOne= product(num1,num2);
        numOpsTwo = '';
        input.textContent= numOpsOne;
        displayOps.textContent=numOpsOne;
    }
    else if(operatorChosen == '/'){
        numOpsOne= division(num1,num2);
        numOpsTwo = '';
        input.textContent= numOpsOne;
        displayOps.textContent=numOpsOne;
    }
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
const dotBtn = document.getElementById("dot")

//selectors dom elements
const input = document.querySelector('.inputText');
const displayOps = document.querySelector('.displayValue');

//allbtn
const allbtn = document.getElementsByTagName("button");


//display text update
function updateText(){
    if(numOpsOne.toString().length > 12 || numOpsTwo.toString().length > 12){
        clearError();
    }
    
    else if(operatorChosen.length == 0){
     input.textContent=numOpsOne;
    displayOps.textContent= numOpsOne;
    }
    
    else{
        displayOps.textContent=numOpsOne+operatorChosen+numOpsTwo;
        input.textContent=numOpsTwo;
    }
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
dotBtn.addEventListener('click', function(){
    if(operatorChosen.length == 0)
    numOpsOne +=".";
    else{
        numOpsTwo +=".";
    }
    updateText();
});

//operation btn events
clearBtn.addEventListener('click',clear);


//clear screen
function clear(){
    numOpsOne='';
    numOpsTwo='';
    valueOps='';
    operatorChosen='';
    input.textContent=0;
    displayOps.textContent=0;
}
function clearError(){
    allbtn.disable = true;
    clearBtn.disable=false;
    displayOps.textContent = "Press clear"
    input.textContent = "Error!"
}

//equal button
equalBtn.addEventListener('click',operate);



//basic operation btns

addBtn.addEventListener('click',function(){
    if(numOpsOne == "Error!" || numOpsTwo == "Error!"){
        clearError();
    }
    if(operatorChosen.length==0)
{
    operatorChosen = '+';
    updateText();
}
else{
    operate();
    updateText();
    numOpsTwo = '';
    operatorChosen = '';
    operatorChosen ='+';
}
updateText();
    console.log("numOne: "+numOpsOne);
    console.log("numtwo: "+numOpsTwo);
    console.log("operator :"+operatorChosen);
});
subBtn.addEventListener('click',function(){
    if(numOpsOne == "Error!" || numOpsTwo == "Error!"){
        clearError();
    }
    if(operatorChosen.length==0)
   { 
    operatorChosen = '-';
}
    else{
        operate();
        updateText();
        numOpsTwo = '';
        operatorChosen = '';
        operatorChosen ='-';
    }
    updateText();
        console.log(operatorChosen);
});
multiplyBtn.addEventListener('click',function(){
    if(numOpsOne == "Error!" || numOpsTwo == "Error!"){
        clearError();
    }
   if(operatorChosen.length==0)
    {
        operatorChosen = '*';
    }
    else{
        operate();
        updateText();
        numOpsTwo = '';
        operatorChosen = '';
        operatorChosen ='*';
    }
    updateText();
        console.log(numOpsOne);
        console.log(numOpsTwo);
        console.log(operatorChosen);
});
divBtn.addEventListener('click',function(){
    if(numOpsOne == "Error!" || numOpsTwo == "Error!"){
        clearError();
    }
    if(operatorChosen.length==0)
   { 
    operatorChosen = '/';
}
    else{
        operate();
        updateText();
        numOpsTwo = '';
        operatorChosen = '';
        operatorChosen ='/';
    }
    updateText();
        console.log(numOpsOne);
        console.log(numOpsTwo);
        console.log(operatorChosen);
});