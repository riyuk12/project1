var circle=document.getElementById("circle");
var upBtn=document.getElementById("upBtn");
var downBtn=document.getElementById("downBtn");
var rotateValue=circle.style.transform;
var rotateSum;

var card1=document.getElementById("card1");
var card2=document.getElementById("card2");
var card3=document.getElementById("card3");

var sliderBtn1=document.getElementById("sbtn1");
var sliderBtn2=document.getElementById("sbtn2");
var sliderBtn3=document.getElementById("sbtn3");

var collection=[card1,card2,card3];

var count=0;

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
    sliderBtn1.style.background="whitesmoke";
}

sliderBtn2.onclick =function(){
    sliderBtn2.style.background="whitesmoke";
}

sliderBtn3.onclick =function(){
    sliderBtn3.style.background="whitesmoke";
}