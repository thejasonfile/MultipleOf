var inputNum, divNum = 100;

//add divs to page
function addDivs() {
	for (i=0; i<divNum; i++) {
	var newDiv = $("<div></div>").text(i+1).addClass("number");
	$("#container").append(newDiv);
	}
}

//test input number
function numberTest() {
	inputNum = $("#divider").val();
	if (inputNum > divNum) {
		var errTxt = "Please enter a number less than " + divNum;
		var errMsg = $("<div></div>").text(errTxt).addClass("error");
		$("#container").prepend(errMsg);
	} else {
		$(".error, .number").hide();
		//$(".number").hide();
		doTheMath();
	}
}

//divide input number into divs
function doTheMath() {
	$(".number").fadeOut("slow");
	$.each($(".number"), function() {
		if ($(this).text() % inputNum === 0) {
			$(this).fadeIn("slow");
		}
	})
}

addDivs();
$(":submit").on('click', numberTest);