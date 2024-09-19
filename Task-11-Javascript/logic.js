let imgs = document.querySelectorAll(".rock img")
let userselect = document.getElementById("userselect");
let compselect = document.getElementById("compselect");

let result = document.getElementById("result");

let tcount = document.getElementById("totalcount");
let tcontnum = 10;

let userCount = document.getElementById("usercount");
let uC = 0;
let computerCount = document.getElementById("compcount");
let cC = 0;
let tieCount = document.getElementById("tiecount");
let tieC = 0;

let cmp;
let arr = ["rock", "paper", "scissor"];

let user;
let computer;

let resultwon = document.querySelectorAll(".com");
let wonimg = document.getElementById("wonn");
let firstwonn = document.getElementById("firstwon");


let playagainn = document.getElementById("playagain");


playagainn.addEventListener("click", function () {
    for (let i = 0; i < resultwon.length; i++) {
        resultwon[i].style.zIndex = "-1";
        resultwon[i].style.opacity = "0";

        tcontnum = 10;
        uC = 0;
        cC = 0;
        tieC = 0;

        tcount.innerHTML = `10`;

                computerCount.innerHTML = `0`;

                tieCount.innerHTML = `0`

                userCount.innerHTML = `0`
    }
})

for (let i = 0; i < 3; i++) {
    if (tcontnum >= 0) {
        imgs[i].addEventListener("click", function () {


            if (tcontnum >= 0 && tcontnum <= 10) {
                tcount.innerHTML = `${--tcontnum}`;
            }

            if (tcontnum === -1) {
                // alert("game over")
                tcount.innerHTML = `0`;


                userselect.innerHTML = `Nothing`
                compselect.innerHTML = `Nothing`
                result.innerHTML = "Result";



                if (uC > cC) {
                    // alert("Game Over, User win the Match, Refresh Again And Play.")
                    for (let i = 0; i < resultwon.length; i++) {
                        // resultwon[i].style.display="block";
                        resultwon[i].style.zIndex = "100";
                        resultwon[i].style.opacity = "1";

                        

                    }
                    wonimg.innerHTML = "User Win...";
                    // firstwonn.classList.add("additonal");
                    

                } else if (uC < cC) {
                    // alert("Game Over, Computer win the Match, Refresh Again And Play.")
                    for (let i = 0; i < resultwon.length; i++) {
                        // resultwon[i].style.display="block";
                        resultwon[i].style.zIndex = "100";
                        resultwon[i].style.opacity = "1";



                    }
                    wonimg.innerHTML = "Computer Win..."
                    // firstwonn.classList.add("additonal");
                } else {
                    // alert("Game Over, Tie Match, Refresh Again And Play.")
                    for (let i = 0; i < resultwon.length; i++) {
                        // resultwon[i].style.display="block";
                        resultwon[i].style.zIndex = "100";
                        resultwon[i].style.opacity = "1";



                    }
                    wonimg.innerHTML = "Tie Match...";
                    // firstwonn.classList.add("additonal");
                }



            }


            if (tcontnum >= 0) {
                user = arr[i];
                userselect.innerHTML = `${user}`
                // console.log(user);


                cmp = Math.floor(Math.random() * 3);
                computer = arr[cmp];
                compselect.innerHTML = `${computer}`
                // console.log(computer);

            }



            if (tcontnum >= 0) {
                if ((user === "rock" && computer === "paper") || (user === "paper" && computer === "scissor") || (user === "scissor" && computer === "rock")) {
                    // console.log("computer win");
                    result.innerHTML = "Computer Win";

                    computerCount.innerHTML = `${++cC}`;

                } else if (user === computer) {
                    result.innerHTML = "Tie";
                    tieCount.innerHTML = `${++tieC}`
                }
                else {
                    result.innerHTML = "User Win";
                    userCount.innerHTML = `${++uC}`
                }


            }



        })
    }



}
