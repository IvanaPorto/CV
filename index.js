//*CALIDACION FORMULARIO DE CONTACTO*//

const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = " "
    if (nombre.value.length<=6) { 
        warnings += `El nombre debe contener al menos 6 caracteres <br>`
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if (mensaje.value.length<=6) { 
        warnings += `Debe introducir su mensaje <br>`
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }

} )  


//*SCROLL BUTTON-ARRIBA*/

document.getElementById("button-arriba").addEventListener("click", scrollUp);

function scrollUp(){
    var currentscroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentscroll > 0) {
        
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0,currentscroll - (currentscroll/7));

    }
}

buttonUp = document.getElementById("button-arriba");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;

    if (scroll > 200){
     buttonUp.style.transform = "scale(1)";
    } else if (scroll<200){
    buttonUp.style.transform = "scale(0)";
}
}