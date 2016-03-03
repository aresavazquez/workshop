<?php
session_start();
date_default_timezone_set('America/Mexico_City');
include_once('user.php');
if( empty($_POST) ) header("HTTP/1.1 500 Internal Server Error");
header('Content-Type: application/json');
$user = new User();
switch(@$_POST['method']){
  case 'save_user':
		$name = $_POST['nombre'];
		$lastname = $_POST['apellido'];
		$phone = $_POST['telefono'];
		$mail = $_POST['correo'];
		$business_name = $_POST['razon_social'];
		$plaza = $_POST['plaza'];
		$contado = $_POST['contado'];
		$credit = $_POST['credito'];
		$hosting = $_POST['hospedaje'];
		$sin_hospedaje = $_POST['sin_hospedaje'];

		evaluate($name, 'nombre');
		evaluate($lastname, 'apellido');
		evaluate($phone, 'teléfono', 'isPhone');
		evaluate($mail, 'correo', 'isEmail');
		evalute($business_name, 'razon_social', 'isBusiness_name');
		evaluate($plaza, 'plaza', 'isPlaza');
		evaluate($contado, 'contado', 'isContado');
		evaluate($credit, 'credito', 'isCredit');
		evaluate($hosting, 'hospedaje', 'isHosting');
		evaluate($sin_hospedaje, 'sin_hospedaje', 'isSin_hospedaje');
		
		$id = $user->exist($mail);
		if(!$id) $id = $user->create($name, $lastname, $phone, $mail, $business_name, $plaza, $contado, $credit, $hosting, $sin_hospedaje);
		//$_SESSION['id'] = base64_encode($id);
		response($id);
		break;
}
function response($data){
	$result = array('code' => 200, 'data' => $data, 'error' => null);
	echo json_encode($result);
	exit;
}
function fail($error){
	$result = array('code' => 500, 'data' => null, 'error' => $error);
	echo json_encode($result);
	exit;
}
function evaluate($value, $key, $rules=null){
	$error = "Debes escribir un $key válido";
	if(!$value || $value == '') fail($error);
	$rules_list = explode('|', $rules);
	foreach ($rules_list as $rule) {
		switch($rule){
			case 'isEmail':
				if( !filter_var($value, FILTER_VALIDATE_EMAIL) ) fail('Debes escribir un correo válido');
				break;
			case 'isPhone':
				if(count(str_split($value)) < 7 || count(str_split($value)) > 10 || !filter_var($value, FILTER_VALIDATE_INT) ) fail('Debes escribir un teléfono válido');
				break;
		}
	}
}