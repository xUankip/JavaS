var pass = 50 ; //pass mark, score
var score = 90;
// check if the user has passed
var hasPassed = score >= pass;
// write the message into the page 
var el = document.getElementById('answer');
el.innerHTML = 'Level passed'+ hasPassed;