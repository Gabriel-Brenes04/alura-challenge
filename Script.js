document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("texto1");
    input.addEventListener("input", codeValue);
    let texto = document.getElementById("texto2");

    function codeValue(e) {
      let inputValue = e.srcElement.value;
  
      const specialChars = /[^a-z0-9\s]/i;
      const upperCaseChars = /[A-Z]/;
      
      if (specialChars.test(inputValue) || upperCaseChars.test(inputValue)) {
        alert("No se permite el uso de caracteres especiales ni mayúsculas.");

        inputValue = inputValue.replace(specialChars, '');
        input.value = input.value.replace(specialChars, "")
        inputValue = inputValue.replace(upperCaseChars, '');
        input.value = input.value.replace(upperCaseChars, "")
        return;
      }
      
      // Convertir a minúsculas
  
      let replacedValue = inputValue;


      if (inputValue.includes("e")) {
        replacedValue = replacedValue.replace(/e/g, "enter");
      }
      if (inputValue.includes("i")) {
        replacedValue = replacedValue.replace(/i/g, "imes");
      }
      if (inputValue.includes("a")) {
        replacedValue = replacedValue.replace(/a/g, "ai");
      }
      if (inputValue.includes("o")) {
        replacedValue = replacedValue.replace(/o/g, "ober");
      }
      if (inputValue.includes("u")) {
        replacedValue = replacedValue.replace(/u/g, "ufat");
      }


      texto.value = replacedValue;
    }
    }
  );
  document.addEventListener("DOMContentLoaded", function() {
    let texto = document.getElementById("texto2");
    texto.addEventListener("input", decodeValue);
    const input = document.getElementById("texto1");

  function decodeValue(e) {
    
    let inputValue = e.srcElement.value;

    const specialChars = /[^a-z0-9\s]/i;
    const upperCaseChars = /[A-Z]/;
    
    if (specialChars.test(inputValue) || upperCaseChars.test(inputValue)) {
      alert("No se permite el uso de caracteres especiales ni mayúsculas.");

      inputValue = inputValue.replace(specialChars, '');
      texto.value = texto.value.replace(specialChars, "")
      inputValue = inputValue.replace(upperCaseChars, '');
      texto.value = texto.value.replace(upperCaseChars, "")
      return;
    }

    let replacedValue = inputValue;
  

    if (inputValue.includes("enter")) {
      replacedValue = replacedValue.replace(/enter/g, "e");
    }
    if (inputValue.includes("imes")) {
      replacedValue = replacedValue.replace(/imes/g, "i");
    }
    if (inputValue.includes("ai")) {
      replacedValue = replacedValue.replace(/ai/g, "a");
    }
    if (inputValue.includes("ober")) {
      replacedValue = replacedValue.replace(/ober/g, "o");
    }
    if (inputValue.includes("ufat")) {
      replacedValue = replacedValue.replace(/ufat/g, "u");
    }


    input.value = replacedValue;
  }
}
);

document.addEventListener("DOMContentLoaded", (event) => {
  let boton = document.getElementById("boton");
  let copy = document.getElementById("copiar");
  let texto1 = document.getElementById("texto1");
  let texto2 = document.getElementById("texto2");

  boton.addEventListener("click", (event) => {
    if(texto2.disabled == true){
      texto2.disabled = false;
      texto1.disabled = true;

      texto2.placeholder= "Desecripta tu texto"
      texto1.placeholder= "";
      boton.value = "Encriptar";

    }else{
      texto2.disabled = true;
      texto1.disabled = false;

      texto2.placeholder= ""
      texto1.placeholder= "Encripta tu texto"
      boton.value = "Desencriptar";
    }

  texto1.value = ""
  texto2.value = ""

  });

  copy.addEventListener("click", (event) => {

    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
     alert("Le has dado permiso a tu portapapeles");
      }else{
        alert("Intenta de nuevo mas tarde");
      }
    });
    
    let copyText;

    if(texto2.disabled == true){
 
    copyText = texto2.value

    }else{
      copyText = texto1.value
    }
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert("Texto copiado");

  }
)}
);

