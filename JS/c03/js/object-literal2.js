//Set up the object
var hotel = {
    name : 'Park',
    rooms : 120,
    booked : 77,
    checkAvailability : function(){
        return this.rooms - this.booked; // ccần có this bởi vì nó ở trong funtion

    }
};

//Update the HTML
var elName = document.getElementById('hotelName'); //get element
elName.textContent = hotel.name; //update HTML voi gia tri hotel.name


var elRooms = document.getElementById('rooms'); //lấy phần tử bằng thuộc tính getbyid trong rooms
elRooms.textContent= hotel.checkAvailability(); //update HTML với giá trị hotel.check ( đc gọi ra trên var function)