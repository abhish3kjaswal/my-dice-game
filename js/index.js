// first image
var random1=Math.floor(Math.random()*6)+1;
var img1="images/dice"+random1+".png";
var fimg1=document.querySelectorAll("img")[0];
var at1=fimg1.setAttribute("src",img1);

// second image
var random2=Math.floor(Math.random()*6)+1;
var img2="images/dice"+random2+".png";
var fimg2=document.querySelectorAll("img")[1];
var at2=fimg2.setAttribute("src",img2);


// conditions
if(random1 > random2)
{
  document.querySelector("h1").innerHTML="PLAYER 1 WINS 🚩";
}
else if(random2 > random1)
{
  document.querySelector("h1").innerHTML="PLAYER 2 WINS 🚩";
}
else{
  document.querySelector("h1").innerHTML="DRAW";
}
