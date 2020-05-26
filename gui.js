$(function (){


    // for clander

    var sideMuen = $(".container-fluid .row .col-12 #railWay #Main2");

    var sideMuen_button = $("#main #calendar_img #back >  #back_but");

    var sideMuen_x_button = $(".container-fluid .row .col-12 #railWay #Main2 #data #INTO #x");





    // open
    sideMuen_button.click(function (e) { 
        
        //console.log("kolo")
        sideMuen.css("display", "block");
        sideMuen.animate({
            width:"+=300px"
        },200)
        
    });
    // close
    $(sideMuen_x_button).click(function (e) { 
        
            sideMuen.animate({
            width:"-=300px"
            },200,function (){

                sideMuen.css("display", "none");
            });
            
    });


    // event when mouseout




    //mouth
    mou_ui = $(".container-fluid .row .col-12 #railWay #Main2 #data #moth");
    var a = ""; 
    var mou = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Des"];
    for (let index = 1; index != 13; index++) {

        a = $("<div class=\"u\"> <P> "+mou[index-1]+" </P> </div>");
        mou_ui.append(a);
        $(a).click(function (){ 
            setMoth(index-2);
            sideMuen.animate({
                width:"-=300px"
                },200,function (){
    
                    sideMuen.css("display", "none");
                });
         });
        
    }


    //year
    let click = {
        obj:"",
        click:""
    }
    year_ui = $(".container-fluid .row .col-12 #railWay #Main2 #data #year");
    let temp = new Date;
    for (let index = 2018; index != temp.getFullYear()+1; index++) {

        a = $("<div class=\"u \">"+index+" </div>");
        //a = $("<div class=\"checkbox\"><label><input type=\"checkbox\">"+index+"</label></div>");
        year_ui.append(a);
        $(a).click(function (){ 
            setYear(index);

            if((click.click)){
                
                $(click.obj).css({
                    'color': 'rgb(0, 118, 214)',
                    'background-color':'whitesmoke',
                    'font-size':'medium',
                    'font-weight':'normal'
                });

                //click.click[click.click.indexOf(true)] = false;
                click.click = false;
            }
        
            click.obj = (this);
            click.click = (true);
            $(click.obj).css({
                'background-color': 'rgb(0, 118, 214)',
                'color':'whitesmoke',
                'font-size':'large',
                'font-weight':'bolder'
            });

            

        });
        
    }




    //event

    var back_cla_but = $(".container-fluid .row .col-12 #railWay #event #top #back #back_cla_but");
    var done = $(".container-fluid .row .col-12 #railWay #done");
    var events = $(".container-fluid .row .col-12 #railWay #event");

    //open
    back_cla_but.click(function (e) { 
        
        //console.log("kolo")
        done.css("display", "block");
        done.animate({
            width:"+=100vw"
        },100)
        
    });

    //ajaks
    let time = localStorage.getItem("selectTime");
    let day = time.split("_")[0];
    let moth = time.split("_")[1];
    let year = time.split("_")[2];

    console.log("gui day> "+day);


    // events.load("/work.php", {
    //     name,
    //     Dataa,
    //     init_time,
    //     end_time,
    //     loc,
    //     info,

    // });



    

});