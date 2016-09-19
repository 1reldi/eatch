$(document).ready(function(){
	//numri default i rreshtave dhe shtyllave
	var no_box = 16;
	

	//ky esht funksioni i cili nderton grids ne varesi te numrit qe i jepet
	function bild(boxes){
		var wid = ($('#base').width()-boxes*2-15)/(boxes);   //gjendet hapsira qe duhet te ket cdo div    //nga gjeresia e divit kryesor hiqet dhe gjeresia qe zen pixels

		for (var i = 0; i < boxes; i++) {
			for (var j = 0; j < boxes; j++) {
				$("#base").append("<div class='test'></div>"); //shtohen me rradh divs brenda div
			};
			//$("#base").append("<br>");
		};	
		$('.test').css('width',wid);//cdo div i shtuar do e ket gjeresin nga formula qe llogaritem siper
		$('.test').css('height',wid);//lartesia do jet e njejte me gjeresin meqnse kemi katror
		
	}

	//ky funksion i jep ngjyr div nese mausi kalon ne te
	function colorful(){
		$(".test").on("mouseenter",function(){
		$(this).addClass("pass"); //shtohet klasa pass e cila ka backgruond blu
		})
	}

	//fillimisht ndertojm nje version deafult me 16/16
	bild(no_box);
	
	//ne momentin qe butoni do klikohet perdoruesit do i kerkohet nje numer i ri per rreshtat dhe kolonat
	$("#change").on("click",function(){
		do{
			no_box = prompt("Enter a new grid width 0<x<128");
		}while(isNaN(no_box) || no_box<0 || no_box>128) // do vazhdoj ta kerkoj deri sa input te mos jet string dhe nr negativ ose 0
		
		$("#base").find(".test").remove(); //largojm gjithe divs qe kishim 
		$("#base").find("br").remove(); // largojm dhe te gjitha line breaks
		
		bild(no_box); // ndertojm grid e ri me numrin qe na dha perdorues

		colorful(); 

		
	})


	colorful();

	
});