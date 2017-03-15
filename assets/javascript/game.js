
//define characters (objects)
// Ryu, Chun-Li, 


$(document).ready(function(){



	var isDefenderSelected = false;
	var yourPlayerNumber = "";
	var yourOpponentNumber = "";

	var opponentAttack= 0;
	var opponentHealth = 0;
	var ogUserAttack=0;
	var newUserAttack = 0;
	var userHealth = 0;
	var opponentsDefeated = 0;


	var players = [			
	ryu = { name: "Ryu", 
	healthPoints: 130,  
	counterAttackPower: "", 
	image:["ryugif.gif", "ryu.png"],
	value:"0" },

	chunLi = {name: "Chun-Li", 
	healthPoints: 150, 
	counterAttackPower:"", 
	image: ["chunligif.gif","chun-li.png"],
	value:"1"},

	ken = {name: "Ken", 
	healthPoints: 100, 
	counterAttackPower: "", 
	image:["kengif.gif", "ken.png"],
	value:"2"},

	eHonda = {name: "E-Honda", 
	healthPoints: 180, 
	counterAttackPower: "", 
	image:["ehondagif.gif", "e-honda.png"],
	value:"3"}
	];


// console.log(players[0].name);



for(i=0; i<players.length; i++){

	$(".player-"+i+"-name").text(players[i].name);

	newImg = $("<img>");

	newImg.attr("src", "assets/images/"+players[i].image[1]);

	$(".player-"+i+"-image").append(newImg);

	$(".player-"+i+"-health").text(players[i].healthPoints);
};




$("#choose-opponent").hide();
$(".panel-success").hide();
$(".panel-danger").hide();





$(".potential-player").on("click", function(){


			// console.log($(this).attr("value"));


			yourPlayerNumber = $(this).attr("value");

			$(".panel-success").show();
			$("#choose-character").hide();
			$("#choose-opponent").show();

			$(".my-player-name").text(players[yourPlayerNumber].name);

			newImg = $("<img>");

			newImg.attr("src", "assets/images/"+players[yourPlayerNumber].image[0]);
			$(".my-player-image").append(newImg);

			$(".my-player-health").text(players[yourPlayerNumber].healthPoints);

			$(".player"+yourPlayerNumber+"-option").hide();

			// console.log(isDefenderSelected);


			if (yourPlayerNumber === "0"){

				players[yourPlayerNumber].attackPower = Math.floor((Math.random() * 10) + 20);
			}
			else if (yourPlayerNumber === "1"){

				players[yourPlayerNumber].attackPower = Math.floor((Math.random() * 15) + 15);
			}
			else if (yourPlayerNumber === "2"){

				players[yourPlayerNumber].attackPower = Math.floor((Math.random() * 10) + 20);
			}
			else if(yourPlayerNumber === "3"){

				players[yourPlayerNumber].attackPower = Math.floor((Math.random() * 20) + 10);
			};



			// console.log(players[yourPlayerNumber].attackPower);


		});

$(".opponent").on("click", function(){

	$(".panel-danger").show();

	if(isDefenderSelected === false){

		isDefenderSelected = true;
						// console.log(isDefenderSelected);

						// console.log($(this).attr("value"));

						yourOpponentNumber = $(this).attr("value");

						$(".player"+yourOpponentNumber+"-option").hide();

						$(".defender-name").text(players[yourOpponentNumber].name);

						newImg = $("<img>");

						newImg.attr("src", "assets/images/"+players[yourOpponentNumber].image[0]);
						$(".defender-image").append(newImg);

						$(".defender-health").text(players[yourOpponentNumber].healthPoints);



						if (yourOpponentNumber === "0"){

							players[yourOpponentNumber].counterAttackPower = Math.floor((Math.random() * 25) + 25);
						}
						else if (yourOpponentNumber === "1"){

							players[yourOpponentNumber].counterAttackPower = Math.floor((Math.random() * 15) + 35);
						}
						else if (yourOpponentNumber === "2"){

							players[yourOpponentNumber].counterAttackPower = Math.floor((Math.random() * 20) + 35);
						}
						else if(yourOpponentNumber === "3"){

							players[yourOpponentNumber].counterAttackPower = Math.floor((Math.random() * 10) + 25);
						};

					};
				});


$("#attack-btn").on("click", function(){

	if (isDefenderSelected === true){


						// console.log(players[yourOpponentNumber].counterAttackPower);

						opponentAttack = players[yourOpponentNumber].counterAttackPower;
						opponentHealth = players[yourOpponentNumber].healthPoints;

						// console.log(opponentAttack);
						// console.log(opponentHealth);

						ogUserAttack = players[yourPlayerNumber].attackPower;
						userHealth = players[yourPlayerNumber].healthPoints;

						// console.log(ogUserAttack);
						// console.log(userHealth);

						
						newUserAttack += ogUserAttack;

						// console.log(newUserAttack);

						opponentHealth -= newUserAttack;


						if(opponentHealth > 0){

							userHealth -= opponentAttack;
						};



						players[yourOpponentNumber].healthPoints = opponentHealth;
						players[yourPlayerNumber].healthPoints = userHealth;


						$(".defender-health").text(players[yourOpponentNumber].healthPoints);
						$(".my-player-health").text(players[yourPlayerNumber].healthPoints);

					// };



					if( opponentHealth < 1){

						isDefenderSelected = false;
						opponentsDefeated += 1;

						$(".defender-info").empty();
					};



					if( userHealth < 1) {

						alert("You have been defeated");
						location.reload();
					};

					
					if(opponentsDefeated === 3){

						alert("You are the champion!");
						location.reload();
					};




				};

				

			});
$("#reset-btn").on("click", function(){

	location.reload();
});



});