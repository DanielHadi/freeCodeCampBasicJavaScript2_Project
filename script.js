const inputElem = document.getElementById("number");
const spanElem = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

const inputValue = () => {
    console.log(inputElem.value);
    if (inputElem.value === ""){
        spanElem.innerText = "Please enter a valid number";
    } else if (parseInt(inputElem.value) < 0){
        spanElem.innerText = "Please enter a number greater than or equal to 1";
    }
};

convertBtn.addEventListener("click", inputValue);