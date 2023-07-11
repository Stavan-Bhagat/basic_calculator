function show(value){
document.getElementById("answer").value += value;
}

function solve(){
var x=document.getElementById("answer").value;
let y =eval(x);
document.getElementById("answer").value = y ;
}

function clearoutput(){
    document.getElementById("answer").value = "";
}