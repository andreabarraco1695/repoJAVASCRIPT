let x = myFunction(4,3);
let onoff = 0;

function myFunction(a,b){
    return a*b;
}

function myFunction2(){
    console.log(x);
    document.getElementById("demo").innerHTML = x;
    document.getElementById("buttonOk").style.display = 'inline-block';
}


