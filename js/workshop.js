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
    //$('#hospedaje').on('click', function(){
    //    TweenLite.to('.select', .3, {opacity: 1});
    //});
    //$('#sinHospedaje').on('click', function(){
    //    TweenLite.to('.select', .3, {opacity: 0});
    //});
/*-------------*/
});