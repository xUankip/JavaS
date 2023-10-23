function checkUsername(){
    var username = el.value;
    if (username.length < 5){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not enough, yet...';
    } else {
        elMsg.texContent='';
    }
}
function tipUserName(){
    elMsg.className='tip'
    elMsg.innerHTML = 'Username must be at least 5 character'
}
var el = document.getElementById('username')
var elMsg = document.getElementById('feedback');
// lắng nghe sự kiện addEventLístener 
el.addEventListener('focus', tipUserName); //focus là 1 hàm mặc định, và gọi đến tipuser
el.addEventListener('blur', checkUsername);//blur cũng là 1 hàm mặc định