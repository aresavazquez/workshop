$(document).on('ready', function(){
	$('.send').on('click', function(e){
		e.preventDefault();
		var formData = {
			method: 'save_user',
			name: $('#formName').val(),
			lastname: $('#formLastName').val(),
			phone: $('#formPhone').val(),
			mail: $('#formMail').val(),
			plaza: $('#formPlaza').val(),
			business_name: $('#formBusiness').val(),
			tipo_pago: $('input[name="pago"]:checked').val(),
			paquete: $('input[name="paquete"]:checked').val(),
			tipo_habitacion: $ ('#formHabitacion').val()
		};
		console.log(formData);
		$('.loading').show();
		$.post('json.php', formData, function(response){
			$('.loading').hide();
			if(response.code == 200){
			  alert(response.data);
				console.log(response);
			}else{
				alert('completa el campo');
				$('.error').text(response.error);
			}
		});
	});
});