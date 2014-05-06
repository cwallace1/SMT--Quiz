//lets build an array of objects for answers
//and questions!
var jumble = function demon(eyeDee, question, correct, herring1, herring2, herring3, imgSrc, taunt){
    this.eyeDee = eyeDee;
    this.question = question;
    this.correct = correct;
    this.herring1 = herring1;
    this.herring2 = herring2;
    this.herring3 = herring3;
    this.imgSrc = imgSrc;
    this.taunt = taunt;
},
    cthulhu = new jumble("cthulhu", "While Cthulhu has been greatly popularized by many modern games, but what story started it all?", "Call of Cthulhu", "The Hobbit", "Harry Potter", "Necronomicon", "images/KazumaKaneko-Cthulu.jpg", "CTHULHU: PH'NGLUI MGLW'NAFH CTHULHU R'LYEH WGAH'NAGL FHTAGN!!!"),
    arachne = new jumble("arachne", "Arachne claimed she was the best at her profession and challenged an angered Athena to a contest over the title. What was Arachne?", "Weaver", "Poet", "Tactician", "Baker", "images/KazumaKaneko-Arachne.jpg", "ARACHNE: Fufufufu... Let's wrap this up quickly!"),
    cuChulainn = new jumble("cuChulainn", 'Cu Chulainn means "The Hound of Ulster" for his bravery in battle and devotion to Ulster. Where did his story originate?', "Ireland", "Scotland", "Wales", "England", "images/KazumaKaneko-CuChulainn.jpg", "CU CHULAINN: By my strength, this spear will not let you pass!"),
    whichOne = 0,
    howMany = 3,
    order = 0,
    located = false,
    tauntFlag = true,
    splatFlag = false,
    magnetite = 0,
    setHP = 0,
    pointTimer,
    dead = false;
//start this puppy when the page is ready
$(document).ready(function(){
    letsMove();
    pickIt();
});
//start watching for arrows+wasd keys and enter
function letsMove() {
    $(document).unbind();
    $(document).keydown(function(e){
        if (!tauntFlag && e.which == 37 || e.which == 65) move("left");
    });
    $(document).keydown(function(e){
        if (!tauntFlag && e.which == 38 || e.which == 87) move("up");
    });
    $(document).keydown(function(e){
        if (!tauntFlag && e.which == 40 || e.which == 83) move("down");
    });
    $(document).keydown(function(e){
        if (!tauntFlag && e.which == 39 || e.which == 68) move("right");
    });
    $(document).keypress(function(e){
        if ( tauntFlag && e.which == 13) closeTaunt();
        else if (splatFlag) closeSplat();
        else if (!tauntFlag && !dead && e.which == 13) makeChoice();
    });
}
//pick the demon!
function pickIt(){
    whichOne = randomInt(howMany);
    order = randomInt(4);
    letsDecide(whichOne);
    $("#choice").hide();
}
//lets define some movement
function move(direct) {
    letsMove();
    var spot=0;
    if ($("#choice").next("span").hasClass("4")) spot=4;
    else if ($("#choice").next("span").hasClass("3")) spot=3;
    else if ($("#choice").next("span").hasClass("2")) spot=2;
    else if ($("#choice").next("span").hasClass("1")) spot=1;
    else {return;}
    if (direct == "up" && spot !== 1 && spot !== 3) spot-=1;
    else if (direct == "down" && spot !== 2 && spot !== 4) spot+=1;
    else if (direct == "right" && spot !== 3 && spot !== 4) spot+=2;
    else if (direct == "left" && spot !== 1 && spot !== 2) spot-=2;
    else {return;}
    $("#choice").remove();
    $("."+spot).before('<div id="choice" class="blink"><img src="images/right-select.png" /></div>');
}
//lets define some enter buttons
function gener8(whatID) {
    $("#quiz").find("p").text(whatID.question);
    $("."+order).text(whatID.correct);
    $("."+order).siblings("span").text(whatID.herring1);
    $("."+order).parent("div").siblings("div").find("span").first("span").text(whatID.herring2);
    $("."+order).parent("div").siblings("div").find("span").last("span").text(whatID.herring3);
    $(".hero").attr("src", whatID.imgSrc);
    $("#taunt").find("span").text(whatID.taunt);
}
//random number generator that can be controlled based on
//questions added
function randomInt(max) {
    return Math.floor(Math.random()*max)+1;
}
//lets figure out which question to grab
function letsDecide(whiching) {
    if (whiching === 1) gener8(cthulhu);
    else if (whiching === 2) gener8(arachne);
    else if (whiching === 3) gener8(cuChulainn);
}
//remove the taunt!
function closeTaunt() {
    tauntFlag=false;
    $("#taunt").hide();
    $("#choice").show();
    pointTimer = new Date();
}
//select your answer!
function makeChoice() {
    located = $("#choice").next("span").hasClass(order);
    var diffTimer = new Date();
    diffTimer = 1000-Math.ceil((diffTimer - pointTimer)/20);
    if (diffTimer < 100) diffTimer = 100;
    if (located === true) {
        magnetite += diffTimer;
        $("#mag").text(magnetite);
        splatIt(false)
    }
    else if (!located) {
        hpDecrement();
    }
}
//decrease hitpoints if wrongly answered
function hpDecrement() {
    setHP += 1;
    $("#lost").attr("style", "width: "+(setHP*7)+"px; background-color: #a82244; position: relative; right: -"+(70-(setHP*7))+"px;");
    $("#hitpoints").attr("style", "width: "+(70-(setHP*7))+"px; background-color: #22a844; margin-left: 5px;");
    splatIt(true);
    if (setHP >= 10) {
       dead = true;
       deadness();
    }
}
//if you run out of hitpoints
function deadness() {
       splatIt(2);
}
//controls the popup on success or failure
function splatIt(splat) {
    if (splat === true) {
        $("#splat").attr("src", "images/beaten.png");
        splatFlag = true;
    }
    else if (splat === 2) {
        $("#splat").attr("src", "images/deaded.png");
        splatFlag = true;
    }
    else if (splat === false) {
        $("#splat").attr("src", "images/conquered.png");
        splatFlag = true;
    }
}
//closes splat popup
function closeSplat(){
    splatFlag = false;
    $("#splat").attr("src", "");
    resetAll();
}
//resets current everything
function resetAll(){
    whichOne = 0;
    howMany = 3;
    order = 0;
    located = false;
    tauntFlag = true;
    splatFlag = false;
    magnetite = 0;
    setHP = 0;
    dead = false;
    $("#quiz").find("p").text("");
    $("."+order).text("");
    $("."+order).siblings("span").text("");
    $("."+order).parent("div").siblings("div").find("span").first("span").text("");
    $("."+order).parent("div").siblings("div").find("span").last("span").text("");
    $(".hero").attr("src", "");
    $("#taunt").find("span").text("");
    pickIt();
}