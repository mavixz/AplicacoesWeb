
function Click() {
    let Valor01 = document.getElementById('valor01').value;
    let Valor02 = document.getElementById('valor02').value;

    let resultado =  parseInt(Valor01) + parseInt(Valor02);
    
    document.getElementById('Resultado').innerHTML = resultado;
}

function Multi() {
    let Valor01 = document.getElementById('valor01').value;
    let Valor02 = document.getElementById('valor02').value;

    let resultado =  parseInt(Valor01) * parseInt(Valor02);
    
    document.getElementById('Resultado').innerHTML = resultado;
}