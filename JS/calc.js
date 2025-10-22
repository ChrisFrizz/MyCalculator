let result = 0;

//array di HTML Button Element
let allBtn = document.querySelectorAll("button");

allBtn.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", (event) =>{
        console.log(event.target);        
    })    
});



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