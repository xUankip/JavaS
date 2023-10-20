var table = 3;
var operator = 'addition';
var i=1;
var msg= '';
if ( operator ==='addition'){
    //do addition
    while( i<11){
        msg += i + '+' + table + '=' + (i + table) + '<br>';
        i++;
    }
} else {
    //do multiplication
    while(i<11){
        msg += i + 'x' + table + '=' + (i * table) + '<br>';
        i++;
    }
}
var el = document.getElementById('blackboard');
el.innerHTML = msg;