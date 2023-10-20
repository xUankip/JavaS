//Tạo function 
    function caculator1(){
        var giaTien1 = 30; //khai báo giá trị
        var soLuong1 = document.getElementById('soluong1').value;//lấy số liệu từ class
        var total1 = giaTien1*soLuong1; //khai báo giá trị tổng
        document.getElementById('total1').innerHTML = total1; // in ra giá trị tổng
        if(total1>100){
            total1*=0.95;
            document.getElementById('total1').classList.add('hong');
            document.getElementById('total1').classList.remove('vang')
        }
        else if(total1<100){
            total1*=1
            document.getElementById('total1').classList.add('vang')
            document.getElementById('total1').classList.remove('hong')
        }
    
        var giaTien2 = 95;
        var soLuong2 = document.getElementById('soluong2').value;
        var total2 = giaTien2*soLuong2;
        if(total2>300){
            total2*=0.95;
            document.getElementById('total2').classList.add('xanh');
            document.getElementById('total2').classList.remove('vang')
        }
        else{
            total2*=1
            document.getElementById('total2').classList.add('vang')
            document.getElementById('total2').classList.remove('xanh')
        }
        document.getElementById('total2').textContent=total2;
    
        var giatien3 = 10;
        var soLuong3 = document.getElementById('soluong3').value;
        var total3 = giatien3*soLuong3;
        if(total3>100){
            total3*=0.95;
            document.getElementById('total3').classList.add('do');
            document.getElementById('total3').classList.remove('vang')
        }
        else if(total3<100){
            total3*=1
            document.getElementById('total3').classList.add('vang')
            document.getElementById('total3').classList.remove('do')
        }
        document.getElementById('total3').innerHTML = total3;
    }setInterval(caculator1,100);
    caculator1();


    






















    // return caculator1+caculator2+caculator3;
// function total(){
// var myca = caculator1();
// document.getElementById('total1').innerHTML=myca;
// var myca2 = caculator2();
// document.getElementById('total2').innerHTML=myca2;
// var myca3= caculator3();
// document.getElementById('total3').innerHTML=myca3;
// var total = myca + myca2 + myca3;
// document.getElementById('total').innerHTML.innerHTML=total;
// }