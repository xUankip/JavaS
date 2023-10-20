var score = [ 24, 32, 17];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = '';

for (var i=0; i<arrayLength; i++){
    //array are zore based ( 0 la so 1)
    roundNumber = (i+1);
    //write the current mess
    msg += 'Round' + roundNumber +':';
    //get th score from the scores array 
    msg= score[i]+ '<br>';
}
document.getElementById('answer'). innerHTML= msg;