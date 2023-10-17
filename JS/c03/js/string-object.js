//Tạo biến có tên gọi là 'saying' để chứa chuỗi sẽ sử dụng

var saying = 'Home sweet home';

//Tạo biến có tên gọi là  'msg' để giữ tin nhắn hiển thị thông báo trên trang
//Tìm độ rộng của chuỗi và thêm vào biến msg

var msg = '<h2>Length</h2><p>'+ saying.length + '</p>';

//Biến đổi chuỗi thành uppercase, lower và thêm vào msg
msg+= '<h2>Upercase</h2><p>'+saying.toUpperCase()+ '</p>';
msg+= '<h2>Lowercase</h2><p>'+saying.toLocaleLowerCase()+'</p>'


//tìm giá trị số 12 trong chuỗi và thêm vào biến msg
msg += '<h2>Character index: 12</h2><p>' + saying.charAt(12) + '</p>';
//tìm trong index có phần tử 1st chứa 'ee' và thêm vào msg
msg += '<h2>First EE</h2><p>'+ saying.indexOf('ee') + '</p>';
//tìm trong index có phần tử chứa 'e' ở cuối cùng.
msg += '<h2>Last E </h2><p>'+saying.lastIndexOf('e')+'</p>';
//tìm đối tượng có độ rộng từ 8-14 trong index
msg += '<h2>Charater index: 8-14</h2><p>' + saying.substring(8,14) + '</p>';
//thay thế đối tượng đầu tiên chứa 'me' và thay bằng'w'
msg += '<h2>Replace</h2><p>' + saying.replace('me', 'w')+'</p>';

//tạo biến để giữ giá trị
var el = document.getElementById('info');
//viết ra thông báo cho biến vừa khia báo.
el.innerHTML = msg;