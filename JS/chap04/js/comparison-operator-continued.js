var score1 = 90;
var score2 = 95;
var hightScore1 = 75;
var hightScore2 = 95;
//check if the scores are higher than current high scores
var comparison = ( score1 + score2) > ( hightScore1 + hightScore2);

//write the mess into the page 
var el = document.getElementById('answer');
el.innerHTML = 'New high score:' + comparison;