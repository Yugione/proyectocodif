$(document).ready(function(){
    tablaProductos = $("#tablaProductos").DataTable({
       "columnDefs":[{
        "targets": -1,
        "data":null,
        "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditar'>Editar</button><button class='btn btn-danger btnBorrar'>Borrar</button></div></div>"  
       }],
        
    "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast":"Último",
                "sNext":"Siguiente",
                "sPrevious": "Anterior"
             },
             "sProcessing":"Procesando...",
        }
    });
    
$("#btnNuevo").click(function(){
    $("#formProductos").trigger("reset");
    $(".modal-header").css("background-color", "#1cc88a");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Nuevo Producto");            
    $("#modalCRUD").modal("show");        
    id=null;
    opcion = 1; //alta
});    
    
var fila; //capturar la fila para editar o borrar el registro
    
//botón EDITAR    
$(document).on("click", ".btnEditar", function(){
    fila = $(this).closest("tr");
    id = parseInt(fila.find('td:eq(0)').text());
    articulo = fila.find('td:eq(1)').text();
    punto_de_venta = fila.find('td:eq(2)').text();
    cantidad = parseInt(fila.find('td:eq(3)').text());
    
    $("#articulo").val(articulo);
    $("#punto_de_venta").val(punto_de_venta);
    $("#cantidad").val(cantidad);
    opcion = 2; //editar
    
    $(".modal-header").css("background-color", "#4e73df");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Editar Producto");            
    $("#modalCRUD").modal("show");  
    
});

//botón BORRAR
$(document).on("click", ".btnBorrar", function(){    
    fila = $(this);
    id = parseInt($(this).closest("tr").find('td:eq(0)').text());
    opcion = 3 //borrar
    var respuesta = confirm("¿Está seguro de eliminar el registro: "+id+"?");
    if(respuesta){
        $.ajax({
            url: "bd/crud2.php",
            type: "POST",
            dataType: "json",
            data: {opcion:opcion, id:id},
            success: function(){
                tablaProductos.row(fila.parents('tr')).remove().draw();
            }
        });
    } 
 
      
});
    
$("#formProductos").submit(function(e){
    e.preventDefault();    
    articulo = $.trim($("#articulo").val());
    punto_de_venta = $.trim($("#punto_de_venta").val());
    cantidad = $.trim($("#cantidad").val());    
    $.ajax({
        url: "bd/crud2.php",
        type: "POST",
        dataType: "json",
        data: {articulo:articulo, punto_de_venta:punto_de_venta, cantidad:cantidad, id:id, opcion:opcion},
        success: function(data){  
            console.log(data);
            id = data[0].id;            
            articulo = data[0].articulo;
            punto_de_venta = data[0].punto_de_venta;
            cantidad = data[0].cantidad;
            if(opcion == 1){tablaProductos.row.add([id,articulo,punto_de_venta,cantidad]).draw();}
            else{tablaProductos.row(fila).data([id,articulo,punto_de_venta,cantidad]).draw();}            
        }        
    });
    $("#modalCRUD").modal("hide");    
    
});    
    
});