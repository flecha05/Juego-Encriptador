const inputText = document.querySelector(".input-texto");
const mensajee = document.querySelector(".msj");
const btnC = document.querySelector(".copiar");
btnCopy.style.display = "none"////////////////
//ENCRIPTAR

 function btnE(){
     const textE = encriptar(inputText.value);
     mensajee.value=textE;
     mensaje.style.backgroundImage="none"////////////
     inputText.value="";
     btnCopy.style.display = "block"
 }
 function encriptar(stringEncriptada){
    var matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],];
    stringEncriptada=stringEncriptada.toLowerCase();
    for(var i=0; i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
   }
   return stringEncriptada;
}
//DESENCRIPTAR
   function btnD(){
    const textE = desencriptar(inputText.value);
    mensajee.value=textE;
    inputText.value="";
}
function desencriptar(stringDesncriptada){
    var matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],];
    stringDesncriptada=stringDesncriptada.toLowerCase();
    for(var i=0; i<matrizCodigo.length;i++){
        if(stringDesncriptada.includes(matrizCodigo[i][1])){
            stringDesncriptada=stringDesncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
   }
   return stringDesncriptada;
}
  //COPIAR
  function copy(){
    mensajee.select();
    navigator.clipboard.writeText(mensajee.value);
    mensajee.value="";
    alert("Texto Copiado")
}
