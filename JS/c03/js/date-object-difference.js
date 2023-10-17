// Creat a variable to hold a new Date object ( defaults to now)
var today = new Date();
// Get the year to this year
var year= today.getFullYear();
//set the date established
var est = new Date('Dec 12, 1997 6:0:0');
//get different between then and now in milliseconds
var different = today.getTime()- est.getTime();
different= (different/ 31556900000);
//creat a variable call elMsg to hold the element whose id attribute has a value of message
var elMsg=document.getElementById('message');
//viet tin nhan duoi el day
elMsg.textContent= Math.floor(different)+ 'years of online travel advice';
