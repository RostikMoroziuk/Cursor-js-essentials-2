function addEvents() {
  var i; //counter in loop

  //Events for click on main buttons
  var mainButtons = document.querySelectorAll(".btn-main");
  for (i = 0; i < mainButtons.length; i++) {
    mainButtons[i].addEventListener("click", popUp);
  }

  //Events for calculation
  var performButtons = document.querySelectorAll(".btn-popup");
  var hideButton = document.querySelectorAll(".hide");
  for (i = 0; i < performButtons.length; i++) {
    switch (performButtons[i].getAttribute("data-f")) {
      case "sum1to3":
        performButtons[i].addEventListener("click", sum1to3);
        hideButton[i].addEventListener("click", hide)
        break;
      case "sum20to220":
        performButtons[i].addEventListener("click", sum20to220);
        hideButton[i].addEventListener("click", hide)
        break;
      case "evenNumbers":
        performButtons[i].addEventListener("click", evenNumbers);
        hideButton[i].addEventListener("click", hide)
        break;
      case "oddNumbers":
        performButtons[i].addEventListener("click", oddNumbers);
        hideButton[i].addEventListener("click", hide)
        break;
      case "bdNumber":
        performButtons[i].addEventListener("click", bdNumber);
        hideButton[i].addEventListener("click", hide)
        break;
      case "forToWhile":
        performButtons[i].addEventListener("click", forToWhile);
        hideButton[i].addEventListener("click", hide)
        break;
      case "promptUser":
        performButtons[i].addEventListener("click", promptUser);
        hideButton[i].addEventListener("click", hide)
        break;
      case "show":
        performButtons[i].addEventListener("click", show);
        hideButton[i].addEventListener("click", hide)
        break;
    }
  }
}

//PopUp Window
function popUp() {
  this.nextElementSibling.className += " active";
}

function hide() {
  this.parentElement.className = "popup";
}

//Sum all numbers from 1 to 3
function sum1to3() {
  sum(1, 3, this);
}

//Sum all numbers from 1 to 3
function sum20to220() {
  sum(20, 220, this);
}

//Summing
function sum(first, last, caller) {
  var sum, i;
  for (i = first, sum = 0; i <= last; sum += i, i++); //calculation

  //add animation
  addResult(caller.previousElementSibling, sum);
}

function evenNumbers() {
  var res1 = "",
    res2 = "",
    i;
  //calculation with continue
  for (i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      res1 = res1 + " " + i;
    } else {
      continue;
    }
  }

  //calculation without continue
  for (i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      res2 = res2 + " " + i;
    }
  }

  if (res1 === res2) {
    //add animation
    addResult(this.previousElementSibling, res1);
  } else {
    addResult(this.previousElementSibling, "Error");
  }
}

function oddNumbers() {
  var res = "",
    i = 10;
  while (i <= 30) {
    if (i % 2 === 1) {
      res = res + " " + i;
    }
    i++;
  }

  addResult(this.previousElementSibling, res);
}

function bdNumber() {
  var res = "",
    i, myBDMonth = 9;
  for (i = 1; i < myBDMonth; i++) {
    res = res + " " + i;
  }

  addResult(this.previousElementSibling, res);
}

function forToWhile() {
  var res = 'var i = 0;' + '\nwhile(i<5) {' +
    '\n' + 'console.log(`number ${i}  =)`);' +
    '\n' + 'i++;' +
    '\n' + '}';

  var i = 0;
  while (i < 5) {
    console.log(`number ${i}  =)`);
    i++;
  }

  //add animation
  this.previousElementSibling.previousElementSibling.innerHTML = '<div class="icon icon-order-success svg">\
  <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">\
  <g fill="none" stroke="#8EC343" stroke-width="5"><circle cx="36" cy="36" r="30" style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>\
  <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>\
  </g></svg></div>' + '\nExecution watch in console';

  //add pre code
  this.previousElementSibling.innerHTML = res;
}

function promptUser() {
  var enterData1, enterData2;
  enterData1 = prompt("Enter number greater then 100 (function use while)", 101);
  while (!+enterData1 || enterData1 < 101) {
    enterData1 = prompt("Enter number greater then 100 (function use while)", 101);
  }

  do {
    enterData2 = prompt("Enter number greater then 100 (function use while)", 101);
  } while (!+enterData2 || enterData2 < 101);

  addResult(this.previousElementSibling, enterData1 + " " + enterData2);
}

function show() {
  var char = "#", i, finish="########", res="";
  while(res!==finish) {
    res += char;
    console.log(res + "\n");
  }

  addResult(this.previousElementSibling, "Execution watch in consol");
}

//add animation and result
function addResult(node, result) {
  node.innerHTML = '<div class="icon icon-order-success svg">\
  <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">\
  <g fill="none" stroke="#8EC343" stroke-width="5"><circle cx="36" cy="36" r="30" style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>\
  <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>\
  </g></svg></div>' + result;
}

addEvents();
