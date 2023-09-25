
var dice1=Math.random();
dice1=(dice1*6)+1;
dice1=Math.floor(dice1);
var dice2=Math.random();
dice2=(dice2*6)+1;
dice2=Math.floor(dice2);
console.log(dice1);
console.log(dice2);
//dice1
if(dice1===1)
{
   document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
if(dice1===2)
{
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
if(dice1===3)
{
   document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
if(dice1===4)
{
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
if(dice1===5)
{
     document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
if(dice1===6)
{
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}
//dice2
if(dice2===1)
{
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
if(dice2===2)
{
   document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
if(dice2===3)
{
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
if(dice2===4)
{
     document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
if(dice2===5)
{
     document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
if(dice2===6)
{
   document.querySelector(".img2").setAttribute("src","images/dice6.png");
}
if(dice1===dice2)
{
    document.querySelector("h1").innerHTML="Draw!";  
}
else if(dice2>dice1)
{
    document.querySelector("h1").innerHTML="player 2 wins!";
}
else if(dice1>dice2)
{
    document.querySelector("h1").innerHTML="player 1 wins!";
}
