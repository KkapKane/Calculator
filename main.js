const calcontainer = document.querySelector('.btncontainers');
const displayscreen = document.querySelector('.resultscreen');
var firstnum;
var secondnum;
var result = 0;
var secondNumArray;
var oper;

//-----------Create 16 buttons----------//
for (let i = 0; i < 16; i++)
{
    const btns = document.createElement('button');

    btns.classList.add('btn' + i);
    calcontainer.appendChild(btns);
}


//-----------Labeling all buttons-----------//
const btn0 = document.querySelector('.btn0');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const btn8 = document.querySelector('.btn8');
const btn9 = document.querySelector('.btn9');
const btn10 = document.querySelector('.btn10');
const btn11 = document.querySelector('.btn11');
const btn12 = document.querySelector('.btn12');
const btn13 = document.querySelector('.btn13');
const btn14 = document.querySelector('.btn14');
const btn15 = document.querySelector('.btn15');

btn0.textContent = "7"
btn1.textContent = "8"
btn2.textContent = "9"
btn3.textContent = "÷"
btn4.textContent = "4"
btn5.textContent = "5"
btn6.textContent = "6"
btn7.textContent = "x"
btn8.textContent = "1"
btn9.textContent = "2"
btn10.textContent = "3"
btn11.textContent = "-"
btn12.textContent = "."
btn13.textContent = "0"
btn14.textContent = "="
btn15.textContent = "+"

let allbtns = document.querySelectorAll('button');
temparray = [];

var opIndex = 0;

//-----------add event listener to all buttons----------//
for (i of allbtns){
    i.addEventListener('click', function(){
        
        temparray.push(this.textContent)
        displayscreen.textContent = temparray.join('')
        
      
        
        
    })
    
}
//-----------Add numbers that are before the operator to firstnum array----------//

btn15.addEventListener('click', function(){
   oper = '+' 
  firstnum = parseInt(temparray.map(Number).join(''));
    
  result += firstnum;
  
    
    
});

btn11.addEventListener('click', function(){
    oper = '-'
    firstnum = parseInt(temparray.map(Number).join(''));
    
    result += firstnum;
    
});

btn7.addEventListener('click', function(){
    oper = '*'
    firstnum = parseInt(temparray.map(Number).join(''));
    
    result += firstnum;
  
    
});

btn3.addEventListener('click', function(){
    oper = '÷'
    firstnum = parseInt(temparray.map(Number).join(''));
   
    result += firstnum;
    
});


findAdd()



function findAdd(){
btn14.addEventListener('click', function(){

    var operIndex = temparray.indexOf(oper) + 1;

    result += secondnum;
    
    secondNumArray = temparray.slice(operIndex,temparray.length-1);
    secondnum = parseInt(secondNumArray.map(Number).join(''));
    console.log(firstnum)
    console.log(secondnum)
    displayscreen.textContent = operate(oper,firstnum,secondnum)
    
     /* result += secondnum;
    if ( oper === '+'){
        console.log('this is plus')
        console.log(oper)
        secondNumArray = temparray.slice(operIndex,temparray.length-1);
        secondnum = parseInt(secondNumArray.map(Number).join(''));
        console.log(add(firstnum,secondnum))
        displayscreen.textContent = add(firstnum,secondnum)
    }
    
   if (oper === '-'){
        console.log('this is minus')
        console.log(oper)
        secondNumArray = temparray.slice(operIndex,temparray.length-1);
        secondnum = parseInt(secondNumArray.map(Number).join(''));
        console.log(subtract(firstnum,secondnum))
        displayscreen.textContent = subtract(firstnum,secondnum)
    }
     */
    
   
    console.log(secondnum)
   
    
    

    
    
   
})
}






function operate(op,num1,num2){
    if( op === '+'){
        return add(num1,num2)
    }
    else if (op === '-'){
        return subtract(num1,num2)
    }
    else if (op === '*'){
        return multiply(num1,num2)
    }
    else if (op === '÷'){
        return divide(num1,num2)
    }
}








function add(num1,num2){
    return num1 + num2
}

function subtract(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1 * num2
}

function divide(num1,num2){
    return num1 / num2
}

