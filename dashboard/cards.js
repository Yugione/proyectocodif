$(document).ready(function(){
    tablaPedidos = $("#tablaPedidos").DataTable({
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
    $("#formPedidos").trigger("reset");
    $(".modal-header").css("background-color", "#1cc88a");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Nuevo Pedido");            
    $("#modalCRUD").modal("show");        
    id=null;
    opcion = 1; //alta
});    
    
var fila; //capturar la fila para editar o borrar el registro
    
//botón EDITAR    
$(document).on("click", ".btnEditar", function(){
    fila = $(this).closest("tr");
    id = parseInt(fila.find('td:eq(0)').text());
    tienda = fila.find('td:eq(1)').text();
    ciudad = fila.find('td:eq(2)').text();
    articulos_vendidos = parseInt(fila.find('td:eq(3)').text());
    
    
    $("#tienda").val(tienda);
    $("#ciudad").val(ciudad);
    $("#articulos_vendidos").val(articulos_vendidos);
  

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
            url: "bd/crud3.php",
            type: "POST",
            dataType: "json",
            data: {opcion:opcion, id:id},
            success: function(){
                tablaPedidos.row(fila.parents('tr')).remove().draw();
            }
        });
    } 
 
      
});
    
$("#formPedidos").submit(function(e){
    e.preventDefault();    
    tienda = $.trim($("#tienda").val());
    ciudad = $.trim($("#ciudad").val());
    articulos_vendidos = $.trim($("#articulos_vendidos").val());


    $.ajax({
        url: "bd/crud3.php",
        type: "POST",
        dataType: "json",
        data: {tienda:tienda, ciudad:ciudad, articulos_vendidos:articulos_vendidos, id:id, opcion:opcion},
        success: function(data){  
            console.log(data);
            id = data[0].id;            
            tienda = data[0].tienda;
            ciudad= data[0].ciudad;
            articulos_vendidos = data[0].articulos_vendidos;
            if(opcion == 1){tablaPedidos.row.add([id,tienda,ciudad,articulos_vendidos]).draw();}
            else{tablaPedidos.row(fila).data([id,tienda,ciudad,articulos_vendidos]).draw();}            
        }         
    });
    $("#modalCRUD").modal("hide");    
    
});    
    
});