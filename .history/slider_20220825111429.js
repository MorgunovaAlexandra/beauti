$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		adaptiveHeight:true,
		slidesToShow:3,
		touchMove:true,
		responsive:[
			{
				breakpoint:768,
				settings:{slidesToShow:3}
			},
			{
				breakpoint:500,
				settings:{slidesToShow:1}
			},
			{
				breakpoint:414,
				settings:{slidesToShow:1}
			},
			{
				breakpoint:320,
				settings:{slidesToShow:1}
			}

		]
	})
});