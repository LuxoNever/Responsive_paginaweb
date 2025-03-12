function cambiarTexto() {

        var input = document.getElementById("name")

        if (window,innerWidth > 702) {

            input.setAttribute("placeholder", "First name")
        }else{

            input.setAttribute("placeholder", "Full name")
        }
    
}


cambiarTexto();

window.addEventListener('resize', cambiarTexto);