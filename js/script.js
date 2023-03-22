var circle=document.getElementById("circle");
var upBtn=document.getElementById("upBtn");
var downBtn=document.getElementById("downBtn");
var rotateValue=circle.style.transform;
var rotateSum;

var card1=document.getElementById("card1");
var card2=document.getElementById("card2");
var card3=document.getElementById("card3");

var collection=[card1,card2,card3];

var count=0;

upBtn.onclick =function(){
    rotateSum=rotateValue+"rotate(-90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;
    collection[Math.abs(count)%3].style.opacity=1;
    collection[(Math.abs(count)+1)%3].style.opacity=0;
    collection[(Math.abs(count)+2)%3].style.opacity=0;
    count=count+1;
    
    

}

downBtn.onclick =function(){
    rotateSum=rotateValue+"rotate(90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;

    collection[Math.abs(count)%3].style.opacity=1;
    collection[(Math.abs(count)+1)%3].style.opacity=0;
    collection[(Math.abs(count)+2)%3].style.opacity=0;
    count=count-1;
}