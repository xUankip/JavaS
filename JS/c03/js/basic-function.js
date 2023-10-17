var msg = 'Sign up to receive our newletter for 10% off!';
function updateMessage(){
    var el = document.getElementById('message');
    el.textContent= msg;
}
function updateMessage2(iMess){
    var el = document.getElementById('message');
    el.textContent= iMess;
}
//Goi ra function
updateMessage2('bla bla bla');