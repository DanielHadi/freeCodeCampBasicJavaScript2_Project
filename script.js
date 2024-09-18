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
        spanElem.innerHTML = 
            `
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
                Please enter a number greater than or equal to 1.
            </span>
        `;
    } else if (parseInt(inputElem.value) >= 4000){
        spanElem.innerHTML = 
            `
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
                Please enter a number less than or equal to 3999.
            </span>
        `;
    } else {
        
    }
};

const romanToArabic = (input) => {
    if (input >= 1){
        return "I";
    } else if (input > 4){
        return "IV";
    } else if (input > 5){
        return "V";
    } else if (input > 9){
        return "IX";
    } else if (input > 10){
        return "X";
    } else if (input > 40){
        return "XL";
    } else if (input > 50){
        return "L";
    } else if (input > 90){
        return "XC";
    }
};

convertBtn.addEventListener("click", inputValue);