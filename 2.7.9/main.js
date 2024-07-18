
function logar(){

    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    if(campoA < campoB ){
        alert("Muito bem!");
    } else {
        alert("Campo B precisa ser maior que campo A!");
    }

}
