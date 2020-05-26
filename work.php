<?php

require("./php/functions.php");
require("./php/python_php.php");
require("./php/sql_include.php");


function get_key($tabel){

    $INIT =  mysqli_connect("localhost","pain","pain","linkUp");


   $Q = "SELECT * FROM {$tabel}";
   $to = mysqli_query($INIT,$Q);
   $t = mysqli_fetch_assoc($to);

   return array_keys($t);

}


function read_data($query){

   $Result = [];

   $INIT =  mysqli_connect("localhost","pain","pain","linkUp");

   if ($result = mysqli_query($INIT, $query)) {
       while ($row = mysqli_fetch_row($result)) {

           array_push($Result,$row);
       }

       mysqli_free_result($result);
   }

   return $Result;
}

if ((isset($_POST))) {

    
    $day = $_POST['day'];
    $moth = $_POST['moth'];
    $year = $_POST['year'];
    $Date = str($day)."/".str($moth)."/".str($year);

    $title = "";
    $text = "";
        $time = "";
        $Data2 = "";
        $loc = "";
    $Description = " ";
    //$link = "../pstor/get.php?&";

    $key = get_key("main_events");
    $data =  read_data("SELECT * FROM main_events where event_date = '{$Date}' ");
    //print_r($data);


    $data_data_c = 0;
    $data_main_c = 0;


    if ($data != "none" and len($data) != 0) {

        // $card = "<div id=\"cap\">  
        //             <div id=\"data\">
        //                 <h1 id=\"title\"> </h1>
        //                 <p id=\"text\">

        //                 </p>
        //             </div>
        //         </div>";

        $card = "                                
            <div class=\"col-sm-12 col-md-4\">
                <div class=\"card\">
                    <img class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"225\" src=\"/img/stainless-steel-spoon-on-black-ceramic-bowl-3789885.jpg\">
                    <div class=\"card-body\">
                    <p class=\"card-text\"> </p>
                    <div class=\"d-flex justify-content-between align-items-center\">
                    <small class=\"text-muted\"> </small>
                    </div>
                    </div>
                </div>
            </div>";

        while (len($data) != $data_data_c) {
        

            $data_main = $data[$data_data_c];
            
            if (len($data) == 1) {

                $title = $data[0][1];
                $title_print = str_replace("_"," ",$title);

                $Data2 =  $data[$data_main_c][2];
                $Data2  = str_replace("_"," ",$Data2);

                $time =  $data[$data_main_c][3];
                $time  = str_replace("_"," ",$time);

                $loc = $data[0][4];
                $loc  = str_replace("_"," ",$loc);

                $Description =  $data[0][5];
                $Description_print  = str_replace("_"," ",$Description);
    
                $text = $loc."\n "." at ".$time."\n ".$Description_print;

                $card = "                                
                <div class=\"col-sm-12 col-md-4\">
                    <div class=\"card\">
                        <img class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"225\" src=\"/img/stainless-steel-spoon-on-black-ceramic-bowl-3789885.jpg\">
                        <div class=\"card-body\">
                        <p class=\"card-text\"> {$text} </p>
                        <div class=\"d-flex justify-content-between align-items-center\">
                        <small class=\"text-muted\">{$title_print} </small>
                        </div>
                        </div>
                    </div>
                </div>";

                // $card = "<div id=\"cap\">  
                //             <div id=\"data\">
                //                 <h1 id=\"title\">{$title_print}</h1>
                //                 <p id=\"text\">{$text}</p>
                //             </div>
                //         </div>";
                echo $card;
            }
    
            if (len($data) > 1) {

                $cards = " ";
                // print_r($data);
                while (len($data) != $data_main_c) {


                    $title = $data[$data_main_c][1];
                    $title_print = str_replace("_"," ",$title);
    
                    $Data2 =  $data[$data_main_c][2];
                    $Data2  = str_replace("_"," ",$Data2);

                    $time =  $data[$data_main_c][3];
                    $time  = str_replace("_"," ",$time);
    
                    $loc = $data[$data_main_c][4];
                    $loc  = str_replace("_"," ",$loc);
    
                    $Description =  $data[$data_main_c][5];
                    $Description_print  = str_replace("_"," ",$Description);
        
                    $text = $loc."\n "." at ".$time."\n ".$Description_print;

                    // $card = "<div id=\"cap\">  
                    //             <div id=\"data\">
                    //                 <h1 id=\"title\">{$title_print}</h1>
                    //                 <p id=\"text\">{$text}</p>
                    //             </div>
                    //         </div>";

                    $card = "                                
                    <div class=\"col-sm-12 col-md-4\">
                        <div class=\"card\">
                            <img class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"225\" src=\"/img/stainless-steel-spoon-on-black-ceramic-bowl-3789885.jpg\">
                            <div class=\"card-body\">
                            <p class=\"card-text\"> {$text} </p>
                            <div class=\"d-flex justify-content-between align-items-center\">
                            <small class=\"text-muted\">{$title_print} </small>
                            </div>
                            </div>
                        </div>
                    </div>";
                

                    $cards = $cards." ".$card;

                    $data_main_c++;
 
                }
                echo $cards;
            }
            
            $data_data_c++;
        }

       
    }
    else{

    // $card = "<div id=\"cap\">  
    //             <div id=\"data\">
    //                 <h1 id=\"title\"> SORRY NO EVENT'S HERE </h1>
    //                 <p id=\"text\">

    //                 </p>
    //             </div>
    //         </div>";   
            
    $card = "                                
    <div class=\"col-sm-12 col-md-4\">
        <div class=\"card\">
            <img class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"225\" src=\"/img/stainless-steel-spoon-on-black-ceramic-bowl-3789885.jpg\">
            <div class=\"card-body\">
            <p class=\"card-text\"> SORRY NO EVENT'S HERE </p>
            <div class=\"d-flex justify-content-between align-items-center\">
            <small class=\"text-muted\"> </small>
            </div>
            </div>
        </div>
    </div>";

    echo $card;
    }



    
}
    
?>





