$('.interface').on('click', function() {	
	if ($(this).hasClass('blue')) {
		console.log('true in blue');
		$('body').attr('class', 'blue');
	}
	if ($(this).hasClass('green')) {
		console.log('true in green');
		$('body').attr('class', 'green');
	}
	if ($(this).hasClass('increase')) {
		console.log('increase');
		$('.text').animate({
			'font-size': '+=5'
		},500)
	}
	if ($(this).hasClass('move')) {
		console.log('move');
		$('.text').animate({
			'letter-spacing': '+=2',
			'left': '+=2%'
		})
	}

	
})