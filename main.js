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
    pauseTimer = 0;
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
    pointTimer = 0,
    askedArray = [],
    dead = false;

//start this puppy when the page is ready
//by displaying the instructions and nothing else
$(document).ready(function(){
    var hiscoreCheck = getCookie('hiscore'),
        lifeCheck = getCookie('life'),
        magCheck = getCookie('mag');
    if (hiscoreCheck != "" && hiscoreCheck != 0 && hiscoreCheck != null) {
        hiscore = hiscoreCheck;
        $("#hiscore div").html("Hiscore:<br/>HP "+lifeCheck+"%<br/>MAG "+magCheck);
        $("#hiscore div").show();
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
        console.log(data);
    })
    .always(function() {
        console.log( "complete" );
    });
});

//functions for adding/getting/deleting cookies
//used for semi-persistent hiscore stats (year long)
function createCookie(cname,cvalue,days) {
    if (days) {
        var date = new Date(),
            expires = "; expires=";
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires += date.toGMTString();
    }
    else var expires = "";
    document.cookie = cname+"="+cvalue+expires+"; path=/";
}

function getCookie(cname) {
    var cnameEQ = cname + "=",
        carray = document.cookie.split(';');
    for(var i=0;i < carray.length;i++) {
        var c = carray[i];
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
    $("#newGame div").hide();
    $("#winner").hide();
    $("#sure").hide();
    $("#choice").hide();
    $("#container").hide();
    $("#quiz").hide();
    $("#start").show();
    $("#splat").attr("src", "");
    $("#splat").hide();
    $(document).unbind("keydown");
    $(document).keydown(function(e){
        if (e.which == 13) {
            startGame();
        }
    });
    $("#startBtn").click(function() {
        startGame();
    });
}
//start watching for arrows+wasd keys and enter
//for controlling the actual game portion of the
//quiz
function letsMove() {
    $(document).unbind("keydown");
    $(document).keydown(function(e){
        if (!sureFlag && (e.which == 9 || e.which == 27)) {
            e.preventDefault();
            sureCheck();
        }
        if (!tauntFlag && !sureFlag  && (e.which == 37 || e.which == 65)) move("left");
        else if (!tauntFlag && !sureFlag && (e.which == 39 || e.which == 68)) move("right");
        else if (!tauntFlag && !sureFlag  && (e.which == 38 || e.which == 87)) move("up");
        else if (!tauntFlag && !sureFlag  && (e.which == 40 || e.which == 83)) move("down");
        if ( tauntFlag && !sureFlag && e.which == 13) closeTaunt();
        else if (splatFlag) closeSplat();
        else if (!tauntFlag && !sureFlag && !dead && e.which == 13) makeChoice();
    });
    $("#taunt").click(function() {
        closeTaunt();
    });
}
//lets define that movement!
function move(direct) {
    letsMove();
    spot = 1;
    if ($("#choice").next("span").hasClass("this4")) spot = 4;
    else if ($("#choice").next("span").hasClass("this3")) spot = 3;
    else if ($("#choice").next("span").hasClass("this2")) spot = 2;
    else if ($("#choice").next("span").hasClass("this1")) spot = 1;
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
    $(".this"+spot).before('<div id="choice" class="blink"><img src="images/right-select.png" /></div>');
    $(".choice").removeClass('choice');
    $(".this"+spot).addClass('choice');
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
    $(".choice").removeClass('choice');
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
    $(".this"+order).text(hardFlag == "easy" ? jumbleMngr[whiching].easy.a : jumbleMngr[whiching].hard.a);
    $(".this"+order).siblings("span").text(hardFlag == "easy" ? jumbleMngr[whiching].easy.h1 : jumbleMngr[whiching].hard.h1);
    $(".this"+order).parent("div").siblings("div").find("span").first("span").text(hardFlag == "easy" ? jumbleMngr[whiching].easy.h2 : jumbleMngr[whiching].hard.h2);
    $(".this"+order).parent("div").siblings("div").find("span").last("span").text(hardFlag == "easy" ? jumbleMngr[whiching].easy.h3 : jumbleMngr[whiching].hard.h3);
    $("#hero").attr("src", jumbleMngr[whiching].img);
    $("#taunt").find("h3").text(jumbleMngr[whiching].name+":");
    $("#taunt").find("span").text(jumbleMngr[whiching].quote);
}
//remove the taunt! start the timer!
function closeTaunt() {
    tauntFlag = false;
    $("#taunt").hide();
    $("#quiz").show();
    $("#choice").show();
    pointTimer = new Date();
}
//select your answer to stop the timer!
//good things happen if answer right!
//bad things happen if answer wrong!
function makeChoice() {
    var diffTimer = new Date(),
        difficultyMod = 0;
    if (pauseTimer > 0) {
        diffTimer += -1 * pauseTimer;
        pauseTimer = 0;
    }
    if (hardFlag === "easy") difficultyMod = 1000;
    else if (hardFlag === "hard") difficultyMod = 2000;
    located = $("#choice").next("span").hasClass("this"+order);
    diffTimer = difficultyMod -Math.ceil((diffTimer - pointTimer)/30);
    if (diffTimer < difficultyMod/10) diffTimer = (difficultyMod/10);
    if (located === true) {
        magnetite += diffTimer;
        $("#mag").text("MAG "+magnetite);
        splatIt(false);
    }
    else {
        hpDecrement();
    };
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
    $("#lost").attr("style", "--lost: "+(setHP)+";");
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
    $("#splat").show();
    splatFlag = true;
}
//closes splat popup and increments the
//internal floor counter. if you reach
//the 15th floor, you win!
function closeSplat(){
    $("#splat").attr("src", "");
    $("#splat").hide();
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
//check if the user is sure they want to start over
function sureCheck() {
    $("#sure").show();
    $("#choice").hide();
    sureFlag = true;
    sureResetAll();
}
//function to close the sure modal
function sureCancel(pauseDuration) {
    var tempTime = new Date();
    pauseTimer += tempTime - pauseDuration;
    $("#sure").hide();
    $("#sure").attr("tabindex",-1);
    $("#choice").show();
    $("#answers").focus();
    sureFlag = false;
    letsMove();
}
//ask user if they're sure they want to start
//all over after they press tab/esc mid-game
function sureResetAll() {
    paused = true;
    var tempTime = new Date();
    $("#sure").attr("tabindex",0);
    $("#sure").focus();
    $(document).unbind("keydown");
    $(document).keydown(function(e){
        if (e.which == 78 || (e.which == 13 && sureSpot === "no")) {
            sureCancel(tempTime);
        }
        if (e.which == 89 || (e.which == 13 && sureSpot === "yes")) resetAll(true);
        if (e.which == 39 || e.which == 68) sureMove("sureRight");
        else if (e.which == 37 || e.which == 65) sureMove("sureLeft");
        $("#sure span#y").hover(function() {
            sureSpot = "no";
            sureMove("sureLeft");
            $("#sure span#y").click(function() {
                resetAll(true);
            });
        })
        $("#sure span#n").hover(function() {
            sureSpot = "yes";
            sureMove("sureRight");
            $("#sure span#n").click(function() {
                sureCancel(tempTime);
            });
        })
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
//resets everything. really.
//also checks to see if you won and shows
//a hiscore if you did! try to beat it!
//dont worry, it wont reset!
function resetAll(bool) {
    if (winned === true) $("#hiscore div").show();
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
    if(bool === true) startMenu();
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
    $("#quiz").hide();
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
        if (e.which == 13) startGame();
    });
    dead = true;
    winned = true;
    score = Math.round(((10-setHP)/10)*magnetite);
    if (score > hiscore) {
        hiscore = score;
        var tempTag = "Hiscore:<br/>HP "+(100-(setHP*10))+"%<br/>MAG "+magnetite;
        $("#hiscore div").html(tempTag);
        createCookie('hiscore',hiscore,365);
        createCookie('life',(100-(setHP*10)),365);
        createCookie('mag',magnetite,365);
    }
    $("#winner").show();
    $("#container").hide();
    $("#quiz").hide();
    $("#winned").html("You did it! Your remaining Lifeforce was "+(100-(setHP*10))+"% and you earned "+magnetite+" Magnetite for confronting your demons! Well Done! Press <span>'Enter'</span> or tap/click here to Conquer Again...");
    if($("#restartBtn").length<1) $("#winner").append('<button id="restartBtn">Restart Journey</button>');
    $("#restartBtn").click(function() {
        startGame();
    });
}
function startGame() {
    $("#newGame div").show();
    $("#newGame div").click(function() {
        sureCheck();
    });
    $("#container").show();
    resetAll();
    $("#start").hide();
    $("#winner").hide();
};