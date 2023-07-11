function myFunctionInnerHTML(){
    /*Scrivo dentro un ELEMENTO HTML*/
    document.getElementById("demo").innerHTML = 5 + 6;
}

function myFunctionDocument(){
    /*Scrivo su un nuovo documento, il quale cancellerà gli elementi HTML fino ad allora presenti*/
    document.write(5+6);
}

function myFunctionAlert(){
    /*Scrivo su un popup che appararirà quando verrà richiamato*/

    /*window.alert(5+6);*/
    alert(5+6);
}

function myFunctionLog(){
    /*Usato per il debugging, non viene mostrato nulla a video ma solo in "console"*/
    console.log(5+6);
}