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
    jumbleMngr = [(cthulhu = new jumble("cthulhu", "While Cthulhu has been greatly popularized by many modern games, but what story started it all?", "Call of Cthulhu", "The Hobbit", "Harry Potter", "Necronomicon", "images/KazumaKaneko-Cthulu.jpg", "CTHULHU: PH'NGLUI MGLW'NAFH CTHULHU R'LYEH WGAH'NAGL FHTAGN!!!")), (arachne = new jumble("arachne", "Arachne claimed she was the best at her profession and challenged an angered Athena to a contest over the title. What was Arachne?", "Weaver", "Poet", "Tactician", "Baker", "images/KazumaKaneko-Arachne.jpg", "ARACHNE: Fufufufu... Let's wrap this up quickly!")), (cuChulainn = new jumble("cuChulainn", 'Cu Chulainn means "The Hound of Ulster," a title he received in honor of his bravery in battle and devotion to Ulster. Where did his story originate?', "Ireland", "Scotland", "Wales", "England", "images/KazumaKaneko-CuChulainn.jpg", "CU CHULAINN: By my strength, this spear will not let you pass!"))],
    whichOne = 0,
    order = 0,
    located = false,
    tauntFlag = true,
    splatFlag = false,
    sureFlag = false,
    waneFlag = true,
    floorCounter = 0,
    magnetite = 0,
    setHP = 0,
    spot = 1,
    currentFloor = 651,
    moonCount = 7,
    sureSpot = "yes",
    pointTimer,
    dead = false;
//start this puppy when the page is ready
$(document).ready(function(){
    startMenu();
});
//start menu for instructions
function startMenu() {
    $("#newGame").hide();
    $("#start").show();
    $(document).unbind("keydown");
    $(document).keydown(function(e){
        if (!sureFlag && e.which == 13) {
            $("#newGame").show();
            letsMove();
            pickIt();
            moonIf();
            $("#start").hide();
        }
    });
}
//start watching for arrows+wasd keys and enter
function letsMove() {
    $(document).unbind("keydown");
    $(document).keydown(function(e){
        e.preventDefault();
        if (!sureFlag && e.which == 9) {
            sureResetAll();
            $("#sure").show();
            $("#taunt").hide();
            $("#choice").hide();
            sureFlag = true;
        }
        if (!tauntFlag && !sureFlag  && e.which == 37 || e.which == 65) move("left");
        else if (!tauntFlag && !sureFlag && e.which == 39 || e.which == 68) move("right");
        else if (!tauntFlag && !sureFlag  && e.which == 38 || e.which == 87) move("up");
        else if (!tauntFlag && !sureFlag  && e.which == 40 || e.which == 83) move("down");
        if ( tauntFlag && !sureFlag && e.which == 13) closeTaunt();
        else if (splatFlag) closeSplat();
        else if (!tauntFlag && !sureFlag && !dead && e.which == 13) makeChoice();
    });
}
//pick the demon!
function pickIt(){
    whichOne = randomInt(jumbleMngr.length);
    order = randomInt(4);
    letsDecide(whichOne);
    $("#choice").hide();
}
//lets define some movement
function move(direct) {
    letsMove();
    spot = 1;
    if ($("#choice").next("span").hasClass("4")) spot = 4;
    else if ($("#choice").next("span").hasClass("3")) spot = 3;
    else if ($("#choice").next("span").hasClass("2")) spot = 2;
    else if ($("#choice").next("span").hasClass("1")) spot = 1;
    else {return;}
    if (direct == "up" && spot !== 1 && spot !== 3) spot --;
    else if (direct == "down" && spot !== 2 && spot !== 4) spot ++;
    else if (direct == "right" && spot !== 3 && spot !== 4) spot += 2;
    else if (direct == "left" && spot !== 1 && spot !== 2) spot -= 2;
    spotRemoval();
}
//moves the flashing arrow for choices
function spotRemoval() {
    $("#choice").remove();
    $("."+spot).before('<div id="choice" class="blink"><img src="images/right-select.png" /></div>');
}
//random number generator that can be controlled based on
//questions added
function randomInt(max) {
    return Math.floor(Math.random()*max)+1;
}
//lets figure out which question to grab
function letsDecide(whiching) {
    whiching --;
    $("#quiz").find("p").text(jumbleMngr[whiching].question);
    $("."+order).text(jumbleMngr[whiching].correct);
    $("."+order).siblings("span").text(jumbleMngr[whiching].herring1);
    $("."+order).parent("div").siblings("div").find("span").first("span").text(jumbleMngr[whiching].herring2);
    $("."+order).parent("div").siblings("div").find("span").last("span").text(jumbleMngr[whiching].herring3);
    $(".hero").attr("src", jumbleMngr[whiching].imgSrc);
    $("#taunt").find("span").text(jumbleMngr[whiching].taunt);
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
        splatIt(false);
    }
    else if (!located) {
        hpDecrement();
    }
}
//decrease hitpoints if wrongly answered
//and reset game if dead
function hpDecrement() {
    setHP ++;
    hpMode();
    splatIt(true);
    if (setHP >= 10) {
        dead = true;
        splatIt(2);
    }
}
//controls the popup on success or failure
// or dead
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
//closes splat popup an increments
//internal floor counter
function closeSplat(){
    $("#splat").attr("src", "");
    spot = 1;
    spotRemoval();
    if (!dead) {
        floorCounter ++;
        if (floorCounter === 15) youWin();
        nextDemon();
    }
    else {
        resetAll();
        startMenu();
    }
}
//ask user if they're sure they want to start
//all over
function sureResetAll() {
    $(document).unbind("keydown");
    $(document).keydown(function(e){
        if (e.which == 78) {
            sureCancel();
        }
        if (e.which == 89) resetAll();
        if (e.which == 39 || e.which == 68) sureMove("sureRight");
        else if (e.which == 37 || e.which == 65) sureMove("sureLeft");
        if (e.which == 13) confirmReset();
    });
}
//movement for the sureness arrow keys and wasd
function sureMove(direct) {
    if (direct === "sureRight" && sureSpot === "yes") {
        $("#y").removeClass("blink");
        $("#n").addClass("blink");
        sureSpot = "no";
        return;
    }
    else if (direct === "sureLeft" && sureSpot === "no") {
        $("#n").removeClass("blink");
        $("#y").addClass("blink");
        sureSpot = "yes";
        return;
    }
}
//confirms their choice
function confirmReset() {
    if (sureSpot === "yes") resetAll();
    else if (sureSpot === "no") sureCancel();
}
//if they cancel their new game
function sureCancel() {
    sureFlag = false;
    sureSpot = "yes";
    $("#sure").hide();
    $("#n").removeClass("blink");
    $("#y").addClass("blink");
    letsMove();
    if (!tauntFlag) $("#choice").show();
    else { $("#taunt").show(); }
}
//resets everything
function resetAll() {
    waneFlag = true;
    sureFlag = false;
    sureSpot = "yes";
    $("#sure").hide();
    $("#n").removeClass("blink");
    $("#y").addClass("blink");
    magnetite = 0;
    floorCounter = 0;
    dead = false;
    setHP = 0;
    moonCount = 7;
    currentFloor = 651;
    $("#mag").text(magnetite);
    hpMode();
    letsMove();
    resetSome();
}
//resets most things for next question
function resetSome() {
    whichOne = 0;
    order = 0;
    located = false;
    tauntFlag = true;
    splatFlag = false;
    sureFlag = false;
    $("#taunt").show();
    pickIt();
}
//brings up the next demonic question
function nextDemon() {
    moonIf();
    resetSome();
}
//function for hp bar
function hpMode() {
    $("#lost").attr("style", "width: "+(setHP*7)+"px; background-color: #a82244; position: relative; right: -"+(70-(setHP*7))+"px;");
    $("#hitpoints").attr("style", "width: "+(70-(setHP*7))+"px; background-color: #22a844; margin-left: 5px;");
}
//block of ifs for moon phases as
//well as floor incrementer
function moonIf() {
    if (!waneFlag) moonCount ++;
    else {moonCount --;}
    var phase;
    if (moonCount === 0 ) waneFlag = false;
    if (moonCount === 8 ) waneFlag = true;
    if (moonCount === 0) phase = "NEW MOON";
    else if (moonCount === 4) phase = "HALF MOON";
    else if (moonCount === 8) phase = "FULL MOON";
    else {phase = moonCount+"/8 MOON";}
    $("#moon").text(phase);
    currentFloor ++;
    $("#floor").text("B"+currentFloor);
}
//those that reach down 15 floors win
function youWin() {
    alert("You did it! Your remaining lifeforce was "+(100-(setHP*10))+"% and you earned "+magnetite+" magnetite for confronting your demons! Well Done!");
}