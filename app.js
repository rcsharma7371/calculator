// Code to track mouse and its click

let digit = document.querySelector(".digit");
let displayValue = document.querySelector("#display");

let data = "";
let initialState = false;
let prevAns = 0;
digit.addEventListener("click", (event) => {
    // console.dir(event.target);
    if (
        event.target.className == "inpData" ||
        event.target.classList[1] == "inpData"
    ) {
        if (!initialState) {
            displayValue.innerText = "";
            initialState = true;
        }
        if (prevAns != 0) {
            data = prevAns;
            prevAns=0;
            displayValue.innerText = data;
        }
        let inpValue = event.target.name;
        // console.dir(event.target.name);
        displayValue.innerText += inpValue;
        data += inpValue;
    }
});

console.log(data);

let equalTo = document.querySelector(".equal");
equalTo.addEventListener("click", (event) => {
    calculate(data);
});

let ac = document.querySelector("#AC");
ac.addEventListener("click", (event) => {
    clearData();
});

let del = document.querySelector("#DEL");
del.addEventListener("click", (event) => {
    updateDelete(data);
});




//Code to track keyboard keys 
const operators = ["+", "-", "*", "/", "%", "=", "."];

//Event listener to track pressed key
window.addEventListener("keydown", (event) => {
  if (operators.includes(event.key) || (event.key >= "0" && event.key <= "9")) {
    // console.dir(typeof event.key);
    if (!initialState) {
      displayValue.innerText = "";
      initialState = true;
    }
    if (prevAns != 0) {
      if (operators.includes(event.key)) {
        data = prevAns;
        prevAns=0;
        displayValue.innerText = data;
      }
    }
    let inpValue = event.key;
    // console.dir(event.target.name);
    displayValue.innerText += inpValue;
    data += inpValue;
  }

  if (event.key == "Enter") {
    calculate(data);
    data = "";
  }
  if (event.key == "Escape") {
    clearData();
  }

  if (event.key == "Backspace") {
    updateDelete(data);
  }
});

let calculate = (str) => {
  if (str == "") {
    displayValue.innerText = 0;
  } else {
    let res = eval(str);
    displayValue.innerText = res;
    prevAns = res;
    console.log(prevAns);
    initialState=false;
  }
};

function clearData(){
    data = "";
    displayValue.innerText = "0";
    prevAns=0;
    initialState = false;
}

function updateDelete(str) {
  if (data == "") {
    displayValue.innerText = "0";
  } else {
    str = str.slice(0, -1);
    data = str;
    displayValue.innerText = str;
    prevAns=0;
  }
}


