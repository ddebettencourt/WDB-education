
let output = "0";

function makeClickable(){
    const buttonList = document.querySelectorAll("button");
    buttonList.forEach((item) => item.addEventListener("click", () => clickButton(item.innerText)));
}

makeClickable()

function clickButton(text){
    if (text === "C"){
        output = 0;
    }
    else if (text === "←"){
        if (output.length > 1){
            output = output.slice(0, -1);
        } else {
            output = 0;
        }
    } else if (text === "="){
        output = eval(output);
    } else if (text === "×"){
        output = output + "*";
    } else if (text === "÷"){
        output = output + "/";
    }
    else if (parseInt(output) === 0){
        output = text;
    } else {
        output = output + text;
    }
    outputHTML = document.getElementById("output");
    outputHTML.innerText = output;
}