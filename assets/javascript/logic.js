$(document).ready(function() {

var game = {

	characters: [{
        name: "Jon Snow",
        attack: 6,
        counterattack: 25,
        health: 120,
        image: "<img src='assets/images/jonsnowsm.jpg'>"
    },

    {
        name: "Ramsay Bolton",
        attack: 4,
        counterattack: 25,
        health: 100,
        image: "<img src='assets/images/ramsaysm.jpg'>"
    },

    {
        name: "Tormund Giantsbane",
        attack: 8,
        counterattack: 25,
        health: 130,
        image: "<img src='assets/images/Tormundsm.jpg'>"
    },

    {
        name: "Daario Naharis",
        attack: 5,
        counterattack: 25,
        health: 110,
        image: "<img src='assets/images/Daariosm.jpg'>"
    }],

    charList: function() {   
    	for (var i = 0; i < game.characters.length; i++) {

        var c = $('<button>');
        c.addClass("selChar " + game.characters[i].name);
        c.attr('data-index', i);
        c.html(game.characters[i].image);
        c.append("<p id='charTitle'>" + game.characters[i].name + "</p>" + " " + "<p id='charHealth'>" + game.characters[i].health + "</p>");

        $("#selCharpre").append(c);
    }
}    

};

    game.charList();

    //Character select function
    $(".selChar").on("click", function(){
				$(this).siblings().removeClass("selChar").addClass("Enemies");
				$('.selChar').appendTo('#selChar');
				$('.Enemies').appendTo("#Enemies");
	});	
    //Enemy select function
    $(".Enemies").on("click", function(){
    			$(this).removeClass("Enemies").addClass("Defender");
				$('.Defender').appendTo('#Defender');
				console.log(this);
	});

});