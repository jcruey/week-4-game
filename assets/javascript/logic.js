$(document).ready(function() {

// Game object with character attributes
var game = {

	clickEnemy: 0,
	clickChar: 0,
	chosenEnemy: "",
	chosenChar: "",
	charHealth: "",
	enemyHealth: "",

	characters: [{
        name: "Jon Snow",
        health: 120,
        image: "<img src='assets/images/jonsnowsm.jpg'>"
    },

    {
        name: "Ramsay Bolton",
        health: 100,
        image: "<img src='assets/images/ramsaysm.jpg'>"
    },

    {
        name: "Tormund Giantsbane",
        health: 130,
        image: "<img src='assets/images/Tormundsm.jpg'>"
    },

    {
        name: "Daario Naharis",
        health: 110,
        image: "<img src='assets/images/Daariosm.jpg'>"
    }],

    // function to create character buttons
    charList: function() {   
    	for (var i = 0; i < game.characters.length; i++) {

        var c = $('<button>');
        c.addClass("selChar " + game.characters[i].name);
        c.attr('data-name', game.characters[i].name);
        c.attr('data-health', game.characters[i].health);
        c.attr('data-index', i);
        c.html(game.characters[i].image);
        c.append("<p id='charTitle'>" + game.characters[i].name + "</p>" + " " + "<p id='charHealth'>" + game.characters[i].health + "</p>");

        $("#selCharpre").append(c);
    }
}    

};
	// Calls the charList function to display buttons
    game.charList();

    //Character select function
    $(".selChar").on("click", function(){
    	if (game.clickChar <=0) {
				$(this).siblings().removeClass("selChar").addClass("Enemies").attr('id', 'combatant');
				$('.selChar').appendTo('#selChar');
				$('.Enemies').appendTo("#Enemies");
				game.chosenChar = $(this).data("name");
				$(this).attr('id', "chosenChar");
				game.charHealth = $(this).data("health");
				game.clickChar ++;
			}
	});	
    //Enemy select function
    $('#Enemies').on('click', 'button', function() {
    		if (game.clickEnemy <= 0) {
    			$(this).removeClass("Enemies").addClass("Defender");
				$('.Defender').appendTo('#Defender');
				$(this).attr('id', "chosenEnemy");
				game.chosenEnemy = $(this).data("name");
				game.clickEnemy	 ++;
			} else {
				$('#results').html("You've already chosen " + game.chosenEnemy);
			}
	});

	//Attack button function
    $('#buttonAttack').on('click', 'button', function() {	
			//var charAttack = 8
			//var Enemy = $('#chosenEnemy').data('name');
			//$('#chosenEnemy').attr("#charHealth", - charAttack);
			//charAttack + 8;
			//$('#chosenChar').attr('#charHealth', - 25);
			alert("click handler working");
			//$('#results').html("You attacked " + game.chosenEnemy);

		
	});



});