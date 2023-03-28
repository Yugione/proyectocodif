/*======================================================
FUNCION MOSTRAR & OCULTAR ELEMENTO <DIV> HTML
=======================================================*/

function ocultarAlerta(){
	document.getElementById('caja').style.display = 'none' ;
	/* alert("Estas Ocultando Elementos") */

}
 
function mostrarAlerta(){
	//document.getElementById('alerta1').style.display = 'block';
	document.getElementById('caja').style.display = 'block' ;
	/* alert("Estas Mostrando Elementos") */

}

function mostrarCaja(){
	var caja = document.getElementById('caja');

	if (caja.style.display == 'none') {
		mostrarAlerta()
	}else{
		ocultarAlerta()
	}
}

/*======================================================
FUNCION MOSTRAR ALERTA VENTANA MODAL PLUGIN sweetalert2
=======================================================*/
function btnMostrarMensaje() {
	Swal.fire({
		title: 'Eliminar?',
		text: "Registro Eliminado",
		icon: 'error',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, delete it!'
	  }).then((result) => {
		if (result.isConfirmed) {
		  Swal.fire(
			'Deleted!',
			'Your file has been deleted.',
			'success'
		  )
		}
	  })
}


function btnAlerta2(){
	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'Registro Enviado con Exito',
		showConfirmButton: false,
		timer: 1500
	  })
}