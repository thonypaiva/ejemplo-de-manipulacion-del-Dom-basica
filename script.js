const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')

form.addEventListener('submit', sumarInputsValue );

function sumarInputsValue(event){

    event.preventDefault();
    const sumaImputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaImputs;
}