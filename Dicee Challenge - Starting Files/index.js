var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6 + 1);

document.querySelector(".leftimage").setAttribute("src","./images/dice"+randomNumber1+".png");

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6 + 1);
document.querySelector(".rightimage").setAttribute("src","./images/dice"+randomNumber2+".png");

function winner(){
  if(randomNumber1>randomNumber2){
    return ("player 1 is the winner");
  }
  else if(randomNumber2===randomNumber1){
    return ("it's a tie");
  }
  else{
    return ("playter 2 is the winner");
  }
}
document.querySelector("h1").textContent=winner();
