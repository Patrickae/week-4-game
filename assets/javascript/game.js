
//define characters (objects)
// Ryu, Chun-Li, 


$(document).ready(function(){



var defenderNumber = "";
var isDefenderSelected = false;
var selectedNumber = "";
var yourPlayerNumber = "";
var yourOpponentNumber = "";

var opponentAttack;
var opponentHealth;
var ogUserAttack=0;
var userHealth;
var newUserAttack = 0;
var opponentsDefeated = 0;


var players = [
ryu = { name: "Ryu", healthPoints: 130, healthPointsName: "ryuHealth", counterAttackPower: 15, image:"ryu.png", value:"0", alive: true },
chunLi = {name: "Chun-Li", healthPoints: 150, healthPointsName: "chunLiHealth", counterAttackPower:15, image:"chun-li.png", value:"1", alive: true},
ken = {name: "Ken", healthPoints: 100, healthPointsName: "kenHealth", counterAttackPower: 15, image:"ken.png", value:"2", alive: true},
eHonda = {name: "E-Honda", healthPoints: 180, healthPointsName: "eHondaHealth", counterAttackPower: 15, image:"e-honda.png", value:"3", alive: true}
];


console.log(players[0].name);




function restart(){

					players = [
				ryu = { name: "Ryu", healthPoints: 130, healthPointsName: "ryuHealth", counterAttackPower: 15, image:"ryu.png", value:"0", alive: true },
				chunLi = {name: "Chun-Li", healthPoints: 150, healthPointsName: "chunLiHealth", counterAttackPower:15, image:"chun-li.png", value:"1", alive: true},
				ken = {name: "Ken", healthPoints: 100, healthPointsName: "kenHealth", counterAttackPower: 15, image:"ken.png", value:"2", alive: true},
				eHonda = {name: "E-Honda", healthPoints: 180, healthPointsName: "eHondaHealth", counterAttackPower: 15, image:"e-honda.png", value:"3", alive: true}
				];


				var opponentAttack = 0;
				var opponentHealth = 0;
				var ogUserAttack=0;
				var userHealth = 0;
				var newUserAttack =0;
				var opponentsDefeated = 0;

				var isDefenderSelected = false;


				var defenderNumber = "";
				var selectedNumber = "";
				var yourPlayerNumber = "";
				var yourOpponentNumber = "";

				$("#choose-opponent").hide();

				$("#choose-character").show();



				for(i=0; i<players.length; i++){

					$(".player-"+i+"-name").text(players[i].name);

					newImg = $("<img>");

					newImg.attr("src", "assets/images/"+players[i].image);

					$(".player-"+i+"-image").append(newImg);

					$(".player-"+i+"-health").text(players[i].healthPoints);
				};



				$(".defender-info").empty();
				$(".player-info").empty();
				$(".opponent-info").empty();




};


for(i=0; i<players.length; i++){

	$(".player-"+i+"-name").text(players[i].name);

	newImg = $("<img>");

	newImg.attr("src", "assets/images/"+players[i].image);

	$(".player-"+i+"-image").append(newImg);

	$(".player-"+i+"-health").text(players[i].healthPoints);
}




$("#choose-opponent").hide();





$(".potential-player").on("click", function(){




		console.log($(this).attr("value"));


		yourPlayerNumber = $(this).attr("value");

		$("#choose-character").hide();
		$("#choose-opponent").show();

		$(".my-player-name").text(players[yourPlayerNumber].name);

		newImg = $("<img>");

		newImg.attr("src", "assets/images/"+players[yourPlayerNumber].image);
		$(".my-player-image").append(newImg);

		$(".my-player-health").text(players[yourPlayerNumber].healthPoints);

		$(".player"+yourPlayerNumber+"-option").hide();

		console.log(isDefenderSelected);

		

		if (yourPlayerNumber === "0"){

			players[yourPlayerNumber].attackPower = Math.floor((Math.random() * 15) + 20);
		}
		else if (yourPlayerNumber === "1"){

			players[yourPlayerNumber].attackPower = Math.floor((Math.random() * 15) + 15);
		}
		else if (yourPlayerNumber === "2"){

			players[yourPlayerNumber].attackPower = Math.floor((Math.random() * 15) + 30);
		}
		else if(yourPlayerNumber === "3"){

			players[yourPlayerNumber].attackPower = Math.floor((Math.random() * 20) + 10);
		};



		console.log(players[yourPlayerNumber].attackPower);


});

$(".opponent").on("click", function(){

	if(isDefenderSelected === false){
			
				isDefenderSelected = true;
				console.log(isDefenderSelected);

				console.log($(this).attr("value"));

				yourOpponentNumber = $(this).attr("value");

				$(".player"+yourOpponentNumber+"-option").hide();

				$(".defender-name").text(players[yourOpponentNumber].name);

				newImg = $("<img>");

				newImg.attr("src", "assets/images/"+players[yourOpponentNumber].image);

				$(".defender-image").append(newImg);

				$(".defender-health").text(players[yourOpponentNumber].healthPoints);

					if (yourOpponentNumber === "0"){

						players[yourOpponentNumber].counterAttackPower = Math.floor((Math.random() * 15) + 5);
					}
					else if (yourOpponentNumber === "1"){

						players[yourOpponentNumber].counterAttackPower = Math.floor((Math.random() * 10) + 5);
					}
					else if (yourOpponentNumber === "2"){

						players[yourOpponentNumber].counterAttackPower = Math.floor((Math.random() * 15) + 8);
					}
					else if(yourOpponentNumber === "3"){

						players[yourOpponentNumber].counterAttackPower = Math.floor((Math.random() * 10) + 5);
					};








				players[yourOpponentNumber].counterAttackPower = Math.floor((Math.random() * 30) + 15);

	}
});


$("#attack-btn").on("click", function(){

	if (isDefenderSelected === true){


			console.log(players[yourOpponentNumber].counterAttackPower);

			opponentAttack = players[yourOpponentNumber].counterAttackPower;
			opponentHealth = players[yourOpponentNumber].healthPoints;

			// console.log(opponentAttack);
			// console.log(opponentHealth);

			ogUserAttack = players[yourPlayerNumber].attackPower;
			userHealth = players[yourPlayerNumber].healthPoints;



			// console.log(ogUserAttack);
			// console.log(userHealth);

			
			newUserAttack += ogUserAttack;

			console.log(newUserAttack);


			
			opponentHealth -= newUserAttack;


			if(opponentHealth > 0){

			userHealth -= opponentAttack;
		};

			players[yourOpponentNumber].healthPoints = opponentHealth;
			players[yourPlayerNumber].healthPoints = userHealth;



			$(".defender-health").text(players[yourOpponentNumber].healthPoints);
			$(".my-player-health").text(players[yourPlayerNumber].healthPoints);




	};

				if( opponentHealth < 1){

					players[yourOpponentNumber].alive = false;
					isDefenderSelected = false;

					opponentsDefeated += 1;

					$(".defender-info").empty();
			};



			if( userHealth < 1) {
				 alert("You have been defeated");

				 restart();

			};

			
			if(opponentsDefeated === 3){

				alert("You are the champion!");

				restart();
			};


	$("#reset-btn").on("click", restart());



});


// function updateDom( div, v){

// 	var newDiv = $("<div>");

// 	newDiv.text(v);


// 	$(div).append(newDiv);

// };




// function updateDom( div, v){

// 	var newDiv = $("<div>");

// 	newDiv.text(v);

// 	$(div).append(newDiv);

// };


// function updateDomHealth( div, v){

// 	var newDiv = $("<div>");

// 	newDiv.text(v);

// 	newDiv.addClass(players[i].healthPointsName);

// 	$(div).append(newDiv);

// };


// function updateDomImg( div, image, name){

// 	var newImg = $("<img>");

// 	newImg.addClass("player-option-image");

// 	newImg.attr("src", "assets/images/"+ image);

// 	$(div).append(newImg);

// };



// function startGame( div, name, image, health){

// updateDom(div, name);

// updateDomImg(div, image, name);

// updateDomHealth( div, health);

// };

// function playerSelected( div, name, image, health){

// updateDom(div, name);

// updateDomImg(div, image, name);

// updateDom( div, health);

// };

// function opponentSelected( div, name, image, health){

// updateDom(div, name);

// updateDomImg(div, image, name);

// updateDomHealth( div, health);

// };


// for(i=0; i<players.length; i++){


// 	var playerContainer = $("<div>");

// 	playerContainer.attr("id", players[i].value);

// 	playerContainer.addClass("col-xs-3 player-option");

// 	startGame(playerContainer, players[i].name, players[i].image, players[i].healthPoints)

// 	$("#players-div").append(playerContainer);

// };





// for(i=0; i<players.length; i++){


// 	var playerContainer = $("<div>");

// 	playerContainer.addClass("col-xs-3 your-opponents");

// 	playerContainer.attr("id", players[i].name);


// 	startGame(playerContainer, players[i].name, players[i].image, players[i].healthPoints)

// 	$("#opponents-div").append(playerContainer);

// };



// $(".your-opponents").hide();






// $(".player-option").on("click", function(){



// 	$(".your-opponents").show();


// 	selectedNumber = this.id;

// 	console.log(selectedNumber);

// 	playerSelected("#my-player-div", players[selectedNumber].name, players[selectedNumber].image, players[selectedNumber].healthPoints);


// 	$("#"+players[selectedNumber].name).hide();

	
// 	$(".player-option").hide();

// 	players[selectedNumber].attackPower = Math.floor((Math.random() * 15) + 6);


// });




// $(".your-opponents").on("click", function(){


// 	console.log(this.id);

// 	defenderId = this.id;

// 	if(defenderId === "Ryu"){
// 		defenderNumber = 0;
// 	}
// 	else if(defenderId === "Chun-Li"){
// 		defenderNumber = 1;
// 	}
// 	else if (defenderId === "Ken"){
// 		defenderNumber = 2;
// 	}
// 	else if (defenderId === "E-Honda"){
// 		defenderNumber = 3;
// 	};

// 	opponentSelected("#defender-div", players[defenderNumber].name, players[defenderNumber].image, players[defenderNumber].healthPoints);

// 	$("#"+players[defenderNumber].name).hide();


// });





// $("#attack-btn").on("click", function(){


// 	players[defenderNumber].healthPoints - players[selectedNumber].attackPower;





// });


























});