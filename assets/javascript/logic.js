$(document).ready(function() {

	var jonSnow = {
        name: "Jon Snow",
        attack: 50,
        health: 120,
        image: "<img src='assets/images/jonsnowsm.jpg'>"
    }

    var ramBolton = {
        name: "Ramsay Bolton",
        attack: 50,
        health: 100,
        image: "<img src='assets/images/ramsaysm.jpg'>"
    }

    var torGiant = {
        name: "Tormund Giantsbane",
        attack: 50,
        health: 130,
        image: "<img src='assets/images/Tormundsm.jpg'>"
    }

    var daarNahar = {
        name: "Daario Naharis",
        attack: 50,
        health: 110,
        image: "<img src='assets/images/Daariosm.jpg'>"
    }

    var characters = [jonSnow, ramBolton, torGiant, daarNahar];
   

    // Character selection
    for (var i = 0; i < characters.length; i++) {

        var c = $('<button>').addClass("selChar")
        c.attr('data-char', characters[i].name)
        c.html(characters[i].image); 

        $("#selCharpre").append(c);
    }

    //Character select function
    $(".selChar").on("click", function(){
				$(this).siblings().removeClass("selChar").addClass("Enemies");
				$('.selChar').appendTo('#selChar');
				$('.Enemies').appendTo("#Enemies");
	});	
    //Enemy select function
    $(".Enemies").on("click", function(){
    			$('#Enemies').removeClass("Enemies").addClass("Defender");
				$('.Defender').appendTo('#Defender');
	});

});