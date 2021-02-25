// function change(){
//         document.getElementById('test_js').innerHTML="ola "
//         }

/**********            section for increment and decrement of ink pens quantit            **********/

function increase_quantity_ink_pen(){
        let number = parseInt(document.getElementById("value_selection_ink_pen").value)+100;
        let ink_pen_values = parseInt(document.getElementById("ink_pens_value").value)*number
        if (number >900){
               document.getElementById("increment_ink_pen").disabled = true;
               document.getElementById("increment_ink_pen").style.backgroundColor = "white";
               document.getElementById("increment_ink_pen").style.color = "black";
               document.getElementById("increment_ink_pen").style.border = "2px solid rgb(255, 104, 59)";
        }

        if (number>0){
                document.getElementById("decrement_ink_pen").disabled = false;
                document.getElementById("decrement_ink_pen").style.backgroundColor = "black";
                document.getElementById("decrement_ink_pen").style.color = "white";
                document.getElementById("decrement_ink_pen").style.border = "none"
        }
        document.getElementById("value_selection_ink_pen").value=  number
        document.getElementById("cost_ink").value = ink_pen_values.toString()
        // console.log(ink_pen_values)


}

function decrease_quantity_ink_pen(){

        let number = parseInt(document.getElementById("value_selection_ink_pen").value)-100;
        let ink_pen_values =  parseInt(document.getElementById("ink_pens_value").value)*number
        if (number <1100){
                document.getElementById("increment_ink_pen").disabled = false;
                document.getElementById("increment_ink_pen").style.backgroundColor = "black";
                document.getElementById("increment_ink_pen").style.color = "white";
                document.getElementById("increment_ink_pen").style.border = "none"
        }
        if (number<100){
                document.getElementById("decrement_ink_pen").disabled = true;
                document.getElementById("decrement_ink_pen").style.backgroundColor = "white";
                document.getElementById("decrement_ink_pen").style.color = "black";
                document.getElementById("decrement_ink_pen").style.border = "2px solid rgb(255, 104, 59)";
                document.getElementById("value_selection_ink_pen").value=100;
        }
         
        
        else{
                document.getElementById("value_selection_ink_pen").value=number.toString()
                document.getElementById("cost_ink").value = (ink_pen_values).toString()
        }
        
}




/**********            section for increment and decrement of ball pen  quantiy           **********/

function increase_quantity_ball_pen(){
        let number = parseInt(document.getElementById("value_selection_ball_pen").innerHTML)+100;
        if (number >900){
               document.getElementById("increment_ball_pen").disabled = true;
               document.getElementById("increment_ball_pen").style.backgroundColor = "white";
               document.getElementById("increment_ball_pen").style.color = "black";
               document.getElementById("increment_ball_pen").style.border = "2px solid rgb(255, 104, 59)";
        }

        if (number>0){
                document.getElementById("decrement_ball_pen").disabled = false;
                document.getElementById("decrement_ball_pen").style.backgroundColor = "black";
                document.getElementById("decrement_ball_pen").style.color = "white";
                document.getElementById("decrement_ball_pen").style.border = "none"
        }
        document.getElementById("value_selection_ball_pen").innerHTML=number.toString()


}

function decrease_quantity_ball_pen(){

        let number = parseInt(document.getElementById("value_selection_ball_pen").innerHTML)-100;
        if (number <1100){
                document.getElementById("increment_ball_pen").disabled = false;
                document.getElementById("increment_ball_pen").style.backgroundColor = "black";
                document.getElementById("increment_ball_pen").style.color = "white";
                document.getElementById("increment_ball_pen").style.border = "none"
        }
        if (number<100){
                document.getElementById("decrement_ball_pen").disabled = true;
                document.getElementById("decrement_ball_pen").style.backgroundColor = "white";
                document.getElementById("decrement_ball_pen").style.color = "black";
                document.getElementById("decrement_ball_pen").style.border = "2px solid rgb(255, 104, 59)";
                document.getElementById("value_selection_ball_pen").innerHTML=100;
        }
         
        
        else{
                document.getElementById("value_selection_ball_pen").innerHTML=number.toString()
        }
        
}






/**********            section for increment and decrement of pilot pens  pens quantit            **********/








function increase_quantity_pilot_pens(){
        let number = parseInt(document.getElementById("value_selection_pilot_pens").innerHTML)+100;
        if (number >900){
               document.getElementById("increment_pilot_pens").disabled = true;
               document.getElementById("increment_pilot_pens").style.backgroundColor = "white";
               document.getElementById("increment_pilot_pens").style.color = "black";
               document.getElementById("increment_pilot_pens").style.border = "2px solid rgb(255, 104, 59)";
        }

        if (number>0){
                document.getElementById("decrement_pilot_pens").disabled = false;
                document.getElementById("decrement_pilot_pens").style.backgroundColor = "black";
                document.getElementById("decrement_pilot_pens").style.color = "white";
                document.getElementById("decrement_pilot_pens").style.border = "none"
        }
        document.getElementById("value_selection_pilot_pens").innerHTML=number.toString()


}

function decrease_quantity_pilot_pens(){

        let number = parseInt(document.getElementById("value_selection_pilot_pens").innerHTML)-100;
        if (number <1100){
                document.getElementById("increment_pilot_pens").disabled = false;
                document.getElementById("increment_pilot_pens").style.backgroundColor = "black";
                document.getElementById("increment_pilot_pens").style.color = "white";
                document.getElementById("increment_pilot_pens").style.border = "none"
        }
        if (number<100){
                document.getElementById("decrement_pilot_pens").disabled = true;
                document.getElementById("decrement_pilot_pens").style.backgroundColor = "white";
                document.getElementById("decrement_pilot_pens").style.color = "black";
                document.getElementById("decrement_pilot_pens").style.border = "2px solid rgb(255, 104, 59)";
                document.getElementById("value_selection_pilot_pens").innerHTML=100;
        }
         
        
        else{
                document.getElementById("value_selection_pilot_pens").innerHTML=number.toString()
        }
        
}

function  update_numbers(){

        document.getElementById("value_selection_ink_pen").value = '100'
        let value_of_selected_product=parseInt(document.getElementById("ink_pens_value").value)*100
        document.getElementById("cost_ink").value = value_of_selected_product.toString()
        if (document.getElementById("increment_ink_pen").disabled==true){

                document.getElementById("increment_ink_pen").disabled=false;
                document.getElementById("increment_ink_pen").style.backgroundColor = "black";
                document.getElementById("increment_ink_pen").style.color = "white";
                document.getElementById("increment_ink_pen").style.border = "none"
        }
        else{

                document.getElementById("decrement_ink_pen").disabled=false;
                document.getElementById("decrement_ink_pen").style.backgroundColor = "black";
                document.getElementById("decrement_ink_pen").style.color = "white";
                document.getElementById("decrement_ink_pen").style.border = "none"
        }
}

// function test_func(){
//         c = parseInt(document.getElementById("test_test").value)+100
//         document.getElementById("test_test").value=c.toString()
//         console.log(document.getElementById("test_test").value)

// }