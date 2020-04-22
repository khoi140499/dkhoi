document.addEventListener("DOMContentLoaded", function(){
	var x= document.querySelector('.menu_top');
	var y= document.querySelector('.hm');
	var z= document.querySelector('.logo');
	var tt=true;
	window.addEventListener('scroll', function(){
		if(window.pageYOffset > 90){
			y.classList.add('hm_dc');
			x.classList.add('menu_be');
			z.classList.add('logo_tn');
			tt=false;
		}
		else if(window.pageYOffset <= 90){
			x.classList.remove('menu_be');
			y.classList.remove('hm_dc');
			z.classList.remove('logo_tn');
			tt=true;
		}
	})
}, false)