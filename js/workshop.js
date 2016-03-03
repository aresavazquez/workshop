$(document).on('ready', function(){
	$('.img-1').on('mouseover', function(){
		TweenLite.to('.box.one',.5, {opacity: .7});
    	TweenLite.to('.one h1', 1, {ease: Power3.easeOut, y: 50, opacity: 1, display: 'block'});
    	TweenLite.to('.one p', 1, {ease: Power3.easeOut, y: 50, opacity: 1, display: 'block'});
    });
    $('.img-1').on('mouseleave', function(){
    	TweenLite.to('.box.one',.5, {opacity: 1});
    	TweenLite.to('.one h1', 1, {ease: Power3.easeOut, y: 0, opacity: 0, display: 'none'});
    	TweenLite.to('.one p', 1, {ease: Power3.easeOut, y: 0, opacity: 0, display: 'none'});
    });
/*-------------*/
    $('.img-2').on('mouseover', function(){
    	TweenLite.to('.box.two',.5, {opacity: .7});
    	TweenLite.to('.two h1', 1, {ease: Power3.easeOut, y: 50, opacity: 1, display: 'block'});
    	TweenLite.to('.two p', 1, {ease: Power3.easeOut, y: 50, opacity: 1, display: 'block'});
    });
    $('.img-2').on('mouseleave', function(){
    	TweenLite.to('.box.two',.5, {opacity: 1});
    	TweenLite.to('.two h1', 1, {ease: Power3.easeOut, y: 0, opacity: 0, display: 'none'});
    	TweenLite.to('.two p', 1, {ease: Power3.easeOut, y: 0, opacity: 0, display: 'none'});
    });
/*-------------*/
    $('.img-3').on('mouseover', function(){
    	TweenLite.to('.box.three', 1, {opacity: .7});
    	TweenLite.to('.three h1', 2, {ease: Power3.easeOut, y: 50, opacity: 1, display: 'block'});
    });
    $('.img-3').on('mouseleave', function(){
    	TweenLite.to('.box.three', 1, {opacity: 1});
    	TweenLite.to('.three h1', 2, {ease: Power3.easeOut, y: 0, opacity: 0, display: 'none'});
    });
/*-------------*/
    $('.img-4').on('mouseover', function(){
    	TweenLite.to('.box.four', 1, {opacity: .7});
    	TweenLite.to('.four h1', 2, {ease: Power3.easeOut, y: 50, opacity: 1, display: 'block'});
    });
    $('.img-4').on('mouseleave', function(){
    	TweenLite.to('.box.four', 1, {opacity: 1});
    	TweenLite.to('.four h1', 2, {ease: Power3.easeOut, y: 0, opacity: 0, display: 'none'});
    });
/*-------------*/
    $('#hospedaje').on('click', function(){
        TweenLite.to('.select', .3, {opacity: 1});
    });
    $('#sinHospedaje').on('click', function(){
        TweenLite.to('.select', .3, {opacity: 0});
    });
/*-------------*/
    $('.send').on('click', function(e){
        e.preventDefault();
        var formData = {                                                                                                   
            method: 'save_user',
            razon: $('#formReason').val(),
            nombre: $('#formName').val(),
            telefono: $('#formPhone').val(),
            mail: $('#formMail').val(),
            plaza: $('#formPlaza').val()
        };
        $('.loading').show();
        $.post('json.php', formData, function(response){
            $('.loading').hide();
            if(response.code == 200){
                var tl = new TimelineLite();
                //TweenLite.set('.ficha', {display: "block"});
                //TweenLite.set('.ruleta', {display: "block"});
                //TweenLite.set('.flecha', {display: "block"});
                //tl.to('form', 1, { display: "none", opacity: 0, ease: Power2.easeOut, y: 200});
                //tl.from('.ficha', 1, { opacity: 0, ease: Power2.easeOut, y: -30, rotation: "-450deg"});
                //tl.from('.ruleta', 1, { opacity: 0, ease: Power2.easeOut, y: -30, rotation: "-450deg"}, "-=1");
                //tl.from('.flecha', .4, { opacity: 0, ease: Power2.easeOut, y: -30});
                //tl.to('.jugar', .4, { display: "block", opacity: 1});
                //tl.to('.jugar', 1, {scale:1.3, repeat:-1, yoyo:true});
            }else{
                $('.error').text(response.error);
            }
        });
    });
});