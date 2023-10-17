var msg = '<p><b>page title:</b>'+document.title+'<br>';
//find the document title and add it to msg var
msg += '<b>page address:</b>'+ document.URL +'<br>';
msg+= '<b>last modified:</b>' + document.lastModified+'</p>';

//creat a var call el to hold the element whose id attribute has a value of footer 
var el = document.getAnimations('footer');
// write mess into that element 
el.innerHTML=msg;
