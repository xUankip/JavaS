(function (){
    //part one  creat hotel object and write the offer details
    // creat a hotel object using object litteral syntax
    var hotel = {
        name : 'Park',
        roomRate : 240 , 
        discount: 15, 
        offerPrice: function(){
            var offerRate = this.roomRate* ((100-this.discount)/100);
            return offerRate;
        }
    };
    // write out the hotel name, standard rate, and the special rate 
    var hotelName, roomRate, specialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');
    
    hotelName.textContent = hotel.name;
    roomRate.textContent = '$'+ hotel.roomRate.toFixed(2);
    specialRate.textContent = '$'+ hotel.offerPrice();
    
    //part 2 : caculate and write out the expiry details for the offer

    var expiryMsg; // message display to users 
    var today; // today date
    var elEnds; // the el that shots the message about the offer ending

    function offerExpires(today){
        //decalre var within the function for local scope
        var weekFromToday = new Date(today.getTime() + 7 * 24*60*60*1000);

        //creat array to hold the names of days/ month
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September','October', 'November', 'December'];

        //Collect the part of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        //Creat the Message
        expiryMsg= 'Offer expires next ';
        expiryMsg+= day + '<br/> (' +' ' + date +' '+ month + ' ' + year + ' )';
        return expiryMsg;
    }
    today = new Date();
    elEnds = document.getElementById('offerEnds'); // put today date in var
    elEnds.innerHTML = offerExpires(today);
}());