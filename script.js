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
        spanElem.innerHTML = 
            `
            <span id="output" style="
                background-color: rgb(93,93,93);
                color: white;
                text-align: center;
                padding: 20px;
                font-size: 30px;
                margin: 0 auto;
                display: block;
                width: 475px;
                margin-bottom: 25px;
                border: 2px solid white;
                "
            >
                ${romanToArabic(parseInt(inputElem.value))}
            </span>
        `;
    }
};

const romanToArabic = (input) => {
    if (input >= 1000){
        return "M"+romanToArabic(input-1000);
    } else if (input >= 900){
        return "CM"+romanToArabic(input-900);
    } else if (input >= 500){
        return "D"+romanToArabic(input-500);
    } else if (input >= 400){
        return "CD"+romanToArabic(input-400);
    } else if (input >= 100){
        return "C"+romanToArabic(input-100);
    } else if (input >= 90){
        return "XC"+romanToArabic(input-90);
    } else if (input >= 50){
        return "L"+romanToArabic(input-50);
    } else if (input >= 40){
        return "XL"+romanToArabic(input-40);
    } else if (input >= 10){
        return "X"+romanToArabic(input-10);
    } else if (input >= 9){
        return "IX"+romanToArabic(input-9);
    } else if (input >= 5){
        return "V"+romanToArabic(input-5);
    } else if (input >= 4){
        return "IV"+romanToArabic(input-4);
    } else if (input >= 1){
        return "I"+romanToArabic(input-1);
    } else {
        return "";
    }
};

convertBtn.addEventListener("click", inputValue);