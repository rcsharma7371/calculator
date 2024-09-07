let digit = document.querySelector(".digit");
let displayValue = document.querySelector("#display");

let calculateData = "";
let initialState = false;
let ttlValue = 0;
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
        if (ttlValue != 0) {
            calculateData = ttlValue;
            ttlValue = 0;
            displayValue.innerText = calculateData;
        }
        let inpValue = event.target.name;
        // console.dir(event.target.name);
        displayValue.innerText += inpValue;
        calculateData += inpValue;
    }
});

console.log(calculateData);

let equalTo = document.querySelector(".equal");
equalTo.addEventListener("click", (event) => {
    let finalValue = eval(calculateData);
    displayValue.innerText = finalValue;
    ttlValue = finalValue;
    calculateData = "";
    initialState = false;
});

let ac = document.querySelector("#AC");
ac.addEventListener("click", (event) => {
    displayValue.innerText = 0;
    calculateData = "";
    initialState = false;
    ttlValue = 0;
});

let del = document.querySelector("#DEL");
del.addEventListener("click", (event) => {
    updateDelete(calculateData);
    if (calculateData == undefined) {
        displayValue.innerText = 0;
    }
});
function updateDelete(str) {
    str = str.slice(0, -1);
    calculateData = str;
    if (calculateData == "") {
        displayValue.innerText = 0;
    }
    // console.log(str)
    displayValue.innerText = str;
}
