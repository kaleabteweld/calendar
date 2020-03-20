function check_leepYear(year) {
    if (year%4 == 0) {
        return 1;
    }
    else{
        return 0;
    }
}
function range(min,max) {

    let re = [];
    for (let index = min; !(index == max); index++) {
        re.push(index);
    }
    return re
}
function get_max_days(year,mou) {
    
    if(mou%2 == 0){

        if(mou <= 6 ){
            // day's = 30
            if(mou == 2){
                let leep = check_leepYear(year);
                if(leep){
                    //days = 28
                    return 28;
                }else{
                    //days = 29
                    return 29;
                }
            

            }
            else{
                return 30;
            }
        }if((mou >= 8)) {
            // day's = 31
            return 31;
        }
    }if(!(mou%2 == 0)) {
        if(mou <= 7){
            //day's = 31
            return 31;
        }if(mou >= 9) {
             //day's = 30
             return 30;
        }
    }
}
function goto(day) {
    console.log(day);
}
$( function() {

    var calendar = $("#main #calendar");
    var calendar_img = $("#main #calendar_img");

    var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var mou = ["January","","","","","","","","","","",""];
    var year = 2019;
    var mou_num = 1;
    var days = range(1,get_max_days(year,mou_num)+1);

    console.log(days);
    let n = 0;
    let temp;
    while (n != days.length) {

        temp = calendar.append("<div class=\"day\"> <p>"+days[n]+"</p> </div>"); 

        temp.mouseenter(function () {
            $(temp.children[days[n]]).css("color","white");
            $(temp).css("background-color","skyblue");
        });
        temp.mousedown(function () {
            $(temp).css("background-color","white");
            $(temp.children[days[n]]).css("color","skyblue");
        });
        temp.click(function () {
            goto(days[n]);
        });
        n++;
    }
    




})