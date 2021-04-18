//here come some flags, counters and other
//variables!
var jumbleMngr,
    whichOne = 0,
    order = 0,
    located = false,
    tauntFlag = true,
    splatFlag = false,
    sureFlag = false,
    winned = false,
    waneFlag = true,
    paused = false,
    hardFlag = "easy",
    floorCounter = 0,
    hiscore = 0,
    score = 0,
    magnetite = 0,
    setHP = 0,
    spot = 1,
    currentFloor = 651,
    moonCount = 7,
    sureSpot = "yes",
    pointTimer,
    askedArray = [],
    dead = false;
//start this puppy when the page is ready
//by displaying the instructions and nothing else
$(document).ready(function(){
    var hiscoreCheck = getCookie('hiscore');
    var lifeCheck = getCookie('life');
    var magCheck = getCookie('mag');
    if (hiscoreCheck != "" && hiscoreCheck != 0 && hiscoreCheck != null) hiscore = hiscoreCheck;
    if(magCheck != "" && magCheck != null) {
        $("#hiscore").html("Hiscore:<br/>HP "+lifeCheck+"%<br/>MAG "+magCheck);
        $("#hiscore").show();
    }
    jumbleMngr = $.getJSON( "data.json", function() {
        console.log( "success" );
    })
    .done(function(data) {
        jumbleMngr = (data.creature);
        startMenu();
    })
    .fail(function(data) {
        console.log( "error" );
    })
    .always(function() {
        console.log( "complete" );
    });
});

//functions for adding/getting/deleting cookies
//used for hiscore stats
function createCookie(cname,cvalue,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = cname+"="+cvalue+expires+"; path=/";
}

function getCookie(cname) {
    var cnameEQ = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(cnameEQ) == 0) return c.substring(cnameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(cname) {
    createCookie(cname,"",-1);
}

//start menu for instructions while making sure
//everything else hides
function startMenu() {
    $("#newGame").hide();
    $("#winner").hide();
    $("#start").show();
    $(document).unbind("keydown");
    $(document).keydown(function(e){
        if (paused === false && !sureFlag && !winned && e.which == 13) {
            $("#newGame").show();
            letsMove();
            pickIt();
            moonIf();
            $("#start").hide();
        }
        else if (paused === true && e.which == 13) {
            $("#newGame").show();
            $("#start").hide();
            paused = false;
            letsMove();
        }
    });
}
//start watching for arrows+wasd keys and enter
//for controlling the actual game portion of the
//quiz
function letsMove() {
    $(document).unbind("keydown");
    $(document).keydown(function(e){
        e.preventDefault();
        if (!paused && !sureFlag && e.which == 9) {
            sureResetAll();
            $("#sure").show();
            $("#choice").hide();
            sureFlag = true;
        }
        if (e.which == 27 && !paused) {
            paused = true;
            startMenu();
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
//lets define that movement!
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
//moves the flashing arrow...
//nifty, huh?
function spotRemoval() {
    $("#choice").remove();
    $("."+spot).before('<div id="choice" class="blink"><img src="images/right-select.png" /></div>');
}
//pick the demon using the length of the
//demonic array! check against another array
//to make sure the same question doesnt get
//asked more than once each quiz!
function pickIt(){
    whichOne = (randomInt(jumbleMngr.length)-1);
    if (floorCounter !== 15) askedAlready(whichOne);
    order = randomInt(4);
    letsDecide(whichOne);
    $("#choice").hide();
}
//random number generator that can be controlled
//based on questions above
function randomInt(max) {
    return Math.floor(Math.random()*max)+1;
}
//lets grab that question!
function letsDecide(whiching) {
    hardFlag = Math.random() < 0.5 ? "easy" : "hard" ;
    $("#quiz").find("p").text(hardFlag == "easy" ? jumbleMngr[whiching].easy.q : jumbleMngr[whiching].hard.q);
    $("."+order).text(hardFlag == "easy" ? jumbleMngr[whiching].easy.a : jumbleMngr[whiching].hard.a);
    $("."+order).siblings("span").text(hardFlag == "easy" ? jumbleMngr[whiching].easy.h1 : jumbleMngr[whiching].hard.h1);
    $("."+order).parent("div").siblings("div").find("span").first("span").text(hardFlag == "easy" ? jumbleMngr[whiching].easy.h2 : jumbleMngr[whiching].hard.h2);
    $("."+order).parent("div").siblings("div").find("span").last("span").text(hardFlag == "easy" ? jumbleMngr[whiching].easy.h3 : jumbleMngr[whiching].hard.h3);
    $(".hero").attr("src", jumbleMngr[whiching].img);
    $("#taunt").find("span").text(jumbleMngr[whiching].quote);
}
//remove the taunt! start the timer!
function closeTaunt() {
    tauntFlag=false;
    $("#taunt").hide();
    $("#choice").show();
    pointTimer = new Date();
}
//select your answer to stop the timer!
//good things happen if answer right!
//bad things happen if answer wrong!
function makeChoice() {
    var diffTimer = new Date();
    var difficultyMod = 0;
    if (hardFlag === "easy") difficultyMod = 1000;
    else if (hardFlag === "hard") difficultyMod = 2000;
    located = $("#choice").next("span").hasClass(order);
    diffTimer = difficultyMod -Math.ceil((diffTimer - pointTimer)/30);
    if (diffTimer < difficultyMod/10) diffTimer = (difficultyMod/10);
    if (located === true) {
        magnetite += diffTimer;
        $("#mag").text("MAG "+magnetite);
        splatIt(false);
    }
    else if (!located) {
        hpDecrement();
    }
}
//decrease hitpoints if wrongly answered
//and reset game if dead. try not to dead!
function hpDecrement() {
    setHP ++;
    hpMode();
    splatIt(true);
    if (setHP >= 10) {
        dead = true;
        splatIt(2);
    }
}
//function for hp bar. dont get it to zero!
//you will dead!
function hpMode() {
    $("#lost").attr("style", "width: "+(setHP*7)+"px; background-color: #a82244; position: relative; right: -"+(70-(setHP*7))+"px;");
    $("#hitpoints").attr("style", "width: "+(70-(setHP*7))+"px; background-color: #22a844; margin-left: 5px;");
}
//controls the popup on success or failure or
// dead. don't dead! the popup not worth it!
function splatIt(splat) {
    askedArray[askedArray.length] = whichOne;
    var splatter;
    if (splat === true) {
        splatter= "beaten.png";
    }
    else if (splat === 2) {
        splatter= "deaded.png";
    }
    else if (splat === false) {
        splatter = "conquered.png";
    }
    $("#splat").attr("src", "images/"+splatter);
    $("#splat").toggle();
    splatFlag = true;
}
//closes splat popup and increments the
//internal floor counter. if you reach
//the 15th floor, you win!
function closeSplat(){
    $("#splat").attr("src", "");
    $("#splat").toggle();
    spot = 1;
    spotRemoval();
    if (!dead) {
        floorCounter ++;
        if (floorCounter === 15) youWin();
        else {
            resetSome();
        }
    }
    else {
        resetAll();
        startMenu();
    }
}
//function to check if the question has
//already been asked. chooses a new number
//if it has
function askedAlready(newQ) {
    var len = askedArray.length;
    while (len--) {
        if (newQ === askedArray[len]) {
            whichOne = (randomInt(jumbleMngr.length)-1);
            askedAlready(whichOne);
            break;
        }
    }
}
//ask user if they're sure they want to start
//all over after they press tab mid-game
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
//movement for the sureness arrow keys and wasd.
//dont give up though! you can beat them!
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
//confirms their choice. please choose no!
function confirmReset() {
    if (sureSpot === "yes") resetAll();
    else if (sureSpot === "no") sureCancel();
}
//if they cancel their new game this function
//happens. and i happy inside.
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
//resets everything. really.
//also checks to see if you won and shows
//a hiscore if you did! try to beat it!
//dont worry, it wont reset!
function resetAll() {
    if (winned === true) $("#hiscore").show();
    var len = askedArray.length;
    while (len--) {
        askedArray.shift();
    }
    $("#winner").hide();
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
    $("#mag").text("MAG "+magnetite);
    hpMode();
    letsMove();
    resetSome();
}
//resets most things for the next question
//and sets the moon ahead a stage and picks
//the next demon
function resetSome() {
    whichOne = 0;
    order = 0;
    located = false;
    tauntFlag = true;
    splatFlag = false;
    sureFlag = false;
    $("#taunt").show();
    moonIf();
    pickIt();
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
    currentFloor = 652 + floorCounter;
    $("#floor").text("B"+currentFloor);
}
//those that reach down 15 floors win
function youWin() {
    $(document).unbind("keydown");
    $(document).keydown(function(e){
        if (e.which == 13) resetAll();
    });
    dead = true;
    winned = true;
    score = Math.round(((10-setHP)/10)*magnetite);
    if (score > hiscore) {
        hiscore = score;
        var tempTag = "Hiscore:<br/>HP "+(100-(setHP*10))+"%<br/>MAG "+magnetite;
        $("#hiscore").html(tempTag);
        createCookie('hiscore',hiscore,7);
        createCookie('life',(100-(setHP*10)),7);
        createCookie('mag',magnetite,7);
    }
    $("#winner").show();
    $("#winned").text("You did it! Your remaining Lifeforce was "+(100-(setHP*10))+"% and you earned "+magnetite+" Magnetite for confronting your demons! Well Done! Press 'Enter' to Conquer Again...");
}
