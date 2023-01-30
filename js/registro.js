let nombre = getElementById("nombreUsuario");
let form  = document.getElementById("formulario");

form.addEventListener("submit", function(e){
    let msjError = [];
    
    if (nombre.value === null || nombre.value === ""){
        msjError.push("Ingresa tu nombre");
    }
    console.log(msjError)
    error.innerHTML = msjError

    
})