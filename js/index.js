var operation = "";
var equalResult = false;
var firstOperand;

function myKeyPress(e){
    var keynum;

    if(window.event) {
      keynum = e.keyCode;
    } else if(e.which){
      keynum = e.which;
    }

    alert(String.fromCharCode(keynum));
  }

document.getElementById("equals").addEventListener('click',function(){
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
});

let elements = document.getElementsByClassName("digits");
for(let i = 0;i<elements.length;i++)
{
  elements[i].addEventListener('click',function(){
    let inputValue = document.getElementById("inputValue").value;
    let num;
    switch (this.name) {
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
  });
}

let operators = document.getElementsByClassName("operators");
for(let i = 0;i<operators.length;i++)
{
  operators[i].addEventListener('click',function(){
    operation = this.name;
    firstOperand = parseInt(document.getElementById("inputValue").value);
    document.getElementById("inputValue").value = "0";
  });
}
