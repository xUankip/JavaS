var score = 74;
var msg;
if (score >= 50 ){
    msg = 'Congrat ';
    msg+= 'Proceed to the next ruond';
}
var el = document.getElementById('answer');
el.textContent= msg;