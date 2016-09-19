$(document).ready(function(){

	//kjo variabel na jep mundesine e tre zgjedhjeve se si e duam te funksionoje grid yne
	var opt = 2; //default esht numri 2

	//ky esht funksioni main , i cili ben te mundur grid dhe veprimet qe behen ne te
	all_in(opt); //merr si parameter nje variabel e cila ben te mundur nje nga 3 veprimet e mundshme qe mund te behen mbi grid
	
	//opsioni 1
	$("#option1").on("click",function(){
		remove();
		opt = 2;//kur vlera e "opt" eshte '2' , athere vizatohet gridi dhe kur mausi kalon siper nje div , ai ngjyroset me ngjyr blu
		all_in(opt);
	})

	$("#option2").on("click",function(){
		remove();
		opt = 3;//kur vlera e "opt" eshte '2' , athere gridi nuk vizatohet por kur mausi kalon siper nje div , ai fillon i shtohet nga pak opacity i ngjyres black
		all_in(opt);
	})

	$("#option3").on("click",function(){
		remove();
		opt = 5;//kur vlera e "opt" eshte '5' , athere gridi nuk vizatohet por kur mausi kalon siper nje div :
		all_in(opt);//div ngjyroset dhe kur mausi largohet , ai kthehet ashtu sic ishte me efekt fade
	})


	
});

function remove(){
	$("#base").find(".test").remove();//largojm divs e gridit te vjeter(nese ka)
	$("body").find("#message").remove();//largojm mesazhin ne lidhje gridin(nese ka)
}

function add_option(sms){
	$(".test").css("opacity",0);//transparenca behet 0
	$(".test").css("background-color","black");//background behet black
	$("#base").before(sms);//shtohet nje mesazh ne menyr qe perdoruesi te kuptoj pse grid nuk eshte i vizatuar
}


function all_in(ability){

	//numri default i rreshtave dhe shtyllave
	var no_box = 16;
	

	//ky esht funksioni i cili nderton grids ne varesi te numrit qe i jepet
	function bild(boxes){
		var wid = ($('#base').width()-boxes*2-15)/(boxes);   //gjendet hapsira qe duhet te ket cdo div    //nga gjeresia e divit kryesor hiqet dhe gjeresia qe zen pixels

		for (var i = 0; i < boxes; i++) {
			for (var j = 0; j < boxes; j++) {
				$("#base").append("<div class='test'></div>");
			};
			//$("#base").append("<br>");
		};	
		$('.test').css('width',wid);//cdo div i shtuar do e ket gjeresin nga formula qe llogaritem siper
		$('.test').css('height',wid);//lartesia do jet e njejte me gjeresin meqnse kemi katror
		
	}

	//ky funksion kryen nje veprim kur mausi kalon mbi div , ne varesi te paramtrit
	function colorful(){
		if (ability%2==0) {
			$(".test").on("mouseenter",function(){
			$(this).addClass("pass"); //shtohet klasa pass e cila ka backgruond blu
			})
		}
		else if (ability%3==0) {
			add_option("<h2 id='message'>Find and draw...</h2>");//ben gati grid per kte lloj efekti
			$(".test").on("mouseenter",function(){
				var value = parseFloat($(this).css("opacity"));//marrim vleren e transparences se div qe kemi   
 				if(value<1){									//parseFloat e kthen ne numer nga string
    				value += 0.1;           
    				$(this).css("opacity", value); //ja rrisim vleren me 0.1 sa her mausi kalon aty
				}
			})
		}
		else if (ability%5==0) {
			add_option("<h2 id='message'>Enter and leave...</h2>");//ben gati grid per kte lloj efekti
			$(".test").on("mouseenter",function(){
				$(this).fadeTo(400,1);  //kur mausi hyn ne div , opacity behet 1 , me efekt fade
			})
			$(".test").on("mouseleave",function(){
				
				$(this).fadeTo(100,0); //kur mausi del nga div , opacity behet 0 , me efekt fade
			})
		}
		
	}

	//fillimisht ndertojm nje version deafult me 16/16
	bild(no_box);
	
	//ne momentin qe butoni do klikohet perdoruesit do i kerkohet nje numer i ri per rreshtat dhe kolonat
	$("#change").on("click",function(){
		do{
			no_box = prompt("Enter a new grid width 0<x<128");
			console.log(no_box);
		}while(isNaN(no_box) || no_box<0 || no_box>128) // do vazhdoj ta kerkoj deri sa input te mos jet string dhe nr negativ ose 0
		
		$("#base").find(".test").remove(); //largojm gjithe divs qe kishim 
		$("#base").find("br").remove(); // largojm dhe te gjitha line breaks
		$("body").find("#message").remove();
		
		bild(no_box); // ndertojm grid e ri me numrin qe na dha perdorues

		colorful(); 

		
	})


	colorful();
}