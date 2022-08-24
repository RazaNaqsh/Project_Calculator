//gonna add life to the calc here

// pseudocode
// 1-create individual functions for add sub multiply and div test them in console
// 2- Create a function that takes in an operator and 2 number then call one of above function on numbers.. use  console first to check
// 3- Add a clear button
// 4- a function that show on display when click number button. store the display value in a variable to use for next step
// store the first number user click then save which operation is selected then operate on them when user clicks = key.

// lets create individual function

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
    console.log(num);
    if(opt=="+"){
        return add(...num);
    }
    else if(opt == "-"){
        return difference(...num);
    }
    else if(opt == '*'){
        return product(...num);
    }
    else if(opt == '/'){
        return division(...num);
    }
    else {
        alert("Wrong input!");
        operator();
    }
}
  operator();

  