<?php
include_once('PDODB.php');
class User extends PDODB{
  public function __construct(){
		parent::__construct();
		$this->table = 'users';
	}
	public function create( $a, $b, $c, $d, $e, $f, $g, $h, $i){
		$data = array("nombre" => $a, "apellido" => $b, "telefono" => $c, "correo" => $d, "razon_social"=> $e, "plaza" => $f, "id_tipo_pago" => $g, "id_paquete" => $h, "id_tipo_habitacion" => $i);
		$result = $this->_insert( $data );
		return $result;
	}
	public function exist( $a ){
		$data = $this->_where("id", "correo='$a'")->get();
		if($data) $data = $data[0]->id;
		return $data;
	}
}