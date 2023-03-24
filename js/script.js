var circle=document.getElementById("circle");
var upBtn=document.getElementById("upBtn");
var downBtn=document.getElementById("downBtn");
var rotateValue=circle.style.transform;
var rotateSum;

var card1=document.getElementById("card1");
var card2=document.getElementById("card2");
var card3=document.getElementById("card3");

var sliderBtn1=document.getElementById("slider1");
var sliderBtn2=document.getElementById("slider2");
var sliderBtn3=document.getElementById("slider3");

var collection=[card1,card2,card3];






upBtn.onclick =function(){
    rotateSum=rotateValue+"rotate(-90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;
    

}

downBtn.onclick =function(){
    rotateSum=rotateValue+"rotate(90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;


}


sliderBtn1.onclick =function(){
    card1.style.opacity="0";
    card2.style.opacity="0";
    card3.style.opacity="1";

    
}

sliderBtn2.onclick =function(){
    card2.style.opacity="1";
    card1.style.opacity="0";
    card3.style.opacity="0";
}

sliderBtn3.onclick =function(){
    card3.style.opacity="0";
    card2.style.opacity="0";
    card1.style.opacity="1";
}