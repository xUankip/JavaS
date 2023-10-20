var i=1;
var msg= '';
//store 5 times table in a variable
do{
    msg += i+ 'x5=' + (i*5) + '<br>';
    i++;
} while(i<1);
// note how this already 1 and it still runs
document.getElementById('answer').innerHTML=  msg;