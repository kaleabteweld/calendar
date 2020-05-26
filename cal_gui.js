$(function (){


    var back_button = $('#main #calendar_img #back >  #back_but');
    var back_button_mo = $('#mou #back #back_mo');
    var main = $('#main');
    var mou_ui = $('#mou');
    var year_ui = $('#year');
    
    mou_ui.hide(0);

    

    var a = ""; 
    var mou = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Des"];
    for (let index = 1; index != 13; index++) {

        a = $("<div class=\"u\"> <P> "+mou[index-1]+" </P> </div>");
        mou_ui.append(a);
        $(a).click(function (){
           main.slideDown(600,function (){
            mou_ui.hide(0);
            setMoth(index-2);
            
           });

        });
        
    }
     mou_ui.hide(0);



     for (let index = 2018; index != 2021; index++) {

        a = $("<div class=\"u \">"+index+" </div>");
        year_ui.append(a);
        $(a).click(function (){

            setYear(index);
            mou_ui.slideDown(600,function (){
                year_ui.hide(0);
               // mou_ui.show(0);
                
                
               });


        });
        
    }
     year_ui.hide(0);







    back_button.click(function (){
        
        main.slideUp(600,function (){
            mou_ui.show(0);
            
        });
       
    })
    


    back_button_mo.click(function (){
        
        mou_ui.slideUp(600,function (){
            year_ui.show(0);
            
        });
    })
    


















});