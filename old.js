//lets create a way to create objects!
//go deep.
var jumble = function demon(eyeDee, question, correct, herring1, herring2, herring3, imgSrc, taunt, difficulty){
    this.eyeDee = eyeDee;
    this.question = question;
    this.correct = correct;
    this.herring1 = herring1;
    this.herring2 = herring2;
    this.herring3 = herring3;
    this.imgSrc = imgSrc;
    this.taunt = taunt;
    this.difficulty = difficulty;
},
//lets build an array of the objects for answers
//and questions and use a manager to keep them
//in line and make them using the function above!
//we need to go deeper.
    jumbleMngr = [(cthulhu1 = new jumble("cthulhu1", "While Cthulhu has been greatly popularized by many modern games, but what story started it all?", "Call of Cthulhu", "The Hobbit", "Harry Potter", "Necronomicon", "images/KazumaKaneko-Cthulu.jpg", "CTHULHU: PH'NGLUI MGLW'NAFH CTHULHU R'LYEH WGAH'NAGL FHTAGN!!!", "easy")),
        (cthulu2 = new jumble("cthulhu2", "Cthulhu was the brain child of H.P. Lovecraft, but among this selection of his works, which did not mention Cthulhu?", "Dagon", "The Dunwich Horror", "Whisperer in Darkness", "Mountains of Madness", "images/KazumaKaneko-Cthulu.jpg", "CTHULHU: PH'NGLUI MGLW'NAFH CTHULHU R'LYEH WGAH'NAGL FHTAGN!!!", "hard")),
        (arachne1 = new jumble("arachne1", "Arachne claimed she was the best at her profession and challenged the goddess Athena to a contest over the title. What was Arachne?", "Weaver", "Poet", "Tactician", "Baker", "images/KazumaKaneko-Arachne.jpg", "ARACHNE: Fufufufu... Look what has wandered into my web... Let's wrap this up quickly!", "easy")),
        (arachne2 = new jumble("arachne2", "After losing to Athena in the contest, Arachne hung herself. Athena, moved to 'mercy,' gave her life, but used this goddess' potion to curse Arachne to share the form of a spider and weave for all time.", "Hecate", "Styx", "Selene", "Aphrodite", "images/KazumaKaneko-Arachne.jpg", "ARACHNE: Fufufufu... Look what has wandered into my web... Let's wrap this up quickly!", "hard")),
        (cuChulainn1 = new jumble("cuChulainn1", 'Cu Chulainn means "The Hound of Ulster," a title he received in honor of his bravery in battle and devotion to Ulster. Where did his story originate?', "Ireland", "Gaul", "Wales", "England", "images/KazumaKaneko-CuChulainn.jpg", "CU CHULAINN: By my strength, this spear will not let you pass!", "easy")),
        (cuChulainn2 = new jumble("cuChulainn2", 'Cu Chulainn means "The Hound of Ulster," a title he received in honor of his bravery in battle and devotion to Ulster. What was his birth name?', "Setanta", "Lugh", "Laeg", "Conall", "images/KazumaKaneko-CuChulainn.jpg", "CU CHULAINN: By my strength, this spear will not let you pass!", "hard")),
        (mizuchi1 = new jumble("mizuchi1", "The Mizuchi is a snake-like Japanese water spirit or water dragon. Which of these is also a Japanese water spirit?", "Kappa", "Nozuchi", "Kodama", "Orochi", "images/Mizuchi.jpg", "MIZUCHI: I HAVE NO TIME FOR WEAK MORTALS! DROWN IN MY GULLET!", "easy")),
        (mizuchi2 = new jumble("mizuchi2", "The Mizuchi's Chinese name signifies a race of dragons, while its Japanese name means 'aquatic spiritual power'. The Mizuchi were said to take over and rule any lake containing, what?", "2,600 fish", "Bodies of the Innocent", "Underwater Lava Vents", "Limestone Caves", "images/Mizuchi.jpg", "MIZUCHI: I HAVE NO TIME FOR WEAK MORTALS! DROWN IN MY GULLET!", "hard")),
        (yggdrasil1 = new jumble("yggdrasil1", "The Yggdrasil is known as the World Tree in Norse Mythology, but what kind of tree is it?", "Ash Tree", "Yew Tree", "Oak Tree", "Fir Tree", "images/KazumaKaneko-Yggdrasil.jpg", "YGGDRASIL: You seek eternal life?!? I AM eternal life!", "easy")),
        (yggdrasil2 = new jumble("yggdrasil2", "The Yggdrasil has three roots that sustain it and hold it up. Which of these homeworlds does not have a root of the Yggdrasil?", "Alfheimr", "Jotunheimr", "Asgardr", "Helheimr", "images/KazumaKaneko-Yggdrasil.jpg", "YGGDRASIL: You seek eternal life?!? I AM eternal life!", "hard")),
        (tarasque1 = new jumble("tarasque1", "The Tarrasque was a sort of dragon with six short legs like a bear's, an ox-like body covered with a turtle shell, and a scaly tail that ended in a scorpion's sting. It had a lion's head. What would calm it down?", "Beautiful Singing", "Eating 30 Sheep", "Petting its Mane", "Sound of Rainfall", "images/KazumaKaneko-Tarasque.jpg", "TARASQUE: YOU HUMANS AND YOUR CEASELESS PRATTLE GRATES ON MY EARS! PREPARE TO BE SILENCED!", "easy")),
        (tarasque2 = new jumble("tarasque2", "The city of Tarascon is named after the Tarasque after a local nun was able to calm the beast before it was slain by the townsfolk still afraid of it. What country is Tarascon in?", "France", "Italy", "Spain", "Greece", "images/KazumaKaneko-Tarasque.jpg", "TARASQUE: YOU HUMANS AND YOUR CEASELESS PRATTLE GRATES ON MY EARS! PREPARE TO BE SILENCED!", "hard")),
        (samael1 = new jumble("samael1", "Samael means 'Poison of God,' and he is the Angel of Death. Most texts declare that Samael married Lilith after she was cast out of the Garden of Eden. What are their children called?", "Lilim", "Succubi", "Fomorians", "Manticores", "images/KazumaKaneko-Samael.jpg", "SAMAEL: I am Samael. Know me, for I am the taker of the souls of men. I have come now to fetch YOURS.", "easy")),
        (samael2 = new jumble("samael2", "According to some myths, Samael was mated with Eisheth Zenunim, Na'amah, Lilith and Agrat Bat Mahlat. All were 'angels' of sacred prostitution except for this one.", "Lilith", "Agrat Bat Mahlat", "Eisheth Zenunim", "Na'amah", "images/KazumaKaneko-Samael.jpg", "SAMAEL: I am Samael. Know me, for I am the taker of the souls of men. I have come now to fetch YOURS.", "hard")),
        (yaksini1 = new jumble("yaksini1", "Yaksini are the female counterparts of the male yaksha, and they both attend to Kubera, the Hindu god of wealth. Although Yaksini are generally benevolent, they are credited with the creaton of what malevolent group?", "Vampires", "Werewolves", "Goblins", "Trolls", "images/KazumaKaneko-Yaksini.jpg", "YAKSINI: What do we have here? You look entertaining. Care for a dance?", "easy")),
        (jackFrost1 = new jumble("jackFrost1", "This adorable rendition of Jack Frost has become the well received face of the Shin Megami Tensei empire. What is his catchphrase in English?", "Hee-ho!", "I'm Jack Frost!", "Let's Play!", "It'll Be Fun!", "images/KazumaKaneko-JackFrost.jpg", "JACK FROST: Hee-ho! I'm Jack Frost! Let's play! It'll be fun!", "easy")),
        (cockatrice1 = new jumble("cockatrice1", "The cockatrice is the feared offspring of a rooster and a snake that could turn people to stone by meeting their eyes. Which of these creatures supposedly turned their prey to stone to eat them?", "Basilisk", "Cockatrice", "Gorgon", "Svartalfar", "images/KazumaKaneko-Cockatrice.jpg", "COCKATRICE: BWACK BWACK BWACK! HISSSSSS! BWACK! BWACK! COCK-A-DOODLE-HISSSSSS!", "easy"))
        ],
//holy fishcakes batman! that was alot of data!
//here come some flags, counters and other
//variables!
    whichOne = 0,
    order = 0,
    located = false,
    tauntFlag = true,
    splatFlag = false,
    sureFlag = false,
    winned = false,
    waneFlag = true,
    hardFlag = "easy",
    floorCounter = 0,
    hiscore = 0,
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
    startMenu();
});
//start menu for instructions while making sure
//everything else hides
function startMenu() {
    $("#newGame").hide();
    $("#winner").hide();
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
//for controlling the actual game portion of the
//quiz
function letsMove() {
    $(document).unbind("keydown");
    $(document).keydown(function(e){
        e.preventDefault();
        if (!sureFlag && e.which == 9) {
            sureResetAll();
            $("#sure").show();
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
    $("#quiz").find("p").text(jumbleMngr[whiching].question);
    $("."+order).text(jumbleMngr[whiching].correct);
    $("."+order).siblings("span").text(jumbleMngr[whiching].herring1);
    $("."+order).parent("div").siblings("div").find("span").first("span").text(jumbleMngr[whiching].herring2);
    $("."+order).parent("div").siblings("div").find("span").last("span").text(jumbleMngr[whiching].herring3);
    $(".hero").attr("src", jumbleMngr[whiching].imgSrc);
    $("#taunt").find("span").text(jumbleMngr[whiching].taunt);
    hardFlag = jumbleMngr[whiching].difficulty;
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
    diffTimer = difficultyMod -Math.ceil((diffTimer - pointTimer)/20);
    if (diffTimer < 100) diffTimer = 100;
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
//closes splat popup and increments the
//internal floor counter. if you reach
//the 15th floor, you win!
function closeSplat(){
    $("#splat").attr("src", "");
    spot = 1;
    spotRemoval();
    if (!dead) {
        floorCounter ++;
        if (floorCounter === 15) youWin();
        resetSome();
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
    if (winned === true) {
        $("#hiscore").show();
        var score = ((setHP/10)*magnetite);
        if (score > hiscore) hiscore = score;
        $("#hiscore").html("Hiscore:<br/>HP "+(100-(setHP*10))+"%<br/>MAG "+magnetite);
    }
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
    currentFloor ++;
    $("#floor").text("B"+currentFloor);
}
//those that reach down 15 floors win. i
//lied though... you die after floor 15 o,o
//JK! its just so you cant keep going :P
function youWin() {
    dead = true;
    winned = true;
    $(document).unbind("keydown");
    $(document).keydown(function(e){
        if (e.which == 13) resetAll();
    });
    $("#winner").show();
    $("#winned").text("You did it! Your remaining Lifeforce was "+(100-(setHP*10))+"% and you earned "+magnetite+" Magnetite for confronting your demons! Well Done! Press 'Enter' to Conquer Again...");
}