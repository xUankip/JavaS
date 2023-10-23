var newEl = document.createElement('li');

var newText = document.createTextNode('Mail');

newEl.appendChild(newText);

var position = document.getElementsByTagName('ul')[0];

position.appendChild(newEl);


//creat LI hien thi 1st
var newEl1 = document.createElement('li');
var newText1 = document.createTextNode('Baka');

newEl1.appendChild(newText1);
var newE = document.getElementsByTagName('ul')[0]
newE.insertBefore(newEl1, newE.childNodes[0])

//Add class dark.
var drakItem = document.querySelectorAll('li.light');
if (drakItem.length>0){
    for ( var i = 0; i < drakItem.length; i++) {
        drakItem[i].className='dark';
    }
}

var header = document.getElementsByTagName('h1')[0];
var headerText = header.firstChild.nodeValue;
var totalItems = document.getElementsByTagName('li').length;
var newheader = headerText +' '+ '<span>' + totalItems + '</span>';
header.innerHTML= newheader