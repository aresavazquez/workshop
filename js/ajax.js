$(document).on('ready', function(){
	$('.send').on('click', function(e){
		e.preventDefault();
		var formData = {
			method: 'save_user',
			name: $('#formName').val(),
			lastname: $('#formLastName').val(),
			phone: $('#formPhone').val(),
			mail: $('#formMail').val(),
			business_name: $('#formBusiness').val(),
			plaza: $('#formPlaza').val(),
			contado: $('#formContado').val(),
			credit: $('#formCredito').val(),
			hosting: $ ('#formHospedaje').val(),
			sin_hospedaje: $('#formSinHospedaje').val()
		};
		console.log(formData);
		$('.loading').show();
		$.post('json.php', formData, function(response){
			$('.loading').hide();
			if(response.code == 200){
			  alert(response.data);
				console.log(response);
			}else{
				$('.error').text(response.error);
			}
		});
	});
});