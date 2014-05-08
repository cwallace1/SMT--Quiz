//lets build an array of objects for answers
//and questions!
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
    jumbleMngr = [(cthulhu = new jumble("cthulhu", "While Cthulhu has been greatly popularized by many modern games, but what story started it all?", "Call of Cthulhu", "The Hobbit", "Harry Potter", "Necronomicon", "images/KazumaKaneko-Cthulu.jpg", "CTHULHU: PH'NGLUI MGLW'NAFH CTHULHU R'LYEH WGAH'NAGL FHTAGN!!!", "easy")), (cthulu2 = new jumble("cthulhu2", "Cthulhu was the brain child of H.P. Lovecraft, but among this selection of his works, which did not mention Cthulhu?", "Dagon", "The Dunwich Horror", "Whisperer in Darkness", "Mountains of Madness", "images/KazumaKaneko-Cthulu.jpg", "CTHULHU: PH'NGLUI MGLW'NAFH CTHULHU R'LYEH WGAH'NAGL FHTAGN!!!", "hard")), (arachne = new jumble("arachne", "Arachne claimed she was the best at her profession and challenged the goddess Athena to a contest over the title. What was Arachne?", "Weaver", "Poet", "Tactician", "Baker", "images/KazumaKaneko-Arachne.jpg", "ARACHNE: Fufufufu... Look what has wandered into my web... Let's wrap this up quickly!", "easy")), (arachne2 = new jumble("arachne2", "After losing to Athena in the contest, Arachne hung herself. Athena, moved to 'mercy,' gave her life, but used this goddess' potion to curse Arachne to share the form of a spider and weave for all time.", "Hecate", "Styx", "Selene", "Aphrodite", "images/KazumaKaneko-Arachne.jpg", "ARACHNE: Fufufufu... Look what has wandered into my web... Let's wrap this up quickly!", "hard")), (cuChulainn = new jumble("cuChulainn", 'Cu Chulainn means "The Hound of Ulster," a title he received in honor of his bravery in battle and devotion to Ulster. Where did his story originate?', "Ireland", "Gaul", "Wales", "England", "images/KazumaKaneko-CuChulainn.jpg", "CU CHULAINN: By my strength, this spear will not let you pass!", "easy")), (cuChulainn2 = new jumble("cuChulainn2", 'Cu Chulainn means "The Hound of Ulster," a title he received in honor of his bravery in battle and devotion to Ulster. What was his birth name?', "Setanta", "Lugh", "Laeg", "Conall", "images/KazumaKaneko-CuChulainn.jpg", "CU CHULAINN: By my strength, this spear will not let you pass!", "hard")), (mizuchi = new jumble("mizuchi", "The Mizuchi is a snake-like Japanese water spirit or water dragon. Which of these is also a Japanese water spirit?", "Kappa", "Nozuchi", "Kodama", "Orochi", "images/Mizuchi.jpg", "MIZUCHI: I HAVE NO TIME FOR WEAK MORTALS! DROWN IN MY GULLET!", "easy")), (mizuchi2 = new jumble("mizuchi2", "The Mizuchi's Chinese name signifies a race of dragons, while its Japanese name means 'aquatic spiritual power'. The Mizuchi were said to take over and rule any lake containing, what?", "2,600 fish", "Bodies of the Innocent", "Underwater Lava Vents", "Limestone Caves", "images/Mizuchi.jpg", "MIZUCHI: I HAVE NO TIME FOR WEAK MORTALS! DROWN IN MY GULLET!", "hard")), (yggdrasil = new jumble("yggdrasil", "The Yggdrasil is known as the World Tree in Norse Mythology, but what kind of tree is it?", "Ash Tree", "Yew Tree", "Oak Tree", "Fir Tree", "images/KazumaKaneko-Yggdrasil.jpg", "YGGDRASIL: You seek eternal life?!? I AM eternal life!", "easy")), (yggdrasil2 = new jumble("yggdrasil2", "The Yggdrasil has three roots that sustain it and hold it up. Which of these homeworlds does not have a root of the Yggdrasil?", "Alfheimr", "Jotunheimr", "Asgardr", "Helheimr", "images/KazumaKaneko-Yggdrasil.jpg", "YGGDRASIL: You seek eternal life?!? I AM eternal life!", "hard")), (tarasque = new jumble("tarasque", "The Tarrasque was a sort of dragon with six short legs like a bear's, an ox-like body covered with a turtle shell, and a scaly tail that ended in a scorpion's sting. It had a lion's head. What would calm it down?", "Beautiful Singing", "Eating 30 Sheep", "Petting its Mane", "Sound of Rainfall", "images/KazumaKaneko-Tarasque.jpg", "TARASQUE: YOU HUMANS AND YOUR CEASELESS PRATTLE GRATES ON MY EARS! PREPARE TO BE SILENCED!", "easy")), (tarasque2 = new jumble("tarasque2", "The city of Tarascon is named after the Tarasque after a local nun was able to calm the beast before it was slain by the townsfolk still afraid of it. What country is Tarascon in?", "France", "Italy", "Spain", "Greece", "images/KazumaKaneko-Tarasque.jpg", "TARASQUE: YOU HUMANS AND YOUR CEASELESS PRATTLE GRATES ON MY EARS! PREPARE TO BE SILENCED!", "hard")), (samael = new jumble("samael", "Samael means 'Poison of God,' and he is the Angel of Death. Most texts declare that Samael married Lilith after she was cast out of the Garden of Eden. What are their children called?", "Lilim", "Succubi", "Fomorians", "Manticores", "images/KazumaKaneko-Samael.jpg", "SAMAEL: I am Samael. Know me, for I am the taker of the souls of men. I have come now to fetch YOURS.", "easy")), (samael2 = new jumble("samael2", "According to some myths, Samael was mated with Eisheth Zenunim, Na'amah, Lilith and Agrat Bat Mahlat. All were 'angels' of sacred prostitution except for this one.", "Lilith", "Agrat Bat Mahlat", "Eisheth Zenunim", "Na'amah", "images/KazumaKaneko-Samael.jpg", "SAMAEL: I am Samael. Know me, for I am the taker of the souls of men. I have come now to fetch YOURS.", "hard")), (yaksini = new jumble("yaksini", "Yaksini are the female counterparts of the male yaksha, and they both attend to Kubera, the Hindu god of wealth. Although Yaksini are generally benevolent, they are credited with the creaton of what malevolent group?", "Vampires", "Werewolves", "Goblins", "Trolls", "images/KazumaKaneko-Yaksini.jpg", "YAKSINI: What do we have here? You look entertaining. Care for a dance?", "easy"))],
    whichOne = 0,
    order = 0,
    located = false,
    tauntFlag = true,
    splatFlag = false,
    sureFlag = false,
    waneFlag = true,
    hardFlag = "easy",
    floorCounter = 0,
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
$(document).ready(function(){
    startMenu();
});
//start menu for instructions
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
//pick the demon!
function pickIt(){
    whichOne = (randomInt(jumbleMngr.length)-1);
    if (floorCounter !== 15) askedAlready(whichOne);
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
    $("#quiz").find("p").text(jumbleMngr[whiching].question);
    $("."+order).text(jumbleMngr[whiching].correct);
    $("."+order).siblings("span").text(jumbleMngr[whiching].herring1);
    $("."+order).parent("div").siblings("div").find("span").first("span").text(jumbleMngr[whiching].herring2);
    $("."+order).parent("div").siblings("div").find("span").last("span").text(jumbleMngr[whiching].herring3);
    $(".hero").attr("src", jumbleMngr[whiching].imgSrc);
    $("#taunt").find("span").text(jumbleMngr[whiching].taunt);
    hardFlag = jumbleMngr[whiching].difficulty;
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
    var difficultyMod = 0;
    if (hardFlag === "easy") difficultyMod = 1000;
    else if (hardFlag === "hard") difficultyMod = 2000;
    located = $("#choice").next("span").hasClass(order);
    var diffTimer = new Date();
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
    moonIf();
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
    dead = true;
    $(document).unbind("keydown");
    $(document).keydown(function(e){
        if (e.which == 13) resetAll();
    });
    $("#winner").show();
    $("#winned").text("You did it! Your remaining Lifeforce was "+(100-(setHP*10))+"% and you earned "+magnetite+" Magnetite for confronting your demons! Well Done! Press 'Enter' to Conquer Again...");
}
//function to check if the question has already been asked
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