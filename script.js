const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");

copia.style.display = "none";

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let condicional = textoEscrito.match(/^[a-z]*$/);

    if(!condicional || condicional === 0){
        alert("Solo son permitidos letras minusculas y sin acentos");
        location.reload();
        return true;
    }
}

function encriptar (){
    

}