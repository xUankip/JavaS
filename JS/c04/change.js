function updateGreeting(){
    const greetingEl = document.getElementById('greeting');
    const timeEl = document.getElementById('time');
    const timeEl2 = document.getElementById('time2');
    const currentTime= new Date();
    const currentHour= currentTime.getHours();
    let greeting='';
    let className = '';
    if (currentHour<12){
        greeting= "Moning!!";
        className= 'morning'
    } else if (currentHour<18) {
        greeting= 'Afternoon!!';
        className= 'afternoon';
    } else{
        greeting= 'Night';
        className= 'evening';
    }
    greetingEl.textContent=greeting;
    greetingEl.className= className;
    const timeString= `Thoi gian day du ${currentTime}`;
    const timeString2= `Thoi gian rut gon ${currentTime.getHours()}: ${String(currentTime.getMinutes()).padStart(2,'0')} : ${String(currentTime.getSeconds()).padStart(2,'0')}`;
    timeEl.textContent=timeString
    timeEl2.textContent=timeString2;
    secondEl.textContent=currentTime.getSeconds();

}
setInterval(updateGreeting, 1000);
updateGreeting();
function changeColor() { 
    const texEl= document.getElementById('text');
    const currentColor = texEl.style.color;
    if (currentColor === ' blue'){
        texEl.style.color= 'red';
        texEl.textContent = 'Van ban do se doi mau'
    }
    else{
        texEl.style.color='blue'
        texEl.textContent = 'Van ban xanh se doi mau'
    }
 }
 setInterval(changeColor, 1000);