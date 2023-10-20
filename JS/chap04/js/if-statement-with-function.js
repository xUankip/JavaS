var score = 76;
var msg= '';
function congrat(){
    msg += 'Congrat!!!';
} 
if(score >= 50 ){
    congrat();
    msg += 'Prooceed the next round';
}
var el = document.getElementById('answer');
el.innerHTML = msg;