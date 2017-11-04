		$("#wd").click(function() {
		    $('html,body').animate({
		        scrollTop: $(".main__about__us").offset().top},
		    'slow');
		});


		/*--____---SLIDER---_____--*/
		count=1;
		$(document).ready(function TR(){
			setTimeout(function(){
				if(count==1){
				$('.team__members_3 , .clients__box__3 , .t_i_3').animate({
						right: '+=33.33%',
				}, 'slow')
				$('.team__members_2 , .clients__box__2 , .t_i_2').animate({
					right: '+=33.33%',
					opacity: '1'
				},'slow');
				$('.team__members , .clients__box__1 , .t_i_1').animate({
					right: '+=33.33%',
					opacity: '0'
				},'slow');
				$('.dot_1').css('background-color','#fff');
				$('.dot_2').css('background-color','rgb(252, 172, 69)');
				count++;
			} else if(count==2){
				$('.team__members_3 , .clients__box__3 , .t_i_3').animate({
					right: '+=33.33%',
					opacity: '1'
				},'slow')
				$('.team__members_2 , .clients__box__2 , .t_i_2').animate({
					right: '+=33.33%',
					opacity: '0'
				},'slow');
				$('.team__members , .clients__box__1 , .t_i_1').animate({
					right: '+=33.33%',
				},'slow');
				$('.dot_2').css('background-color','#fff');
				$('.dot_3').css('background-color','rgb(252, 172, 69)');
				count++;
			} else if(count==3){
				$('.team__members_3 , .clients__box__3 , .t_i_3').animate({
					right: '-=66.66%',
					opacity: '0'
				},'slow')
				$('.team__members_2 , .clients__box__2 , .t_i_2').animate({
					right: '-=66.66%',
					opacity: '0'
				},'slow');
				$('.team__members , .clients__box__1 , .t_i_1').animate({
					right: '-=66.66%',
					opacity: '1'
				},'slow');
				$('.dot_3').css('background-color','#fff');
				$('.dot_1').css('background-color','rgb(252, 172, 69)');
				count = 1;
			} TR();
			},4000);
		});

		$(".menu__mob").click(function(){
        	$(".menu").slideToggle("slow");
    	});
    	$("#close__").click(function(){
        	$(".menu").slideToggle("slow");
    	});