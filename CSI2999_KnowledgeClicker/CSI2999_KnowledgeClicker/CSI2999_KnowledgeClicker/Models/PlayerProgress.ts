    // Basic variable declaration - keep track of how many of each
    // item we currently own, and how much the new ones should cost.
    var numKnowledge = 0;
    var totalKnowledge = 0;
    var level = 0;
    var numBook = 0;
    var numTutor = 0;
    var numProf = 0;
    var numSchool = 0;
    var numUni = 0;
    var numLab = 0;

    var bookUpgrade = false;
    var schoolUpgrade = false;
    var schoolUpgrade2 = false;
    var labUpgrade = false;

    var click1 = false;
    var click2 = false;

    //var btnBookDisabled = false;
    var bookCost = 15;
    var tutorCost = 250;
    var profCost = 700;
    var schoolCost = 3000;
    var uniCost = 5500;
    var labCost = 10000;

    var bookInitialCost = 15;
    var tutorInitialCost = 250;
    var profInitialCost = 700;
    var schoolInitialCost = 3000;
    var uniInitialCost = 5500;
    var labInitialCost = 10000;

    var bookUpgradeCost = 500;
    var schoolUpgradeCost = 2500;
    var schoolUpgrade2Cost = 8000;

    var click1Cost = 2000;
    var click2Cost = 8000;

    var level = 0;
    var level0 = 0;
    var level1 = 1200;
    var level2 = 4000;
    var level3 = 10000;
    var level4 = 22000;
    var level5 = 40000;
    var level6 = 60000;

    var progress = 0;

    var level1KnowledgeNeeded = 1000;

    class User {
        userId: number;
        userName: string;
        password: string;
        numKnowledge: number;
        totalKnowledge: number;
        lvl: number;

        constructor() {
            this.numKnowledge = 0;
            this.totalKnowledge = 0;
        }

        get name(): string {
            return this.userName;
        }

        set name(playerName: string) {
            this.userName = playerName;
        }

        get knowledge(): number {
            return this.numKnowledge;
        }

        set knowledge(numKnowledge: number) {
            this.numKnowledge = numKnowledge;
        }
        get totKnowledge(): number {
            return this.totalKnowledge;
        }

        set totKnowledge(totalKnowledge: number) {
            this.totalKnowledge = totalKnowledge;
        }

        get level(): number {
            return this.lvl;
        }

        set level(lvl: number) {
            this.lvl = lvl;
        }

        getLevel() {
            if (player.totalKnowledge < level1) {
                this.level = 0;
            } else if (player.totalKnowledge > level1 && player.totalKnowledge < level2) {
                this.level = 1;
            } else if (player.totalKnowledge > level2 && player.totalKnowledge < level3) {
                this.level = 2;
            } else if (player.totalKnowledge > level3 && player.totalKnowledge < level4) {
                this.level = 3;
            } else if (player.totalKnowledge > level4 && player.totalKnowledge < level5) {
                this.level = 4;
            } else if (player.totalKnowledge > level5 && player.totalKnowledge < level6) {
                this.level = 5;
            } else if (player.totalKnowledge > level6) {
                this.level = 6;
            }
        }
    }

    $('#btnSave').on('click', () => {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: 'Default.aspx/SaveUser',
            //convert your data to a JSON object before you send it
            data: '{"userId":"' +
                player.userId +
                '", "numKnowledge":"' +
                Math.floor(player.numKnowledge) +
                '", "totalKnowledge":"' +
                Math.floor(player.totalKnowledge) +
                '", "numBook":"' +
                numBook +
                '", "numTutor":"' +
                numTutor +
                '", "numProf":"' +
                numProf +
                '", "numSchool":"' +
                numSchool +
                '", "numUni":"' +
                numUni +
                '", "numLab":"' +
                numLab +
                '", "Level":"' +
                player.level +
                '"}',
            success: ajaxSuccess,
            error: AjaxFailed,
        });
    });

$('#btnLoad').on('click', () => {
    loadData();
    });

function loadData() {
    $.ajax(
        {
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: 'Default.aspx/GetUsers',
            data: {},
            success: (msg) => {
                var p = msg.d;
                for (var i in p) {
                    var user = p[i];
                    if (user.totalKnowledge > 0) {
                        player.numKnowledge = user.numKnowledge;
                        player.totalKnowledge = user.totalKnowledge;
                        player.level = user.level;
                        numBook = user.numBook;
                        numTutor = user.numTutor;
                        numProf = user.numProf;
                        numSchool = user.numSchool;
                        numUni = user.numUni;
                        numLab = user.numLab;
                        bookCost = getStoreCost(bookInitialCost, parseInt(user.numBook), bookRate);
                        tutorCost = getStoreCost(tutorInitialCost, parseInt(user.numTutor), tutorRate);
                        profCost = getStoreCost(profInitialCost, parseInt(user.numProf), profRate);
                        schoolCost = getStoreCost(schoolInitialCost, parseInt(user.numSchool), schoolRate);
                        uniCost = getStoreCost(uniInitialCost, parseInt(user.numUni), uniRate);
                        labCost = getStoreCost(labInitialCost, parseInt(user.numLab), labRate);
                    }
                }
            }
        });
}

$(document).ready(() => {
    // executes when HTML-Document is loaded and DOM is ready
    loadData();
    console.log("Loaded saved data");
});

function getStoreCost(itemCost,numStoreItem, rate) {
    var hold=itemCost;
    for (var i = 1; i <= numStoreItem; i++) {
        hold *= rate;
    }
    return hold;
}

function ajaxSuccess(data, status) {   
    console.log(data);
    console.log(status);
    alert("Progress Saved");
}

function ajaxComplete(XMLHttpRequest, textStatus) {
    console.log(XMLHttpRequest);
    console.log(textStatus);
}
    function AjaxFailed(XMLHttpRequest, textStatus) {
        console.log(XMLHttpRequest);
        console.log(textStatus);
    }

    function setButton() {
        if (player.level === 0) {
            $("#imgBrain").attr("src", "Images/BabyBrain.png");
            $('#currLevel').text('Current Level: Baby');
            $('#nextLevel').text('To next level: ' + Math.floor(level1 - player.totalKnowledge));
        } else if (player.level === 1) {
            $("#imgBrain").attr("src", "Images/KidBrain.png");
            $('#currLevel').text('Current Level: Kid');
            $('#nextLevel').text('To next level: ' + Math.floor(level2 - player.totalKnowledge));
        } else if (player.level === 2) {
            $("#imgBrain").attr("src", "Images/TeenBrain.png");
            $('#currLevel').text('Current Level: Teen');
            $('#nextLevel').text('To next level: ' + Math.floor(level3 - player.totalKnowledge));
        } else if (player.level === 3) {
            $("#imgBrain").attr("src", "Images/AdultBrain.png");
            $('#currLevel').text('Current Level: Adult');
            $('#nextLevel').text('To next level: ' + Math.floor(level4 - player.totalKnowledge));
        } else if (player.level === 4) {
            $("#imgBrain").attr("src", "Images/Brain-.png");
            $('#currLevel').text('Current Level: Brainiac');
            $('#nextLevel').text('To next level: ' + Math.floor(level5 - player.totalKnowledge));
        } else if (player.level >= 5) {
            $("#imgBrain").attr("src", "Images/GalaxyBrain.png");
            $('#currLevel').text('Current Level: Galaxy Brain');
            $('#nextLevel').text('Max Level Reached');
        } else {
            return;
        }
        if (numTutor > 0) {
            $('#tutorsPanel').removeClass("hidden");
        }
        if (numProf > 0) {
            $('#profPanel').removeClass("hidden");
        }
        if (numSchool > 0) {
            $('#schoolPanel').removeClass("hidden");
        }
        if (numUni > 0) {
            $('#universityPanel').removeClass("hidden");
        }
        if (numLab > 0) {
            $('#labPanel').removeClass("hidden");
        }
    }

/**
 * Button Click functions
 */
    $("#btnBrain").click(() => {
       if (click1 === false) {
           player.numKnowledge ++;
           player.totalKnowledge ++;
       }
       else if (click1) {
           player.numKnowledge += 10;
           player.totalKnowledge += 10;
       }
       else if (click2) {
           player.numKnowledge += 50;
           player.totalKnowledge += 50;
       }
    });
    var bookRate = 1.3;
    $('#book').on('click', () => {
        numBook++;
        // Deduct cost
        player.numKnowledge -= bookCost;
        bookCost *= bookRate;
    });
    var tutorRate = 1.2;
    $('#tutor').on('click', () => {
        numTutor++;
        player.numKnowledge -= tutorCost;
        tutorCost *= tutorRate;
    });
    var profRate = 1.4;
    $('#prof').on('click', () => {
        numProf++;
        player.numKnowledge -= profCost;
        profCost *= profRate;
    });
    var schoolRate = 1.2;
    $('#school').on('click', () => {
        numSchool++;
        player.numKnowledge -= schoolCost;
        schoolCost *= schoolRate;
    });
    var uniRate = 1.2;
    $('#uni').on('click', () => {
        numUni++;
        player.numKnowledge -= uniCost;
        uniCost *= uniRate;
    });
    var labRate = 1.3;
    $('#lab').on('click', () => {
        numLab++;
        player.numKnowledge -= labCost;
        labCost *= labRate;
    });

    $('#btnBookUpgrd').on('click', () => {
        bookUpgrade = true;
        player.numKnowledge -= bookUpgradeCost;
        
    });

    $('#btnSchoolUpgrd').on('click', () => {
        schoolUpgrade = true;
        player.numKnowledge -= schoolUpgradeCost;
    });

    $('#btnSchoolUpgrd2').on('click', () => {
        schoolUpgrade2 = true;
        player.numKnowledge -= schoolUpgrade2Cost;
    });

    $('#btnClickUpgrade1').on('click', () => {
        click1 = true;
        player.numKnowledge -= click1Cost;
    });

    $('#btnClickUpgrade2').on('click', () => {
        click2 = true;
        player.numKnowledge -= click2Cost;
    });

///////////////////////////////////////////////////////////////////////////
    var numKnowledge = 0;
    var player = new User();
    player.userId = $('#lblID').val();

//Hides or shows store items based on the amount of store items needed.
    function hideStoreItems(higherElement: any, numLowerElement: any, numNeeded: any, levelNeeded: any);
    function hideStoreItems(higherElement, numLowerElement, numNeeded, levelNeeded) {
        var toHide = document.getElementById(higherElement);
        var hasLevel = player.level >= levelNeeded;
        var hasElements = numLowerElement > numNeeded;
        if (!hasElements && !hasLevel) {
            toHide.style.display = "none";
        } else if (hasElements && hasLevel) {
            toHide.style.display = "block";
        }
    }

// Disables or enables buttons based on numKnowledge and store item cost.
    function disableEnableStoreItem(id: any, cost: any);
    function disableEnableStoreItem(id, cost) {
        var btn = $("#" + id);
        var hasKnowledgeCost = cost > player.numKnowledge;
        // If the cost is lower than the player's current knowledge then it wil be disabled
        btn.prop('disabled', hasKnowledgeCost);

        // Fade in/Fade out based on if player has enough knowledge
        if (hasKnowledgeCost) {
            btn.css('opacity', 0.5);
        } else {
            btn.css('opacity', 1);
        }
    }

function saveCookie() {
    $.cookie('numKnowledgeCookie', player.numKnowledge, { expires: 10 });
    $.cookie('totalNumKnowledgeCookie', player.totalKnowledge, { expires: 10 });
    }

function loadCookie() {
    if ($.cookie('numKnowledgeCookie') != undefined) {
        var cookieValue1 = parseInt($.cookie("numKnowledgeCookie"));
        var cookieValue2 = parseInt($.cookie("totalNumKnowledgeCookie"));
        player.numKnowledge = cookieValue1;
        player.totalKnowledge = cookieValue2;
    }
}

//Calc knowledge per second
function knowledgePerSecond() {
    var bps = numBook * 1 / 10;
    if (bookUpgrade) {
        bps = numBook * 5 / 10;
    }
    var tps = numTutor * 10 / 10;
    var pps = numProf * 20 / 10;

    var sps = numSchool * 30 / 10;
    if (schoolUpgrade) {
        sps = numSchool * 60/ 10;
    }
    else if (schoolUpgrade2) {
        sps = numSchool * 120/ 10;
    }

    var ups = numUni * 150 / 10;
    var lps = numLab * 400/ 10;
    var kps = bps + tps + pps + sps + ups + lps;
    $('#knowledgePerSecond').text('Knowledge/second: ' + kps);
}

// stuff you want to do every second
function oneSecondFunction() {
    var bps = numBook * 1 / 100;
    if (bookUpgrade) {
        bps = numBook * 5 / 100;
    }
    var tps = numTutor * 10 / 100;
    var pps = numProf * 20 / 100;
    var sps = numSchool * 30 / 100;
    if (schoolUpgrade) {
        sps = numSchool * 60 / 100;
    }
    else if (schoolUpgrade2) {
        sps = numSchool * 120 / 100;
    }

    var ups = numUni * 150 / 100;
    var lps = numLab * 400 / 100;

    // Book add .1 or .5 per second 
    player.numKnowledge += bps;
    player.totalKnowledge += bps;

    // Tutor add 1 per second (5/100 every s)
    player.numKnowledge += tps;
    player.totalKnowledge += tps;

    // Prof add 2 per second
    player.numKnowledge += pps;
    player.totalKnowledge += pps;

    // School add 3 or 5 or 10 per second
    player.numKnowledge += sps;
    player.totalKnowledge += sps;

    // University add 15 per second
    player.numKnowledge += ups;
    player.totalKnowledge += ups;

    // Research Lab add 40 per second
    player.numKnowledge += lps;
    player.totalKnowledge += lps;
   

    if (numBook > 2) {
        $('#btnBookUpgrd').removeClass('hidden');
    }
    if (bookUpgrade === true) {
        $('#btnBookUpgrd').addClass('hidden');
        document.getElementById('book').title = ".5 knowledge / s";
    }

    if (numSchool > 2) {
        $('#btnSchoolUpgrd').removeClass('hidden');
    }
    if (schoolUpgrade === true) {
        $('#btnSchoolUpgrd').addClass('hidden');
        document.getElementById('school').title = "6 knowledge / s";
    }

    if (numUni > 1) {
        $('#btnSchoolUpgrd2').removeClass('hidden');
    }
    if (schoolUpgrade2 === true) {
        $('#btnSchoolUpgrd2').addClass('hidden');
        document.getElementById('school').title = "12 knowledge / s";
    }

    if (numTutor > 4) {
        $('#btnClickUpgrade1').removeClass('hidden');
    }
    if (click1 === true) {
        $('#btnClickUpgrade1').addClass('hidden');
    }

    if (numUni > 2) {
        $('#btnClickUpgrade2').removeClass('hidden');
    }
    if (click2 === true) {
        $('#btnClickUpgrade2').addClass('hidden');
    }
}

    // Run UI update code every 60ms
    $(() => {
        setInterval(oneSecondFunction, 60);
    });

    // Run UI update code every 10ms
window.setInterval(() => {
    player.getLevel();
    setButton();
    knowledgePerSecond();
        
        // Update the text showing how many knowledge/upgrades we have, using Math.floor() to round down
        $("#knowledgeCount").text(Math.floor(player.numKnowledge));
        $("#totKnowledgeCount").text(Math.floor(player.totalKnowledge));
        $('#book-count').text(Math.floor(numBook));
        $('#tutor-count').text(Math.floor(numTutor));
        $('#prof-count').text(Math.floor(numProf));
        $('#school-count').text(Math.floor(numSchool));
        $('#uni-count').text(Math.floor(numUni));
        $('#lab-count').text(Math.floor(numLab));
        
        // Update the store items with their current prices/text
        // Additional upgrades
        $('#book').text(Math.floor(bookCost));
        $('#tutor').text(Math.floor(tutorCost));
        $('#prof').text(Math.floor(profCost));
        $('#school').text(Math.floor(schoolCost));
        $('#uni').text(Math.floor(uniCost));
        $('#lab').text(Math.floor(labCost));

        $('#btnBookUpgrd').text('Advanced Baby Book: ' + bookUpgradeCost);
        $('#btnSchoolUpgrd').text('Upgrade to Middle School, 5 knowledge/ s: ' + schoolUpgradeCost);
        $('#btnSchoolUpgrd2').text('Upgrade to High School, 10 knowledge/ s: ' + schoolUpgrade2Cost);
      
        $('#btnClickUpgrade1').text('10 Knowledge per Click: ' + click1Cost);
        $('#btnClickUpgrade2').text('50 Knowledge per Click: ' + click2Cost);
    

        // Enable/disable the buttons based on our numKnowledge and other factors
        disableEnableStoreItem('book', bookCost);
        disableEnableStoreItem('tutor', tutorCost);
        disableEnableStoreItem('school', schoolCost);
        disableEnableStoreItem('prof', profCost);
        disableEnableStoreItem('uni', uniCost);
        disableEnableStoreItem('lab', labCost);

        $('#btnBookUpgrd').prop('disabled', player.numKnowledge < bookUpgradeCost);
        $('#btnSchoolUpgrd').prop('disabled', player.numKnowledge < schoolUpgradeCost);
        $('#btnSchoolUpgrd2').prop('disabled', player.numKnowledge < schoolUpgrade2Cost);
     
        $('#btnClickUpgrade1').prop('disabled', player.numKnowledge < click1Cost);
        $('#btnClickUpgrade2').prop('disabled', player.numKnowledge < click2Cost);

        //Make buttons appear/disappear
        hideStoreItems('tutor', numBook, 5,1);
        hideStoreItems('prof', numTutor, 2,2);
        hideStoreItems('school', numProf, 3,3);
        hideStoreItems('uni', numSchool, 3,4);
        hideStoreItems('lab', numUni, 1, 5);

    }, 10);
