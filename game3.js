
function reset(){
	// for(var i = 0; i<9; i++){
	// 		$('#td').eq(i).text()='';
	// }
	$('td').text() = '';

}

function allX(){
	return $("td").filter(function(){ 
		return $(this).text() === "X" 
	}).map(function() { 
		return Number(this.id) 
	})
}

function allO(){
	return $("td").filter(function(){ 
		return $(this).text() === "O" 
	}).map(function() { 
		return Number(this.id) 
	})
}

//http://stackoverflow.com/questions/9204283/how-to-check-whether-multiple-values-exist-within-an-javascript-array
function containsAll(needles, haystack){ 
  for(var i = 0 , len = needles.length; i < len; i++){
     if($.inArray(needles[i], haystack) == -1) return false;
     if(needles[i].length < haystack.length) return false;
  }
  return true;
}

var winning_conditions = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[1,4,7],
	[2,5,8],
	[3,6,9],
	[1,5,9],
	[3,5,7]
]

function check() {
	for (var i = winning_conditions.length - 1; i >= 0; i--) {
		console.log("Checking against:", winning_conditions[i])
		console.log("X:", allX(), "o:", allO())
		if($.inArray(allX().each(), winning_conditions[i])){

		//if (containsAll(allX(), winning_conditions[i] )){
			alert("X wins!")
		}
		if (containsAll(allO(), winning_conditions[i] )){
			alert("O wins!")
		}
	};

	// if (containsAll(allX(), [1,2,3])) {
	// 	alert("win!")
	// }
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
		//check()
	});



});