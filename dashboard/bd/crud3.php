<?php
include_once '../../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();
// Recepción de los datos enviados mediante POST desde el JS   

$tienda = (isset($_POST['tienda'])) ? $_POST['tienda'] : '';
$ciudad = (isset($_POST['ciudad'])) ? $_POST['ciudad'] : '';
$articulos_vendidos = (isset($_POST['articulos_vendidos'])) ? $_POST['articulos_vendidos'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';

switch($opcion){
    case 1: //alta
        $consulta = "INSERT INTO pedidos (tienda, ciudad, articulos_vendidos) VALUES('$tienda', '$ciudad', '$articulos_vendidos') ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 

        $consulta = "SELECT id, tienda, ciudad, articulos_vendidos FROM pedidos ORDER BY id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 2: //modificación
        $consulta = "UPDATE pedidos SET tienda='$tienda', ciudad='$ciudad', articulos_vendidos='$articulos_vendidos' WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        
        $consulta = "SELECT id, tienda, ciudad, articulos_vendidos FROM pedidos WHERE id='$id' ";       
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;        
    case 3://baja
        $consulta = "DELETE FROM pedidos WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;        
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;
