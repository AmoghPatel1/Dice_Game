
function myFunction() {
    let n1 = Math.floor(Math.random()*6+1);
    let n2 = Math.floor(Math.random()*6+1);
    document.querySelector(".img1").setAttribute("src","images/dice"+n1+".png")
    document.querySelector(".img2").setAttribute("src","images/dice"+n2+".png")

    if(n1 > n2) {
        document.querySelector(".result").innerHTML = "🚩Player1 Wins!";
    } else if(n2 > n1) {
        document.querySelector(".result").innerHTML = "Player2 Wins!🚩";
    } else {
        document.querySelector(".result").innerHTML = "Draw!";
    }

}




