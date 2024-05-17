//Calculator

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    //check for division by zero
    if(display.value.includes('/0')){
        display.value = "Error!";
        return;
    }

    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error!";
    }
}