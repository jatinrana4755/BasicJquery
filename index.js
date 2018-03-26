
$(document).ready(() =>{



	$(".row").click(function(){

		$(".paragraph").slideToggle('slow');

	});

	$(".row-two").click(function(){

		$(".paragraph-one").slideToggle('slow');

	});

	$(".row-three").click(function(){

		$(".paragraph-two").slideToggle('slow');
	

	});

    $("#tag").click(function(){
	$(".parent").find(".item").fadeToggle('slow');
});

});






$(document).ready(()=>{

	$('#showModal').click(function(){

		$(".helloModal").css("display","block");
	});

		$(".closeModal").click(function(){

			$(".helloModal").css("display","none");

		});



	});