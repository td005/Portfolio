const currentDisplay = document.getElementById("current");
const previousDisplay = document.getElementById("previous");

let current = "";
let previous = "";
let operation = null;


const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operation]");
const actions = document.querySelectorAll("[data-action]");


numbers.forEach(button => {

    button.addEventListener("click", () => {

        addNumber(button.innerText);

    });

});


operators.forEach(button => {

    button.addEventListener("click", () => {

        chooseOperation(button.dataset.operation);

    });

});


actions.forEach(button => {

    button.addEventListener("click", () => {

        handleAction(button.dataset.action);

    });

});


function addNumber(number){

    if(number === "." && current.includes(".")) return;

    current += number;

    updateDisplay();

}


function chooseOperation(op){

    if(current === "") return;

    if(previous !== ""){
        calculate();
    }

    operation = op;

    previous = current;

    current = "";

}


function calculate(){

    let result;

    let prev = Number(previous);
    let curr = Number(current);


    switch(operation){

        case "+":
            result = prev + curr;
            break;

        case "-":
            result = prev - curr;
            break;

        case "*":
            result = prev * curr;
            break;

        case "/":
            result = curr === 0 ? "Error" : prev / curr;
            break;

        case "%":
            result = prev % curr;
            break;

    }


    current = result;

    previous = "";

    operation = null;

}


function handleAction(action){

    if(action === "clear"){

        current="";
        previous="";
        operation=null;

    }


    if(action==="delete"){

        current=current.slice(0,-1);

    }


    if(action==="equals"){

        if(previous && current){

            calculate();

        }

    }


    updateDisplay();

}



function updateDisplay(){

    currentDisplay.innerText = current || "0";

    previousDisplay.innerText =
        previous && operation
        ? `${previous} ${operation}`
        : "";

}


// Keyboard Support

document.addEventListener("keydown", e=>{

    if(!isNaN(e.key)){

        addNumber(e.key);

    }


    if(["+","-","*","/","%"].includes(e.key)){

        chooseOperation(e.key);

    }


    if(e.key==="Enter"){

        handleAction("equals");

    }


    if(e.key==="Backspace"){

        handleAction("delete");

    }


    if(e.key==="Escape"){

        handleAction("clear");

    }

});
