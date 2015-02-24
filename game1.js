
function checkAll(){
	var result;
	var comb = 0;
	do { 
		result = check3($('tr#A td'));
		console.log("Result 1 is: ", result);
		if (result !== undefined){ break; }

		result = check3($('tr#B td'));
		console.log("Result 2 is: ", result);
		if (result !== undefined){ break; }
		
		result = check3($('tr#C td'));
		console.log("Result 3 is: ", result);
		if (result !== undefined){ break; }

		result = check3($('.1'));
		console.log("Result 4 is: ", result);
		if (result !== undefined){ break; }
		
		result = check3($('.2'));
		console.log("Result 5 is: ", result);
		if (result !== undefined){ break; }

		result = check3($('.3'));
		console.log("Result 6 is: ", result);
		if (result !== undefined){ break; }

		var diagonalOne = [$('#A .1'), $('#B .2'), $('#C .3')];
		var diagonalTwo = [$('#A .3'), $('#B .2'), $('#C .1')];

		result = check3(diagonalOne);
		console.log("Result 7 is: ", result);
		if (result !== undefined){ break; }

		result = check3(diagonalTwo);
		console.log("Result 8 is: ", result);
		if (result !== undefined){ break; }

		console.log("Result is:", result);
		comb++;

	} while(result === undefined && comb !== 8);
	
	console.log("The winner is : ", result.eq(0).text());
	$('#info').text(result.eq(0).text() + ' Wins!');
}



function check3(array){
	// array = $(array);
	// console.log("array in here is:",array);
	if (array.eq(0).text() == array.eq(1).text() && array.eq(1).text() == array.eq(2).text() && array.eq(1).text() != '') {
		console.log("array is:", array);
		return array;
		// var result = array.eq(0).text();
		// return result;
	}
}

function reset(){
	$('td').text() = '';

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
		checkAll();
		//check()
	});



});