var greeting = ('Howdy');
var name = 'Molly';
var message = 'pls check your order:';
var welcome = greeting + name + message;
var sign = 'montague House';
var tiles = sign.length;
var subtotal = tiles*5;
var shipping=7;
var grandTotal = subtotal+shipping;
var el = document.getElementById('greeting');
el.textContent=welcome;

var elSign= document.getElementById('userSign');
elSign.textContent=sign;

var elTiles= document.getElementById('tiles');
elTiles.textContent=tiles;

var elSubTotal= document.getElementById('subTotal');
elSubTotal.textContent=subtotal + '$';

var elShipping= document.getElementById('shipping');
elShipping.textContent=shipping+'$';

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent=grandTotal +'$';

