function ChangeMoney() {
    let a = document.getElementById("nhaptien").value;
    let b = document.getElementById("From").value;
    let c = document.getElementById("To").value;
    let tienchuyendoi;


    if (b == "USD" && c == "VND") {
        tienchuyendoi = "tiền chuyển đổi là: " + (a * 23000) + " Đ";
    }
    else if (b == "VND"&& c =="USD"){
        tienchuyendoi = "tiền chuyển đổi là: : "+ (a / 23000) + " $";
    }
    else if (b == "VND") {
        tienchuyendoi = "tiền chuyển đổi là: : " + a + " Đ"
    } else {
        tienchuyendoi = "tiền chuyển đổi là: : " + a + " $"
    }
        
    document.getElementById("Result").innerHTML = tienchuyendoi;
}