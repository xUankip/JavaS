function myfunction() {
    var x = 1024;
    var y = 9999;
    var deg = Math.floor(Math.random() * (x-y)) + y;
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
    var element = document.getElementById('mainbox');
    element.classList.add('animate');
    setTimeout(function () {
        element.classList.add('animte');
        var valueList = ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"];
        var getValue = valueList[Math.floor(Math.random() * valueList.length)];
        // alert(getValue);
    }, 5000);

}