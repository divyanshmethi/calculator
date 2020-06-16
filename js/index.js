var operation = "";
var equalResult = false;
var firstOperand;

// function myKeyPress(e){
//     let keynum;
//
//     if(window.event) {
//       keynum = e.keyCode;
//     } else if(e.which){
//       keynum = e.which;
//     }
//     let arrNum = ["zero","one","two","three","four","five","six","seven","eight","nine"];
//     let arrChar = ["multiply","plus","","minus","","divide"];
//     if(keynum <= 48 && keynum >= 57)
//     {
//       readNumber(arrNum[keynum-48]);
//     }
//     else if(keynum==61){
//       performOperation();
//     }
//     else if(keynum==42 || keynum==43 || keynum==45 || keynum==47){
//       readChar(arrChar[keynum-42]);
//     }
//     else {
//     }
//   }

function performOperation(){
  let secondOperand = parseInt(document.getElementById("inputValue").value);
  console.log(firstOperand);
  console.log(secondOperand);
  let res = "";
  switch (operation) {
      case "plus":
        res += firstOperand + secondOperand;
        break;
      case "minus":
        res += firstOperand - secondOperand;
        break;
      case "multiply":
        res += firstOperand * secondOperand;
        break;
      case "divide":
        res += firstOperand / secondOperand;
        break;
      default:
        res = "0";
        break;
    }
  document.getElementById("inputValue").value = res;
  equalResult = true;
}

function clearNumber()
{
  let inputValue = document.getElementById("inputValue").value;
  console.log(inputValue);
  let res;
  if(inputValue.length <= 1)
  {
    res = "0";
  }
  else {
    res = inputValue.substring(0,inputValue.length - 1);
  }
  document.getElementById("inputValue").value = res;
}

function readNumber(eleName){
    let inputValue = document.getElementById("inputValue").value;
    let num;
    switch (eleName) {
      case "one":
        num = 1;
        break;
      case "two":
        num = 2;
        break;
      case "three":
        num = 3;
        break;
      case "four":
        num = 4;
        break;
      case "five":
        num = 5;
        break;
      case "six":
        num = 6;
        break;
      case "seven":
        num = 7;
        break;
      case "eight":
        num = 8;
        break;
      case "nine":
        num = 9;
        break;
      default:
        num = 0;
        break;
    }
    if(equalResult)
    {
      inputValue = "" + num;
      equalResult = false;
    }
    else {
      if(inputValue==="0")
      {
        inputValue = "" + num;
      }
      else {
        inputValue += num;
      }
    }
    document.getElementById("inputValue").value = inputValue;
}

function readChar(oper){
    operation = oper;
    firstOperand = parseInt(document.getElementById("inputValue").value);
    document.getElementById("inputValue").value = "0";
}
