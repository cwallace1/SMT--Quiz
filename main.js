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
    jumbleMngr = [new jumble("cthulhu1", "While Cthulhu has been greatly popularized by many modern games, but what story started it all?", "Call of Cthulhu", "The Hobbit", "Harry Potter", "Necronomicon", "images/KazumaKaneko-Cthulu.jpg", "CTHULHU: PH'NGLUI MGLW'NAFH CTHULHU R'LYEH WGAH'NAGL FHTAGN!!!", "easy"),
        new jumble("cthulhu2", "Cthulhu was the brain child of H.P. Lovecraft, but among this selection of his works, which did not mention Cthulhu?", "Dagon", "The Dunwich Horror", "Whisperer in Darkness", "Mountains of Madness", "images/KazumaKaneko-Cthulu.jpg", "CTHULHU: PH'NGLUI MGLW'NAFH CTHULHU R'LYEH WGAH'NAGL FHTAGN!!!", "hard"),
        new jumble("arachne1", "Arachne claimed she was the best at her profession and challenged the goddess Athena to a contest over the title. What was Arachne?", "Weaver", "Poet", "Tactician", "Baker", "images/KazumaKaneko-Arachne.jpg", "ARACHNE: Fufufufu... Look what has wandered into my web... Let's wrap this up quickly!", "easy"),
        new jumble("arachne2", "After losing to Athena in the contest, Arachne hung herself. Athena, moved to 'mercy,' gave her life, but used this goddess' potion to curse Arachne to share the form of a spider and weave for all time.", "Hecate", "Styx", "Selene", "Aphrodite", "images/KazumaKaneko-Arachne.jpg", "ARACHNE: Fufufufu... Look what has wandered into my web... Let's wrap this up quickly!", "hard"),
        new jumble("cuChulainn1", 'Cu Chulainn means "The Hound of Ulster," a title he received in honor of his bravery in battle and devotion to Ulster. Where did his story originate?', "Ireland", "Gaul", "Wales", "England", "images/KazumaKaneko-CuChulainn.jpg", "CU CHULAINN: By my strength, this spear will not let you pass!", "easy"),
        new jumble("cuChulainn2", 'Cu Chulainn means "The Hound of Ulster," a title he received in honor of his bravery in battle and devotion to Ulster. What was his birth name?', "Setanta", "Lugh", "Laeg", "Conall", "images/KazumaKaneko-CuChulainn.jpg", "CU CHULAINN: By my strength, this spear will not let you pass!", "hard"),
        new jumble("mizuchi1", "The Mizuchi is a snake-like Japanese water spirit or water dragon. Which of these is also a Japanese water spirit?", "Kappa", "Nozuchi", "Kodama", "Orochi", "images/Mizuchi.jpg", "MIZUCHI: I HAVE NO TIME FOR WEAK MORTALS! DROWN IN MY GULLET!", "easy"),
        new jumble("mizuchi2", "The Mizuchi's Chinese name signifies a race of dragons, while its Japanese name means 'aquatic spiritual power'. The Mizuchi were said to take over and rule any lake containing, what?", "2,600 fish", "Bodies of the Innocent", "Underwater Lava Vents", "Limestone Caves", "images/Mizuchi.jpg", "MIZUCHI: I HAVE NO TIME FOR WEAK MORTALS! DROWN IN MY GULLET!", "hard"),
        new jumble("yggdrasil1", "The Yggdrasil is known as the World Tree in Norse Mythology, but what kind of tree is it?", "Ash Tree", "Yew Tree", "Oak Tree", "Fir Tree", "images/KazumaKaneko-Yggdrasil.jpg", "YGGDRASIL: Eternal Life?! You seek eternal life?!? I AM eternal life!", "easy"),
        new jumble("yggdrasil2", "The Yggdrasil has three roots that sustain it and hold it up. Which of these homeworlds does not have a root of the Yggdrasil?", "Alfheimr", "Jotunheimr", "Asgardr", "Helheimr", "images/KazumaKaneko-Yggdrasil.jpg", "YGGDRASIL: Eternal Life?! You seek eternal life?!? I AM eternal life!", "hard"),
        new jumble("tarasque1", "The Tarasque was a sort of dragon with six short legs like a bear's, a lion's head, an oxen's body covered by a turtle shell, and a scaly tail with a scorpion's sting. What would calm it down?", "Beautiful Singing", "Eating 30 Sheep", "Petting its Mane", "Sound of Rainfall", "images/KazumaKaneko-Tarasque.jpg", "TARASQUE: YOU HUMANS AND YOUR CEASELESS PRATTLE GRATES ON MY EARS! PREPARE TO BE SILENCED!", "easy"),
        new jumble("tarasque2", "The city of Tarascon is named after the Tarasque after a local nun was able to calm the beast before it was slain by the townsfolk still afraid of it. What country is Tarascon in?", "France", "Italy", "Spain", "Greece", "images/KazumaKaneko-Tarasque.jpg", "TARASQUE: YOU HUMANS AND YOUR CEASELESS PRATTLE GRATES ON MY EARS! PREPARE TO BE SILENCED!", "hard"),
        new jumble("samael1", "Samael means 'Poison of God,' and he is the Angel of Death. Most texts declare that Samael married Lilith after she was cast out of the Garden of Eden. What are their children called?", "Lilim", "Succubi", "Fomorians", "Manticores", "images/KazumaKaneko-Samael.jpg", "SAMAEL: I am Samael. Know me, for I am the taker of the souls of men. I have come now to fetch YOURS.", "easy"),
        new jumble("samael2", "According to some myths, Samael was mated with Eisheth Zenunim, Na'amah, Lilith and Agrat Bat Mahlat. All were 'angels' of sacred prostitution except for this one.", "Lilith", "Agrat Bat Mahlat", "Eisheth Zenunim", "Na'amah", "images/KazumaKaneko-Samael.jpg", "SAMAEL: I am Samael. Know me, for I am the taker of the souls of men. I have come now to fetch YOURS.", "hard"),
        new jumble("yaksini1", "Yaksini are the female yaksha, and they attend to Kubera, the Hindu god of wealth. Although generally benevolent, Yaksini are credited with the creation of what malevolent group?", "Vampires", "Werewolves", "Goblins", "Trolls", "images/KazumaKaneko-Yaksini.jpg", "YAKSINI: What do we have here? You look entertaining. Care for a dance?", "easy"),
        new jumble("jackFrost1", "This adorable rendition of Jack Frost has become the well received face of the Shin Megami Tensei empire. What is his catchphrase in English?", "Hee-ho!", "I'm Jack Frost!", "Let's Play!", "It'll Be Fun!", "images/KazumaKaneko-JackFrost.jpg", "JACK FROST: Hee-ho! I'm Jack Frost! Let's play! It'll be fun!", "easy"),
        new jumble("cockatrice1", "The Cockatrice is the feared offspring of a rooster and a snake that could turn people to stone by meeting their eyes. Which of these creatures supposedly turned their prey to stone to eat them?", "Basilisk", "Cockatrice", "Gorgon", "Svartalfar", "images/KazumaKaneko-Cockatrice.jpg", "COCKATRICE: BWACK BWACK BWACK! HISSSSSS! BWACK! BWACK! COCK-A-DOODLE-HISSSSSS!", "easy"),
        new jumble("gurr1", "Gurr is an evil and carnivorous giant eagle that feeds on flesh. It is widely believed that Gurr is a demonization of which lesser deity from Hinduism?", "Garuda", "Ganga", "Rudra", "Varuna", "images/KazumaKaneko-Gurr.jpg", "GURR: So hungry... Wait. That scent... You have... Could it be?! FLESH!!!", "easy"),
        new jumble("yaka1", "In Sri Lankan myth, Yakas are the source of sickness and disease. They can be summoned and exorcised while wearing a Yaka mask and performing which kind of ritual?", "Dance", "Prayer", "Sacrificial", "Sexual", "images/KazumaKaneko-Yaka.jpg", "YAKA: LOOK INTO MY EYES AND YOU SHALL SEE THE PLAGUE THAT AWAITS YOU! *cough cough*", "easy"),
        new jumble("turdak1", "In Hindu myth, it is Turdak's job to haul the souls of the unworthy to the proper level of Hell after his master, Yama, passes judgment. In Tibetan lore, Yama gave Turdak power over what?", "Illness", "Vultures", "Collecting Souls", "Flowing Water", "images/KazumaKaneko-Turdak.jpg", "TURDAK: Yama has judged you. He has deemed you unworthy for Nirvana. Come with me.", "easy"),
        new jumble("sanniYaka1", "In Sri Lankan myth, Yakas are the source of sickness and disease. Yakas all attend to their king, Wakahola Sanni Yaka, who rules over how many diseases?", "18", "7", "14", "83", "images/KazumaKaneko-SanniYaka.jpg", "WAKAHOLA SANNI YAKA: COME TO ME MY CHILDREN! WE SHALL DEVOUR THIS MORTAL WHO KNOWS NO RESPECT FOR YOUR KING!", "hard"),
        new jumble("wendigo1", "A demonic half-beast creature appearing in the legends of the Algonquian peoples, Wendigo are embodiments of gluttony, greed, excess. Humans that became Wendigos had committed what taboo?", "Cannibalism", "Hoarding Resources", "Over-Eating", "Abandoning Family", "images/KazumaKaneko-Wendigo.jpg", "WENDIGO: soooo hungry... i need more... soooo hungry... take me to your tribe so i might feast...", "easy"),
        new jumble("quetzalcoatl1", "Quetzalcoatl was regarded as the god of water, wind, and the harvest, and the god who gave man fire. His efforts to get people to stop making human sacrifices earned the wrath of the war god, Tezcatlipoca, who banished him to which planet?", "Mars", "Venus", "Saturn", "Jupiter", "images/KazumaKaneko-Quetzalcoatl.jpg", "QUETZALCOATL: Mortals seem to have forgotten the gifts all around them. Perhaps its time for another purge.", "hard"),
        new jumble("quetzalcoatl2", "Quetzalcoatl was regarded as the god of water, wind, and the harvest, and the god who gave man fire. He created humans by sprinkling blood on the bones of people from a previously created world, but which planet is regarded as his heart?", "Venus", "Mars", "Saturn", "Jupiter", "images/KazumaKaneko-Quetzalcoatl.jpg", "QUETZALCOATL: Mortals seem to have forgotten the gifts all around them. Perhaps its time for another purge.", "hard"),
        new jumble("nyarlathotep1", "The most active of the Outer Gods from H.P. Lovecraft's writings, Nyarlathotep is constantly sowing discord and madness everywhere he pleases. Which Lovecraftian deity is his father?", "Azathoth", "Yog-Sothoth", "Shub-Niggurath", "Tsathoggua", "images/KazumaKaneko-Nyarlathotep.jpg", "NYARLATHOPEP: You seek to defeat me? Hahahaha, It won't be easy, I have a thousand more forms after this one!", "hard"),
        new jumble("nyarlathotep2", "It is claimed that Nyarlathotep has 1000 forms or Masks, and each has its own distinct personality. Which of these is not a Mask?", "Devourer in the Mists", "Bloated Woman", "Haunter of the Dark", "Mr. Skin", "images/KazumaKaneko-Nyarlathotep.jpg", "NYARLATHOPEP: You seek to defeat me? Hahahaha, It won't be easy, I have a thousand more shapes after this one!", "hard"),
        new jumble("kraken1", "Easily recognizable in almost all cultures nowadays, the Kraken is an undersea horror capable of reducing large ships to splinters. What sort of language does the word Kraken come from?", "Germanic", "Romanic", "Celtic", "Slavic", "images/KazumaKaneko-Kraken.jpg", "KRAKEN: *gurgle* *splash* *splash* *shriek* *splash* *gurgle* *splash*", "easy"),
        new jumble("baykok1", "Described as 'Death' in The Song of Hiawatha, the Baykok is said to appear as an extremely emaciated figure, with thin translucent skin and glowing red points for eyes. It only preys upon warriors, attacking in order to feast on which organ?", "Liver", "Heart", "Brain", "Intestines", "images/KazumaKaneko-Baykok.jpg", "BAYKOK: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY AAAAAAAAAAYAAYAYAAAAAAA!", "hard"),
        new jumble("itzamna1", "In Mayan mythology, Itzamna is the name of the creator deity and the lord of medicine. Which of these were not among the gifts Itzamna gave the Mayans?", "Medicine", "Drawing", "Writing", "Religion", "images/KazumaKaneko-Itzamna.jpg", "ITZAMNA: Hoho, there youngin'! You seem to have overstayed your welcome. Come with me and relax a while.", "hard"),
        new jumble("loa1", "In Haitian mythology, a Loa is an intermediary spirit between God and humans, not dissimilar from saints and angels in Catholisicm. To beseech a Loa to carry a message or accomplish a miracle, what must be done?", "Servitude", "Prayer", "Worship", "Singing", "images/KazumaKaneko-Loa.jpg", "LOA: You! Yeah, You! You must be the new dead guy. Come on, I'll show ya round.", "hard"),
        new jumble("loa2", "In Haitian mythology, the Ghede Loa are spirits of the dead. Their graveyard leader is portrayed in many modern aspects, but what is his most common name?", "Baron Samedi", "Ghede Babaco", "Baron Kriminel", "Ghede Nibo", "images/KazumaKaneko-Loa.jpg", "LOA: You! Yeah, You! You must be the new dead guy. Come on, I'll show ya round.", "easy"),
        new jumble("choronzon1", "Otherwise known as the Demon of Dispersion, Thelemites believe Choronzon to be the last great obstacle between the adept and enlightenment. His function is to destroy which part of the adept?", "Ego", "Personality", "Memories", "Sanity", "images/KazumaKaneko-Choronzon.jpg", "CHORONZON: I AM I! I AM I! I AM I! I AM I! I AM I! I AM I! I AM I! I AM I! I AM I! I AM I!", "hard"),
        new jumble("choronzon2", "Choronzon is known as the 'Abyss,' a formless aggregation of consciousness. It guards the door to all the knowledge of the cosmos. Which sorcerer supposedly summoned Choronzon?", "Aleister Crowley", "Edward Kelley", "John Dee", "Faust", "images/KazumaKaneko-Choronzon.jpg", "CHORONZON: I AM I! I AM I! I AM I! I AM I! I AM I! I AM I! I AM I! I AM I! I AM I! I AM I!", "easy"),
        new jumble("baphomet1", "The King of Demons, Baphomet is known as the 'Sabbatic Goat.' He has the power to control all human women, and is said to give what group their power?", "Witches", "Templars", "Doctors", "Illuminati", "images/Baphomet.jpg", "BAPHOMET: I believe in the Serpent and the Lion, Mystery of Mystery, in MY name, Baphomet.", "easy"),
        new jumble("baphomet2", "Since 1856, the name Baphomet has been associated with a 'Sabbatic Goat' image drawn by Eliphas Levi, which contains binary elements representing the 'sum total of the universe'. Which group has adopted Baphomet as a symbol?", "Church of Satan", "Luciferian Church", "Gnostic Church", "Hermetic Order", "images/Baphomet.jpg", "BAPHOMET: I believe in the Serpent and the Lion, Mystery of Mystery, in MY name, Baphomet.", "hard"),
        new jumble("alice1", 'Though popularized by the novel "Alice In Wonderland," Alice has an older, darker story which was used to scare children. In which region would she visit and kill children at night so that they would become "friends?"', "Scandinavia", "Russia", "Britannia", "Iberia", "images/KazumaKaneko-Alice.jpg", "ALICE: Oh! You're new! Let's play with my dollies! I'll be red, you'll be dead!", "hard"),
        new jumble("alice2", 'Alice was a young girl with immense magical powers gifted to her by demons. When she died, she was resurrected as a spirit by her "uncles": the Count in Red, Belial, and the Baron in Black. Who was the Baron in Black?', "Nebiros", "Seth", "Moloch", "Bael", "images/KazumaKaneko-Alice.jpg", "ALICE: Oh! You're new! Let's play with my dollies! I'll be red, you'll be dead!", "hard"),
        new jumble("amaterasu1", 'Amaterasu is the Japanese sun goddess who rules over the High Plain of Heaven and her name means "she who illuminates the heavens." From which god\'s left eye was she born?', "Izanagi", "Inazami", "Susano-O", "Tsukuyomi", "images/KazumaKaneko-Amaterasu.jpg", "AMATERASU: Why are you bothering me? Don't make me angry! I'll kill you then go back into that cave! ", "hard"),
        new jumble("arahabaki1", "An ancient Japanese aboriginal god of the Jomon, Arahabaki was worshipped in Japan's North-Eastern regions. Who were his guardians and servants?", "Momunofu", "Oni", "Azumi", "Inugami", "images/KazumaKaneko-Arahabaki.jpg", "ARAHABAKI: I AM THE GOD OF LEGS, FORTIFICATION AND STEEL! QUIVER IN YOUR PANTS!", "easy")
        /*,
        new jumble("1", "", "", "", "", "", "images/KazumaKaneko-.jpg", " : ", "easy")*/
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
//those that reach down 15 floors win. i
//lied though... you die after floor 15 o,o
//JK! its just so you cant keep going :P
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
        $("#hiscore").html("Hiscore:<br/>HP "+(100-(setHP*10))+"%<br/>MAG "+magnetite);
    }
    $("#winner").show();
    $("#winned").text("You did it! Your remaining Lifeforce was "+(100-(setHP*10))+"% and you earned "+magnetite+" Magnetite for confronting your demons! Well Done! Press 'Enter' to Conquer Again...");
}