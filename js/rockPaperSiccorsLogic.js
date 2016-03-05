var userValue = null;
var aiValue;
var won = 0; var lost = 0; var tie = 0;
$(document).ready(function() {
	$("#rock").click(function() {
		$("#paper img, #scissor img").css("border","none");
		$("#rock img").css("border","1px solid black");
		userValue = document.getElementById("rock");
		userValue = 1;
		//console.log(userValue);
	});

	$("#paper").click(function() {
		$("#rock img, #scissor img").css("border","none");
		$("#paper img").css("border","1px solid black");
		userValue = document.getElementById("paper");
		userValue = 2;
		//console.log(userValue);
	});

	$("#scissor").click(function() {
		$("#paper img, #rock img").css("border","none");
		$("#scissor img").css("border","1px solid black");
		userValue = document.getElementById("scissor");
		userValue = 3;
		//console.log(userValue);
	});

	$("#submitButton").click(function() {
		//Random Value
		aiValue = Math.floor((Math.random() * 3) + 1);

		if (userValue == null) {
			alert("Please select a value.");
			return false;
		};

		//The Games Logic
		if(userValue == 1 && aiValue == 2 || userValue == 2 && aiValue == 3
			|| userValue == 3 && aiValue == 1) {
			$("#line1").css("color","red");
			document.getElementById("line1").innerHTML = "AI is the WINNER!!, You Lost :(";
			document.getElementById("line2").innerHTML = "You have Picked: " + numberToValue(userValue);
			document.getElementById("line3").innerHTML = "AI has Picked: " + numberToValue(aiValue);
			lost = lost + 1;
			document.getElementById("lostCount").innerHTML = lost;
			//console.log("AI is the WINNER!!");
			//console.log("You have Picked: " + numberToValue(userValue));
			//console.log("AI has Picked: " + numberToValue(aiValue));
			//console.log("----------------------");
		} else if(userValue == 1 && aiValue == 3 || userValue == 2 && aiValue == 1
			|| userValue == 3 && aiValue == 2) {
			$("#line1").css("color","green");
			document.getElementById("line1").innerHTML = "You are the WINNER!!";
			document.getElementById("line2").innerHTML = "You have Picked: " + numberToValue(userValue);
			document.getElementById("line3").innerHTML = "AI has Picked: " + numberToValue(aiValue);
			won = won + 1;
			document.getElementById("wonCount").innerHTML = won;
			//console.log("You are the WINNER!!");
			//console.log("You have Picked: " + numberToValue(userValue));
			//console.log("AI has Picked: " + numberToValue(aiValue));
			//console.log("----------------------");
		} else if (userValue == 1 && aiValue == 1 || userValue == 2 && aiValue == 2
			|| userValue == 3 && aiValue == 3) {
			$("#line1").css("color","brown");
			document.getElementById("line1").innerHTML = "There is a TIE!!";
			document.getElementById("line2").innerHTML = "You have Picked: " + numberToValue(userValue);
			document.getElementById("line3").innerHTML = "AI has Picked: " + numberToValue(aiValue);
			tie = tie + 1;
			document.getElementById("tieCount").innerHTML = tie;
			//console.log("There is a TIE!!");
			//console.log("You have Picked: " + numberToValue(userValue));
			//console.log("AI has Picked: " + numberToValue(aiValue));
			//console.log("----------------------");
		}

		$("#resetButton").click(function() {
			$("#line1").text("");
			$("#line2").text("");
			$("#line3").text("");
			$("#wonCount").text("0");
			$("#lostCount").text("0");
			$("#tieCount").text("0");
			console.log("the game has been reset.");
		});

		function numberToValue(num) {
			var num;
			if (num == 1) {
				num = "Rock!";
				return num;
			} else if (num == 2) {
				num = "Paper!";
				return num;
			} else {
				num = "Scissor!";
				return num;
			}
		}
	});
});