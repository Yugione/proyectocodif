/*================================================================================
FUNCION MOSTRAR & OCULTAR ELEMENTO <DIV> HTML
REPOSITORIO GIT PRINCIPAL: https://github.com/infodp/form_validation_vanilla_js
REPOSITORIO GIT CONSULTA: https://github.com/falconmasters/formulario-css-grid
MATERIAL DE APOYO: https://www.youtube.com/watch?v=LQ-tPxSlM9s
VARIABLES DEL FORMULARIO: numdoc nombre apellido fecha sexo telefono correo clave
MODIFICACIONES: CSS BOOTSTRAP EN LA LINEA 3582 HASTA 3631
==================================================================================*/
window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const numdoc= document.getElementById('numdoc')
    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    const fecha = document.getElementById('fecha')
    const sexo = document.getElementById('sexo')
    const telefono = document.getElementById('telefono')
    const correo = document.getElementById('correo')
    const clave = document.getElementById('clave')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
   
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        const numdocValor = numdoc.value.trim()
        const nombreValor = nombre.value.trim()
        const apellidoValor = apellido.value.trim()
        const fechaValor = fecha.value.trim();
        const sexoValor = sexo.value.trim();
        const telefonoValor = telefono.value.trim();
        const correoValor = correo.value.trim();
        const claveValor = clave.value.trim();


         //VALIDANDO CAMPO DOCUMENTO DE IDENTIDAD
         const id = /^\d{7,11}$/         
         if(!numdocValor) {
             validaFalla(numdoc, 'Campo Documento Identidad Vacío')
         } else if (numdocValor.length < 7) {             
             validaFalla(numdoc, 'Debe tener 7 numeros cómo mínimo.')
         } else if (!numdocValor.match(id)) {
             validaFalla(numdoc, 'Debe tener al menos 7 numeros y Maximo 11.')
         } else {
             validaOk(numdoc)
         }                
     
        //VALIDANDO CAMPO NOMBRES
        //(!nombreValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
        if(!nombreValor){
            //console.log('CAMPO VACIO')
            validaFalla(nombre, 'Campo Nombres Vacío')
        }else{
            validaOk(nombre)
        }

        //VALIDANDO CAMPO APELLIDOS
        if(!apellidoValor){
            validaFalla(apellido, 'Campo Apellidos Vacío')
        }else{
            validaOk(apellido)
        }

         /*====================================================================================
         VALIDANDO CAMPO CORREO ELECTRONICO
         MATERIAL APOYO: https://lineadecodigo.com/javascript/validar-el-email-con-javascript/
         =====================================================================================*/       
         if(!correoValor) {
             validaFalla(correo, 'Campo Correo Vacío')
         } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(correo)) {             
             validaFalla(correo, 'Debe tener al menos nombre usuario.')
         } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(correo)) {
             validaFalla(correo, 'Debe tener al menos nombre usuario + @ + servidor + dominio.')
         } else {
             validaOk(correo)
         } 

         //VALIDANDO CAMPO CLAVE - PASSWORD
         const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/          
         if(!claveValor) {
             validaFalla(clave, 'Campo Clave Vacío')
         } else if (claveValor.length < 8) {             
             validaFalla(clave, 'Debe tener 8 caracteres cómo mínimo.')
         } else if (!claveValor.match(er)) {
             validaFalla(clave, 'Debe tener al menos una may., una min. y un núm.')
         } else {
             validaOk(clave)
         } 

    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'input-group falla'
    }

    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'input-group ok'
    }



})