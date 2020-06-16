var equalResult = true;
var exp = "";

function keyPress(e)
{
  if(equalResult==false)
  {
    document.getElementById("inputValue").value = "";
    equalResult = true;
  }
  else
  {
    let code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { //Enter keycode
      performOperation();
    }
  }
}

function performOperation(){
  exp = document.getElementById("inputValue").value;
  let expVal = eval(exp);
  document.getElementById("inputValue").value = expVal;
  exp = expVal;
  equalResult = false;
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
    if(equalResult === false)
    {
      equalResult = true;
      exp = "" + eleName;
    }
    else {
      exp += eleName;
    }
    document.getElementById("inputValue").value = exp;
}

function readChar(oper){
    exp += oper;
    document.getElementById("inputValue").value = exp;
}
