$(document).ready(function () {

    // Settings
    crystals_count= 4; // Up to 4
    crystal_min_power= 1;
    crystal_max_power= 12;
    min_goal=19;
    max_goal=120;


    crystals=[];
    current_score=0;
    wins_count = 0;
    losses_count = 0;
    goal = 0;


    init();

    // Click on the crystal
    $("body").on('click','.crystal',function () {
        var id = parseInt($(this).attr('attr-id'));
        var crystal = crystals[id];
        //console.log(crystal);

        current_score += crystal.power;
        if(current_score < goal){
            // Keep playing
            setCurrentScore(current_score);

        }else if(current_score === goal){
            // Win
            wins_count++;
            current_score= 0;
            setCurrentScore(current_score);
            setNewGoal();
            updateScoreboard();
            $(".crystal").addClass('disabled');
            createCrytals();

        }else{
            // Lose
            losses_count++;
            current_score= 0;
            setCurrentScore(current_score);
            setNewGoal();
            updateScoreboard();
            $(".crystal").addClass('disabled');
            createCrytals();
        }

    });

});


function init(){

    $("#crystals_count").html(crystals_count);
    // Creating crystals
    createCrytals();
    //console.log(crystals);

    setNewGoal();
    setCurrentScore(current_score);
    updateScoreboard();
}

function createCrytals(){
    for(var i = 1; i <= crystals_count; i++){
        crystals[i]={
            power: getRandomInt(crystal_min_power,crystal_max_power)
        };
        //$('<div id="crystal'+i+'" class="crystal disabled" attr-id="'+i+'"></div>').appendTo(".crystals");
        $('#crystal'+i).removeClass('disabled');
    }
}

function updateScoreboard(){
    $(".scoreboard").html('Wins: '+wins_count+'<br/>Losses: '+losses_count);
}
function setCurrentScore(score){
    // Here we can customize current score display
    $("#current_score").html(score);
}
function setNewGoal(){
    goal = getRandomInt(min_goal,max_goal);
    $(".goal").html(goal);
}

// Getting random integer
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}