function player1(){
randomNumber1=Math.trunc(Math.random()*6+1);
document.querySelector("img.img1").setAttribute("src",`images/dice${randomNumber1}.png`);
}
function player2(){
randomNumber2=Math.trunc(Math.random()*6+1);
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+randomNumber2+".png");
}