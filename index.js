const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//const boton = document.querySelector(".boton");

function btnEncriptar(){
    
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    if (mensaje.value != ""){
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        textodos.style.display = "none";
        textotres.style.display = "none";
    }   
    else{
        mensaje.style.backgroundImage = "";
        textodos.style.display = "";
        textotres.style.display = "";        
    }
}
    


function encriptar(stringEncriptada){
let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
stringEncriptada = stringEncriptada.toLowerCase()

for (let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){

    const stringDesencriptado = desencriptar(textArea.value)
    mensaje.value = stringDesencriptado;
    if (mensaje.value != ""){
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        textodos.style.display = "none";
        textotres.style.display = "none";
    } 
    else{
        mensaje.style.backgroundImage = "";
        textodos.style.display = "";
        textotres.style.display = "";        
    }
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
        return stringDesencriptada
    }


function btnCopiar(){
   
    const textoCopiado  = document.querySelector(".cuadroDeResultado");
    textoCopiado.focus();
        
        navigator.clipboard.writeText(textoCopiado.value);
     
}
     