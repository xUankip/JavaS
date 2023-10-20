var msg;
var level = 2;
switch(level){
    case 1:
    msg = 'goodluck on te first test';
    break;
    case 2: 
    msg = 'second of three - keep going ';
    break;
    case 3 :
    msg = 'Final round, almost there';
    break;
    default: 
    msg= 'Goodluck';
    break;
}
var el = document.getElementById('answer');
el.textContent = msg;