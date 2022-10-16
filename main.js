const calcontainer = document.querySelector(".btncontainers");
const displayscreen = document.querySelector(".resultscreen");
const prevScreen = document.querySelector(".prevScreen");



var firstnum;
var secondnum;
var result = 0;
var secondNumArray;
var oper;
var answer = 0;
temparray = [];
prevArray = [];
onscreenarray = [];
var opIndex = 0;

//-----------Create 16 buttons----------//
for (let i = 0; i < 16; i++) {
  const btns = document.createElement("Button");
  btns.classList.add("btn" + i);
  calcontainer.appendChild(btns);
}

//-----------Labeling all buttons-----------//
const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn10 = document.querySelector(".btn10");
const btn11 = document.querySelector(".btn11");
const btn12 = document.querySelector(".btn12");
const btn13 = document.querySelector(".btn13");
const btn14 = document.querySelector(".btn14");
const btn15 = document.querySelector(".btn15");
const clearbtn = document.querySelector(".clearbtn");
const delbtn = document.querySelector(".delbtn");

btn0.textContent = "7";
btn1.textContent = "8";
btn2.textContent = "9";
btn3.textContent = "÷";
btn4.textContent = "4";
btn5.textContent = "5";
btn6.textContent = "6";
btn7.textContent = "*";
btn8.textContent = "1";
btn9.textContent = "2";
btn10.textContent = "3";
btn11.textContent = "-";
btn12.textContent = ".";
btn13.textContent = "0";
btn14.textContent = "=";
btn15.textContent = "+";
let allbtns = document.querySelectorAll("button");

//-----------add event listener to all buttons----------//
for (i of allbtns) {
  i.addEventListener("click", function () {
    temparray.push(this.textContent);
    onscreenarray.push(this.textContent);
    displayscreen.textContent = temparray.join("");
    console.log(onscreenarray)
    
  });
}

//-----------Add button----------//

  btn15.addEventListener("click", function () {

    
    oper = "+";
    
    firstnum = parseInt(temparray.map(Number).join(""));
    if (result > 0) {
      firstnum = result;
      return result;
    }
    result += firstnum;
  
  });

//-----------Subtract button----------//
btn11.addEventListener("click", function () {
  
  oper = "-";
 
  firstnum = parseInt(temparray.map(Number).join(""));
  if (result > 0) {
    
    firstnum = result;
    return result;
  }
  result += firstnum;
});

//-----------Multiply button----------//
btn7.addEventListener("click", function () {
  oper = "*";
  console.log('this onscreenarray ' + onscreenarray)
  
  displayscreen.textContent = operate(oper, firstnum, secondnum)
  if (onscreenarray[1] == oper) {
    firstnum = parseInt(temparray.map(Number).join(""));
    secondNumArray = temparray.slice(operIndex, temparray.length - 1);
    secondnum = parseInt(secondNumArray.join(""));
    displayscreen.textContent = operate(oper,firstnum,secondnum)
  }
  if (answer == 0) {
    oper = "*";
    firstnum = parseInt(temparray.map(Number).join(""));
    prev = [...temparray];
  
    var operIndex = temparray.indexOf(oper) + 1;
    secondNumArray = temparray.slice(operIndex, temparray.length - 1);
    secondnum = parseInt(secondNumArray.join(""));
    result = operate(oper, firstnum, secondnum);
    console.log(prev)
    prevScreen.textContent = prev.join('')
    temparray = [];
    displayscreen.textContent = ''
    result += firstnum;
  }
  else if (answer == result){
    prevScreen.textContent = answer;
    displayscreen.textContent = answer + '  ' + ' * '
    firstnum = answer;
    var operIndex = temparray.indexOf(oper) + 1;
    secondNumArray = temparray.slice(operIndex, temparray.length - 1);
    secondnum = parseInt(secondNumArray.join(""));
    
  }

 
});

//-----------divide button----------//
btn3.addEventListener("click", function () {
  oper = "÷";
  firstnum = parseInt(temparray.map(Number).join(""));
  if (result > 0) {
    
    firstnum = result;
    
    return result;
  }
  result += firstnum;
});

//-----------clearbutton button----------//
clearbtn.addEventListener("click", function () {
  temparray = [];
  prev = [];
  result = 0;
  prevScreen.textContent = "";
  displayscreen.textContent = "";
});
function deleteNum() {
  temparray.pop();
  temparray.pop();

}

//-----------delete button button----------//
delbtn.addEventListener("click", function () {
  deleteNum();
  displayscreen.textContent = temparray.join("");
});

//-----------equal button button----------//
function findAdd() {
  btn14.addEventListener("click", function () {
    
    var operIndex = temparray.indexOf(oper) + 1;
    secondNumArray = temparray.slice(operIndex, temparray.length - 1);
    secondnum = parseInt(secondNumArray.join(""));
    console.log("firstnum: " + firstnum);
    console.log("secondnum: " + secondnum);
    if (secondnum === NaN) {
      
      displayscreen.textContent = 'wrong'
      return
    }
    result += secondnum;
    result = operate(oper, firstnum, secondnum);
    displayscreen.textContent = result;
    prevScreen.textContent = prev.join(' ') + ' ' + temparray.join(' ') + ' ' + result
    
    firstnum = result;
    answer = result;
    prev = [];
    temparray = [];
    onscreenarray = [];
    temparray.push(firstnum);
    
    return
  });
}

//-----------operate----------//
findAdd();
function operate(op, num1, num2) {
  if (op === "+") {
    return add(num1, num2);
  } else if (op === "-") {
    return subtract(num1, num2);
  } else if (op === "*") {
    return multiply(num1, num2);
  } else if (op === "÷") {
    return divide(num1, num2);
  }
}

//-----------Add Function----------//
function add(num1, num2) {
  return num1 + num2;
}

//-----------Subtract Function----------//
function subtract(num1, num2) {
  return num1 - num2;
}

//-----------Multiply Function----------//
function multiply(num1, num2) {
  return num1 * num2;
}

//-----------Divide Function----------//
function divide(num1, num2) {
  return num1 / num2;
}
//-----------count op----------//
function opCount() {
  let gotop = temparray.includes(oper);
  console.log(gotop)
}

//listen to all keyboard events
document.addEventListener(
  "keydown",
  (event) => {
    var name = event.key;
    var code = event.code;
    if (name == "Backspace") {
      deleteNum();
    }
    madenum = parseInt(temparray.push(name));
    displayscreen.textContent = temparray.join("");
   
    // Alert the key name and key code on keydown
    console.log(`Key pressed ${name} \r Key code value: ${code}`);
  },
  false
);

