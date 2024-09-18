const inputElem = document.getElementById("number");
const spanElem = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

const inputValue = () => {
    console.log(inputElem.value);
    if (inputElem.value === ""){
        spanElem.innerHTML = `
            <span id="output" style="
                background-color: pink;
                color: rgb(189, 55, 55);
                text-align: center;
                padding: 20px;
                font-size: 30px;
                margin: 0 auto;
                display: block;
                width: 475px;
                margin-bottom: 25px;
                border: 2px solid red;
                "
            >
                Please enter a valid number.
            </span>
        `;
    } else if (parseInt(inputElem.value) < 0){
        spanElem.innerText = "Please enter a number greater than or equal to 1";
    } else if (parseInt(inputElem.value) >= 4000){
        spanElem.innerText = "Please enter a number less than or equal to 3999";
    }
};

convertBtn.addEventListener("click", inputValue);