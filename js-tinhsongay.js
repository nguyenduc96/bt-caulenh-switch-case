function tinhNgay(){
    let a = document.getElementById('input').value;
    let text;
    switch (a){
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            text= "Tháng này có 31 ngày";
            break;
        case"2":
            text="Tháng này có 28 hoặc 29 ngày";
            break;
        case"4":
        case "6":
        case "9":
        case "11":
            text="Tháng này có 30 ngày";
            break;
        default:
            text="Tháng này không tồn tại"
    } document.getElementById('output').innerHTML=text;
}