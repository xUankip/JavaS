var pass = 50;
var score = 75;
var msg;
if(score> pass) {
    msg = 'Congrat!!!'
} else {
    msg='Have another GOGOGO!!!'
}
var el= document.getElementById('answer');
el.textContent= msg;