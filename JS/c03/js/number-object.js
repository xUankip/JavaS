//creat a var to hold the number that will be used
var originaleNumber = 10.23456;
// Creat a var to hold a message that will be shown on the page
var msg = '<h2>Original Number</h2><p>'+ originaleNumber +'</p>';
// Round the number to 3 decimal places and add to the msg var
msg += '<h2> 3 Decimal PLace</h2><p>'+ originaleNumber.toFixed(3)+ '</p>';
//Round the number to precisely 3 digit and add to msg message
msg += '<h2> 3 Digits</h2><p>' + originaleNumber.toPrecision(3)+'</p>';

//creat a variable call el to hold the element whose id attribute has a value of info
var el = document.getElementById('info');
//Write the mes
el.innerHTML = msg;