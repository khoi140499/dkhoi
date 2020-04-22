document.addEventListener("DOMContentLoaded", function(){
   	var dangnhap=document.querySelector('.login');
	var c=document.querySelector('.dkhi');
	var dangki=document.querySelector('.logup');
	var d=document.querySelector('.dnhap');
	var text1=document.querySelector('.dangki');
	var text2=document.querySelector('.dangki1');
	c.onclick=function(){
		dangnhap.classList.add('login_mat');
		dangki.classList.add('logup_hien');
		text1.classList.add('dangki_mat');
		text2.classList.add('dangki1_hien');
		// text2.classList.remove('dangki1_mat');
		// dangnhap.classList.remove('login_hien');
	}
	d.onclick=function(){
		dangnhap.classList.remove('login_mat');
		dangki.classList.remove('logup_hien');
		text1.classList.remove('dangki_mat');
		text2.classList.remove('dangki1_hien');
	}
}, false)