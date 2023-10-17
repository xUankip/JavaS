//creat a var to hold a random number between 1 and 10 
var randomNum = Math.floor((Math.random()*10)+1);

//creat a var called el to hold the element whose id attribute has a value of info
var el = document.getElementById('info');
//write the number into that element
el.innerHTML= '<h2>Random Number</h2><p>' + randomNum +'</p>';