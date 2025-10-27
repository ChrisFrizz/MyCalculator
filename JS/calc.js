let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
let result = document.getElementById("result");

//array di HTML Button Element
let allBtn = document.querySelectorAll("button");

allBtn.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", (event) =>{
        console.log(event.target);

        let a = parseFloat(val1.value);
        let b = parseFloat(val2.value);

        if(isNaN(a) || isNaN(b)){
            result.innerText = "Error: inserisci numeri validi";
            return;
        }

        let operation = event.target.attributes["operation"].value;
        
        let res = performOperation(a,b, operation);

        if (res instanceof Error){
            result.innerText = res.message;
        }
        else
            result.innerText = "Result: " + res;
    })
});


/**
 * Esegue operazione tra a e b
 * @param {*} a {number}
 * @param {*} b {number}
 * @param {*} operation operation to perform on a & b
 * @returns {number|Error}
 */

function performOperation(a, b, operation){
    switch(operation){
        case "+":
            return somma(a,b);
        case "-":
            return sottrazione(a,b);
        case "*":
            return multi(a,b);
        case "/":
            return dividi(a,b);
        case "%":
            return resto(a,b);
        default:
            return Error("Operazione non valida");
    }
}

function somma(a,b){
    return a+b;
}

function sottrazione(a,b){
    return a-b;
}

function multi(a,b){
    return a*b;
}

function dividi(a,b){
    return a/b;
}

function resto(a,b){
    return a%b;
}