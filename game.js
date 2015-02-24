function check(){
	// console.log("2 is: "+ $('#2').text());
	if($('#1').text() == $('#2').text() && $('#3').text() == $('#2').text() && $('#1').text() != '')
	{
		// console.log("this wins!" + $('#1').text());
		$('#info').text($('#1').text() +' Wins!').delay(11500);
		reset();
		// console.log("reset: in text:" + $('#1').text());
	}
	else if($('#4').text() == $('#5').text() && $('#6').text() == $('#5').text() && $('#4').text() != '')
	{
		// console.log($('#4').text() + "winsss2!");
		$('#info').text($('#4').text() +' Wins!');
		reset();
	}
	else if($('#7').text() == $('#8').text() && $('#9').text() == $('#8').text() && $('#7').text() != '')
	{
		// console.log($('#7').text() + "winsss3!");
		$('#info').text($('#7').text() +' Wins!');
		reset();
	}
	else if($('#1').text() == $('#4').text() && $('#7').text() == $('#4').text() && $('#1').text() != '')
	{
		// console.log($('#1').text() + "winsss3!");
		$('#info').text($('#1').text() +' Wins!');
		reset();
	}
	else if($('#2').text() == $('#5').text() && $('#8').text() == $('#5').text() && $('#2').text() != '')
	{	
		// console.log($('#2').text() + "winsss3!");
		$('#info').text($('#2').text() +' Wins!');
		reset();
	}
	else if($('#3').text() == $('#6').text() && $('#9').text() == $('#6').text() && $('#3').text() != '')
	{
		// console.log($('#3').text() + "winsss3!");
		$('#info').text($('#3').text() +' Wins!');
		reset();
	}
	else if($('#1').text() == $('#5').text() && $('#9').text() == $('#5').text() && $('#1').text() != '')
	{
		// console.log($('#1').text() + "winsss3!");
		$('#info').text($('#1').text() +' Wins!');
		reset();
	}
	else if($('#3').text() == $('#5').text() && $('#7').text() == $('#5').text() && $('#3').text() != '')
	{
		// console.log($('#3').text() + "winsss3!");
		$('#info').text($('#3').text() +' Wins!');
		reset();
	}
}

function reset(){

	$('td').off();
	$('td').text('');
	$('#button').show();
}

$(document).ready(function(){
	var turn = 0;

	$('td').on("click", function(){
		var self = $(this);

		if (turn % 2 === 0) {
			self.text('X');
		} else {
			self.text('O');
		}

		turn++;

		self.off();
		//checkAll();
		check();
	});

	$('#button').click(function(){
		location.reload();
	});
});