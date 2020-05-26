
let temp = new Date;
var time = {
    day:temp.getDate(),
    day_temp:temp.getDay(),
    moth:temp.getMonth(),
    year:temp.getFullYear(),
    year_flg:false,
    flag:false,
    moth_temp:0
}
console.log(time)

var cont = 1;

function next() {
    // event's


    var ralway = $(".container-fluid .row .col-12 #railWay");
    var events = $(".container-fluid .row .col-12 #railWay #event .container .row");
    var done = $(".container-fluid .row .col-12 #railWay #done");
    var Main1 = $(".container-fluid .row .col-12 #railWay #done #Main1");
        

        done.animate({
            width:"-=100vw"
            },100,function (){
    
                done.css("display", "none");
            });


       //ajaks
       let time = localStorage.getItem("selectTime");
       let day = time.split("_")[0];
       let moth = time.split("_")[1];
       let year = time.split("_")[2];
   
       console.log("gui day> "+day);
   
   
       events.load("/work.php", {
           day,
           moth,
           year,
   
   
       });
   

        
        


}

    




function setTime(we =undefined,m1 = undefined,year=undefined){

    var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var mou = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Des"];

    let temp = "";
    var calendar_img = $("#main #calendar_img  #bottom p");

    
    if(we != undefined){


        we = we.replace("px","");
        we = Number(we);
        var p = we*(time.moth);
        m1.animate({ right:"+="+p },500);  
        cont += time.moth;
    }
    if(time.flag){

        
        console.log("move to  "+time.moth_temp);
        console.log("from "+time.moth);

        let m1 = $("#main #calendar #per_calender #rail_way .moth");
        let we = $("#main #calendar #per_calender #rail_way .moth:first-child").css("width");

        we = we.replace("px","");
        we = Number(we);
        var p = we*(time.moth);
        if(time.moth  > time.moth_temp){
            var p = we*(time.moth-time.moth_temp);
            //console.log("time.moth-time.moth_temp "+(time.moth-time.moth_temp));
            m1.animate({ right:"-="+p },500);  
            cont -= (time.moth_temp);
            time.moth = time.moth_temp;

        }else if(time.moth  < time.moth_temp){
            var p = we*(time.moth_temp-time.moth);
            //console.log("time.moth-time.moth_temp "+(time.moth_temp-time.moth));
            m1.animate({ right:"+="+p },500);  
            cont += (time.moth_temp);
            time.moth = time.moth_temp;
        }
        
    }
    if(year !=undefined){

        var calendar_colume = 7;
        var calendar_row = 6;
        var pix = calendar_colume*calendar_row;
        var mou_num = 1;
        console.log("year is "+year);
    
        var data = print_cal(year,pix,mou_num);
        var play = []
        let pos;
        let max_day;
        var calendar_day;

        var calendar_per_calender_rail_way_train = $("#main #calendar #per_calender #rail_way #train");
        calendar_per_calender_rail_way_train.empty();
    
        for (let mo = 1; mo != 13; mo++) {
    
            var play_temp = [ ];
    
            pos = data.pos_index[mo-1]
            max_day = get_max_days(year,mo);
            

            var data_contner = $("<div class=\"data\"> </div>");
            var moth_contner = $("<div class=\"moth\"> </div>");
            var calendar_per_calender_rail_way = $("#main #calendar #per_calender #rail_way");
            var calendar_per_calender = $("#main #calendar #per_calender");
    
            for (var da = 1; da != (pix)+2; da++) {
                
    
                if( da == pos){
                    
                    for (let a = 1; a != (max_day+1); a++) {
                        play_temp.push(a);
                            calendar_day = $("<div class=\"raw\"> <p> "+a+" <p/> </div>");
                            data_contner.append(calendar_day);
                            // calendar_day.attr("disabled", "not-disabled");
                            //let temp =  $("#main #calendar <div>"+a+"<div>");
                            calendar_day.click(function (e) {  
                                
                                goto({a,time_moth:time.moth,time_year:time.year});
                                localStorage.setItem("selectTime",a+"_"+time.moth+"_"+time.year);
                                next();
                        
                                // $(calendar_day).css({
                                //     'background-color': 'crimson',
                                //      'color': 'wheat',
                                //     'font-size':'large',
                                //     'font-weight':'bolder'
                                // });
                                            });
                            if(a == time.day && mo == time.moth+1){
                                $(calendar_day).css({
                                    'background-color': 'rgb(0, 118, 214)',
                                    'color':'whitesmoke',
                                    'font-size':'large',
                                    'font-weight':'bolder'
                                });
                            }
                        da++;
                    }
                }else if(da < pos){
                    play_temp.push("per");
                        calendar_day = $("<div  class=\"raw\"> <p>  <p/> </div>");
                        data_contner.append(calendar_day);
                        // calendar_day.attr("disabled", "disabled");
                        //let temp =  $("#main #calendar  <div> per <div> ");
                        calendar_day.click(function (e) { ; goto("pre")  });
                }else{
                    play_temp.push("next");  
                        calendar_day = $("<div  class=\"raw\"> <p>  <p/> </div>");
                        data_contner.append(calendar_day);
                        // calendar_day.attr("disabled", "disabled");
                        //let temp =  $("#main #calendar  <div> per <div> ");
                        calendar_day.click(function (e) {   goto("next") });  
            
                }
                
            }
    
            moth_contner.append(data_contner);
            calendar_per_calender_rail_way_train.append(moth_contner);
            calendar_per_calender_rail_way.append(calendar_per_calender_rail_way_train)
            calendar_per_calender.append(calendar_per_calender_rail_way);
    
            play.push(play_temp);
           
    
        }
    }
    


    
    temp = temp+day[time.day_temp]+" "+temp+mou[time.moth]+" "+time.year;
    calendar_img.text(temp);


}
function setMoth(moth){
    time.moth_temp = moth+1;
    time.flag = true;
    
    if(time.year_flg){
        setTime(undefined,undefined,time.year);
    }
    setTime();
    time.year_flg = false;
    time.flag = false;

}
function setYear(year){
    time.year = year;
    time.year_flg = true;
    //setTime();
}
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
    for (let pre = min; !(pre == max); pre++) {
        re.push(pre);
    }
    return re
}
function get_max_days(year,mou) {
    
    if(mou%2 == 0){

        if(mou <= 6 ){
            // day's = 30
            if(mou == 2){
                let leep = check_leepYear(year);
                if(leep == 1){
                    //days = 29
                    return 29;
                }else{
                    //days = 28
                    return 28;
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
// function get_all_days_pre(year,mou) {
    
   
    
//     if(mou == 1){
//         return year%7;
//     }else{

//         let temp = mou;
//         temp--;
//         let total = 0;

//         while (temp != 0) {

//             if(temp%2 == 0){

//                 if(temp <= 6 ){
//                     // day's = 30
//                     if(temp == 2){
//                         if(check_leepYear(year) == 1){
//                             //days = 29
//                             total += 29;
//                         }else{
//                             //days = 28
//                             total += 28;
//                         }
                    
        
//                     }else{
//                         total += 30;
//                     }
//                 }if((temp >= 8)) {
//                     // day's = 31
//                     total += 31;
//                 }
//             }
//             if((temp%2 != 0)) {
//                 if(temp <= 7){
//                     //day's = 31
//                     total += 31;
//                 }if(temp >= 9) {
//                      //day's = 30
//                      total += 30;
//                 }
//             }
//             temp--;
//         }
//         return total;
// }
// }

function print_cal(year,pic) {
    
    
    let init = (year%7);
    
    if(init == 0){
        init = 1;
    }else if( init > 4 && init <= 6){
        init++;
    }

    init = init -1;


    var remain_days= [];
    var pos_index = [];
    var shfit = [];

    var remain_days_temp = 0;
    var pos_index_temp = 0;
    var shfit_index_temp = 0;

    for (let index = 1; index !=  13; index++) {

        remain_days_temp =  ((pic)-get_max_days(year,index));

        if(remain_days_temp > 7){
            
            for (let i = 0; remain_days_temp > 7; i++) { remain_days_temp = remain_days_temp - 7; }
           // console.log( index +" > "+ remain_days_temp );
           // index1 = [remain_days_temp];
            remain_days.push(remain_days_temp);
        }else{

           // console.log( index +" : "+ remain_days_temp );
            //index1 = [remain_days_temp];
            remain_days.push(remain_days_temp);
        }
        
        
    }

    for (let index = 1; index !=  13; index++) {

        if(index == 1){


            pos_index.push(init+1);
            shfit.push(init);


        }else if(index == 2){

            shfit_index_temp = remain_days[index-2] - shfit[index -2]
            shfit_index_temp = 7 - shfit_index_temp;
            for (let o = 0; shfit_index_temp > 7; o++) {
                shfit_index_temp = shfit_index_temp - 7;
                
            }

            shfit.push(shfit_index_temp);
            pos_index.push(shfit_index_temp+1);
        }else{

            shfit_index_temp =  remain_days[index-2] - shfit[index -2]

            if(shfit_index_temp == 0){

                shfit.push(shfit_index_temp);
                pos_index.push(shfit_index_temp+1);
            }else{

                if(shfit_index_temp < 0){

                    shfit_index_temp = Math.abs(shfit_index_temp)
                    shfit.push(shfit_index_temp);
                    pos_index.push(shfit_index_temp+1);

                }else{

                    shfit_index_temp = 7 - shfit_index_temp;

                    shfit.push(shfit_index_temp);
                    pos_index.push(shfit_index_temp+1);
                }
            }
        }
    }

    // console.log("remain_days");
    // console.log(remain_days);
    // console.log("pos_index");
    // console.log(pos_index);
    // console.log("shfit");
    // console.log(shfit);

    return {pos_index,shfit,remain_days};



}





$( function() {

    //setTime();


    var year = time.year ;
    var mou_num = 1;

    setTime(undefined,undefined,year);

   
    
    // console.log("paly_temp");
    // console.log(paly_temp);
    //console.log("paly");
    //console.log(play);

   
    let back_button = $('#main #calendar_img  #bottom #pre');
    let next_button = $('#main #calendar_img  #bottom #next');
    let m1 = $("#main #calendar #per_calender #rail_way .moth");
    
    let we = $("#main #calendar #per_calender #rail_way .moth:first-child").css("width");

    setTime(we,m1);
    //console.log(we);
    
    // next_button.click(function () {


    //     if(cont <= 11){ m1.animate({ right:"+="+we },500); cont++;  console.log(cont);  
        
        
    //     }
       
       

    // });
    // back_button.click(function () {

        
    //     if(0 <= cont && cont <= 12){ m1.animate({ right:"-="+we },500); cont--;  console.log(cont); }
        

    // });




})
