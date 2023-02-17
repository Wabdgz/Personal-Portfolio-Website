    
function hdc(){
    var htmlcode = "<h3>Greetings!</h3>\n<p>Start by adding some HTML and CSS.</p>";
    
    document.getElementById("defaulthtml").value = htmlcode;
}

function cssdc(){
    var csscode = "h3 {color: blue;\n text-align: center;}\n p {font-family: cursive; \n font-size: 22pt; \n color: green;}";

    document.getElementById("defaultcss").value = csscode;
    
    
    }

function erase(){
    document.getElementById("defaulthtml").value = "";
    document.getElementById("defaultcss").value = "";
    document.getElementById("preview").innerHTML ="";
}

function htmlbutton(){
    var preview = document.getElementById("defaulthtml").value;
    
    document.getElementById("preview").innerHTML = preview;
}

var change = 1;

function cssbutton(){
    
    if(change == 1){
       
       var style= document.getElementById("defaultcss").value;
         document.getElementById("style").innerHTML = style;
        change = 0;
        document.getElementById("CSS").style.backgroundColor = "green";
        
        }
    
    else{
        
        document.getElementById("CSS").style.backgroundColor = "blue";
       document.getElementById("style").innerHTML = "";
        change=1;
    }
    
}

function titlechange(){
    var newtitle = prompt("Enter a new title.", "New title");
    
    document.getElementById("header").innerHTML = newtitle;
    
    document.getElementById("title").innerHTML = newtitle;
    
    

}