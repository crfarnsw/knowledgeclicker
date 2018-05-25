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

    var bookCost = 15;
    var tutorCost = 250;
    var profCost = 1000;
    var schoolCost = 12000;
    var uniCost = 50000;
    var labCost = 100000;

    var bookUpgradeCost = 5000;
    var schoolUpgradeCost = 8000;
    var schoolUpgrade2Cost = 40000;
    var labUpgradeCost = 100000;

    var click1Cost = 2000;
    var click2Cost = 10000;

    var schoolCost = 10000;
var level = 0;
var progress = 0;

function SaveCookie() {
    $.cookie('cookie', numKnowledge, { expires: 10 });

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("btnSaveProgress");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
        
    
   }

function LoadCookie() {
    var cookieValue = parseInt($.cookie("cookie"));
    numKnowledge = cookieValue;
}

function HasProgress() {
    var hasProgress = false;
    var x = progress[0];
    if (x > 0) {
        return true;
    }
    else {
        return false;
    }
}

function LoadProgress() {
    var json = getCookie('cookie');
    var arr = JSON.parse(json);
    if (json > 0) {
        knowledge.numKnowledge = json;
    }
}

//function DevToolScore() {
//    if (click1 === false) {
//        numKnowledge += (999);
//        totalKnowledge += (999);
//    }

//    //10(9+1) knowledge per click
//    else if (click1 === true) {
//        numKnowledge = numKnowledge + 9999;
//        totalKnowledge = totalKnowledge + 9999;
//    }

//    //100(99+1) knowledge per click
//    else if (click2 === true) {
//        numKnowledge = numKnowledge + 99999;
//        totalKnowledge = totalKnowledge + 99999;
//    }
//}

//function clickUpgrade() {
//    //1 knowledge per click
//    if (click1 === false) {
//        numKnowledge++;
//        totalKnowledge++;
//    }

//    //10(9+1) knowledge per click
//    else if (click1 === true) {
//        numKnowledge = numKnowledge + 9;
//        totalKnowledge = totalKnowledge + 9;
//    }

//    //100(99+1) knowledge per click
//    else if (click2 === true) {
//        numKnowledge = numKnowledge + 99;
//        totalKnowledge = totalKnowledge + 99;
//    }
//}

function incrementKnowledge() {
    numKnowledge++;
}

    // Increase numKnowledge every time brain is clicked
    $('#btnBrain').on('click', function () {
        numKnowledge++;
        totalKnowledge++; 
    });

     //Create click upgrades
    $('#clickUpgrade1').on('click', function () {
        click1 = true;
        numKnowledge -= click1Cost;
    });

    $('#clickUpgrade2').on('click', function () {
        click2 = true;
        numKnowledge -= click2Cost;
    });

    //Create store upgrades
    $('#bookUpgrd').on('click', function () {
        bookUpgrade = true;
        numKnowledge -= bookUpgradeCost;
    });

    $('#schoolUpgrd').on('click', function () {
        schoolUpgrade = true;
        numKnowledge -= schoolUpgradeCost;
    });

    $('#schoolUpgrd2').on('click', function () {
        schoolUpgrade2 = true;
        numKnowledge -= schoolUpgrade2Cost;
    });

    $('#labUpgrd').on('click', function () {
        labUpgrade = true;
        numKnowledge -= labUpgradeCost;
    });

// Same for store items
    $('#book').on('click', function () {
     numBook++;
     // Deduct cost
     numKnowledge -= bookCost;
     // Increase cost for the next one, using Math.ceil() to round up
     bookCost = Math.ceil(bookCost * 1.5);
});

    // Ditto for master-widgeteer... you get the idea
    $('#tutor').on('click', function () {
        numTutor++;
        numKnowledge -= tutorCost;
        tutorCost = Math.ceil(tutorCost * 1.5);
    });

    $('#prof').on('click', function () {
        numProf++;
        numKnowledge -= profCost;
        profCost = Math.ceil(profCost * 1.3);
    });

    $('#school').on('click', function () {
        numSchool++;
        numKnowledge -= schoolCost;
        schoolCost = Math.ceil(schoolCost * 1.2);
    });

    $('#uni').on('click', function () {
        numUni++;
        numKnowledge -= uniCost;
        uniCost = Math.ceil(uniCost * 1.2);
    });

    $('#lab').on('click', function () {
        numLab++;
        numKnowledge -= labCost;
        labCost = Math.ceil(labCost * 1.4);
    });


function setButton(level) {
    if (level.valueOf() === ("level0")) {
        $("#imgBrain").attr("src", "Images/BabyBrain.png");
    } else if (level.valueOf() === ("level1")) {
        $("#imgBrain").attr("src", "Images/KidBrain.png");
    } else if (level.valueOf() === ("level2")) {
        $("#imgBrain").attr("src", "Images/TeenBrain.png");
    } else if (level.valueOf() === ("level3")) {
        $("#imgBrain").attr("src", "Images/AdultBrain.png");
    } else if (level.valueOf() === ("level4")) {
        $("#imgBrain").attr("src", "Images/Brain-.png");
    } else if (level.valueOf() === ("galaxyBrain")) {
        $("#imgBrain").attr("src", "Images/GalaxyBrain.png");
    } else {
        return;
    }
    }

var level1knowledgeneeded = 1000;

function getLevel() {
    if (totalKnowledge < 10000) {
        return "level0";
    } else if (totalKnowledge > 10000 && totalKnowledge < 80000) {
        return "level1";
    } else if (totalKnowledge > 80000 && totalKnowledge < 200000) {
        return "level2";
    } else if (totalKnowledge > 200000 && totalKnowledge < 450000) {
        return "level3";
    } else if (totalKnowledge > 450000 && totalKnowledge < 800000) {
        return "level4";
    } else if (totalKnowledge > 800000) {
        return "galaxyBrain";
    }
}

function upgradeTree() {
    if (numProf < 8) {
        $('#school').text('Hire ' + (8 - numProf) + ' more Professor(s) to unlock!');
    }
    else {
        $('#school').text('Buy School: ' + schoolCost);
    }
    if (numSchool < 4) {
        $('#uni').text('Buy ' + (4 - numSchool) + ' more School(s) to unlock!');
    }
    else {
        $('#uni').text('Buy University: ' + uniCost);
    }
    if (numUni < 3) {
        $('#lab').text('Hire ' + (3 - numUni) + ' more University(s) to unlock!');
    }
    else {
        $('#lab').text('Buy Research Lab: ' + labCost);
    }
}



    // Run UI update code every 10ms
    window.setInterval(function () {
        //updateProgress();
        // Book add 1 per second (1/100 every 10ms)
        if (bookUpgrade === false) {
            numKnowledge += (numBook * 1 / 100);
            totalKnowledge += (numBook * 1 / 100);
        }

        else if (bookUpgrade === true) {
            numKnowledge += (numBook * 5 / 100);
            totalKnowledge += (numBook * 5 / 100);
        }

        // Tutor add 5 per second (5/100 every 10ms)
        numKnowledge += (numTutor * 5 / 100);
        totalKnowledge += (numTutor * 5 / 100);

        // Prof add 10 per second
        numKnowledge += (numProf * 10 / 100);
        totalKnowledge += (numProf * 10 / 100);

        // School add 20 per second
    
        if (schoolUpgrade === false) {
            numKnowledge += (numSchool * 20 / 100);
            totalKnowledge += (numSchool * 20 / 100);
        }

        else if (schoolUpgrade === true) {
            numKnowledge += (numSchool * 30 / 100);
            totalKnowledge += (numSchool * 30 / 100);
        }

        else if (schoolUpgrade2 === true) {
            numKnowledge += (numSchool * 40 / 100);
            totalKnowledge += (numSchool * 40 / 100);
        }

        // University add 50 per second
        numKnowledge += (numUni * 50 / 100);
        totalKnowledge += (numUni * 50 / 100);

        // Research Lab add 100 per second
        if (labUpgrade === false) {
            numKnowledge += (numLab * 100 / 100);
            totalKnowledge += (numLab * 100 / 100);
        }
        else if (labUpgrade === true) {
            numKnowledge += (numLab * 150 / 100);
            totalKnowledge += (numLab * 150 / 100);
        }

        // Update the text showing how many knowledge/upgrades we have, using Math.floor() to round down
        $("#knowledgeCount").text(Math.floor(numKnowledge));
        $("#totKnowledgeCount").text(Math.floor(totalKnowledge));
        $('#book-count').text(Math.floor(numBook));
        $('#tutor-count').text(Math.floor(numTutor));
        $('#prof-count').text(Math.floor(numProf));
        $('#school-count').text(Math.floor(numSchool));
        $('#uni-count').text(Math.floor(numUni));
        $('#lab-count').text(Math.floor(numLab));

        // Update the widgeteers with their current prices/text
        $('#book').text('Buy Book: ' + bookCost);
        $('#tutor').text('Hire Tutor: ' + tutorCost);
        $('#prof').text('Hire Professor: ' + profCost);
        $('#school').text('Buy School: ' + schoolCost);
        $('#uni').text('Buy University: ' + uniCost);
        $('#lab').text('Buy Labratory: ' + labCost);
        
        $('#bookUpgrd').text('Book creates 5 knowledge/s: ' + bookUpgradeCost);
        $('#schoolUpgrd').text('Upgrade to Middle School, 20 knowledge/ s: ' + schoolUpgradeCost);
        $('#schoolUpgrd2').text('Upgrade to High School, 30 knowledge/ s: ' + schoolUpgrade2Cost);
        $('#labUpgrd').text('Lab creates 150 knowledge/s: ' + labUpgradeCost);

        $('#btnClickUpgrade1').text('Knowledge per Click x10: ' + click1Cost);
        $('#btnclickUpgrade2').text('Knowledge per Click x10: ' + click2Cost);

        // Enable/disable the widgeteer buttons based on our numKnowledge and other factors
        $('#book').prop('disabled', bookCost > numKnowledge);
        $('#tutor').prop('disabled', tutorCost > numKnowledge);
        $('#prof').prop('disabled', profCost > numKnowledge);
        if (schoolCost > numKnowledge || numProf < 8) {
            $('#school').prop('disabled', true);
        }
        else {
            $('#school').prop('disabled', false);
        }
        if (uniCost > numKnowledge || numSchool < 4) {
            $('#uni').prop('disabled', true);
        }
        else {
            $('#uni').prop('disabled', false);
        }
        if (labCost > numKnowledge || numUni < 3) {
            $('#lab').prop('disabled', true);
        }
        else {
            $('#lab').prop('disabled', false);
        }

        $('#bookUpgrd').prop('disabled', numKnowledge < bookUpgradeCost);
        $('#schoolUpgrd').prop('disabled', numKnowledge < schoolUpgradeCost);
        $('#schoolUpgrd2').prop('disabled', numKnowledge < schoolUpgrade2Cost);
        $('#labUpgrd').prop('disabled', numKnowledge < labUpgradeCost);

        $('#clickUpgrade1').prop('disabled', numKnowledge < click1Cost);
        $('#clickUpgrade2').prop('disabled', numKnowledge < click2Cost);

        //Make buttons appear/disappear
        var tutHide = document.getElementById('tutor');
        if (numBook < 5) {
            tutHide.style.display = "none";
        }
        else {
            tutHide.style.display = "block";
        }

        var profHide = document.getElementById('prof');
        if (numTutor < 2) {
            profHide.style.display = "none";
        }
        else {
            profHide.style.display = "block";
        }

        var schoolHide = document.getElementById('school');
        if (numProf < 2) {
            schoolHide.style.display = "none";
        }
        else {
            schoolHide.style.display = "block";
        }

        var uniHide = document.getElementById('uni');
        if (numSchool < 2) {
            uniHide.style.display = "none";
        }
        else {
            uniHide.style.display = "block";
        }

        //var click1Hide = document.getElementById('clickUpgrade1');
        //if (totalKnowledge < 7500) {
        //    click1Hide.style.display = "none";
        //}
        //else {
        //    click1Hide.style.display = "block";
        //}

        //var click2Hide = document.getElementById('clickUpgrade2');
        //if (totalKnowledge < 20000) {
        //    click2Hide.style.display = "none";
        //}
        //else {
        //    click2Hide.style.display = "block";
        //}

        //var bookUpgrdHide = document.getElementById('bookUpgrd');
        //if (num < 7500) {
        //    bookUpgrdHide.style.display = "none";
        //}
        //else {
        //    bookUpgrdHide.style.display = "block";
        //}
        

    }, 10);
