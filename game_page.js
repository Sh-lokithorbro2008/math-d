var number1="";
var number2="";

function send()
{
    number1=document.getElementById("num_1").value;
    number2=document.getElementById("num_2").value;

    document.getElementById("question_label").innerHTML="<h1>QUESTION=" + number1 + "x" + number2 + "</h1>";
}