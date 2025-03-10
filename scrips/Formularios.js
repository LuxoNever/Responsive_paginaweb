const name = document.getElementById("name")
const email = document.getElementById("Email")
const write = document.getElementById("Write")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=>{

    e.preventDefault()

    let warnings = ""
    let regexEmail = /^[^\W_]+\w*(?:[.-]\w*)*[^\W_]+@[^\W_]+(?:[.-]?\w*[^\W_]+)*(?:\.[^\W_]{2,3})$/
    let entrar= false
    parrafo.innerHTML=""
    if (name.value.length > 10) {

        warnings+= `El nombre no es valido <br>`
        entrar = true
    }
    console.log(regexEmail.test(email.value))

    if (!regexEmail.test(email.value)) {

        warnings+= `El email no es valido <br>`
        entrar = true
        
    }

    if (entrar) {
        parrafo.innerHTML = warnings
        
    }

})