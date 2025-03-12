const name = document.getElementById("name")
const last = document.getElementById("last")
const email = document.getElementById("Email")
const write = document.getElementById("Write")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=>{

    e.preventDefault()

    let warnings = ""
    let regexEmail = /^[a-z0-9]+(?:[.-][a-z0-9]+)*@[a-z0-9]+(?:[.-]?[a-z0-9]+)*(?:\.[a-z]{2,3})$/
    let entrar= false
    parrafo.innerHTML=""

    if (name.value.length > 30) {

        warnings+= `El nombre no es valido <br>`
        entrar = true
    }

    if (last.value.length >=10) {

        warnings+= `El apellido no es valido <br>`
        entrar = true
        
    }

    if (write.value.length > 500) {

        warnings+= `Son muchos caracteres <br>`
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







