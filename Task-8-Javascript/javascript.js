let btn1 = document.getElementById("btn1");
        let p1 = document.getElementById("para1");
        btn1.addEventListener("click", function () {
            {
                if (p1.innerHTML === "") {
                    document.getElementById("para1").innerHTML = "Thanks For Clicking the Button.";
                } else {
                    document.getElementById("para1").innerHTML = "";
                }
            }
        })
        let btn31=document.getElementById("btn3");
        let btn2 = document.getElementById("imgimg");
        btn2.addEventListener("click",function(){
            let body = document.body;
            if(body.style.backgroundColor === "black"){
                body.style.backgroundColor="white";
                btn2.style.filter="invert(1)";
                btn2.style.border="none";
                btn2.style.padding="0";
                btn31.style.color="black";
                btn31.style.border="1px solid black";
                onee.style.border="none";
                twoo.style.border="none";
                three.style.border="none";
                fourr.style.border="none";
                let n1 = document.querySelectorAll(".he1");
                for(let i=0;i<n1.length;i++){
                    n1[i].style.color="black";
                }
            }else{
                body.style.backgroundColor="black";
                btn2.style.filter="invert(0)";
                btn2.style.border="2px solid white";
                btn2.style.padding="5px 5px";
                btn31.style.color="white";
                btn31.style.border="2px solid white";
                onee.style.border="2px solid white";
                twoo.style.border="2px solid white";
                three.style.border="2px solid white";
                fourr.style.border="2px solid white";
                let a = document.getElementById("")
                let n1 = document.querySelectorAll(".he1");
                for(let i=0;i<n1.length;i++){
                    n1[i].style.color="white";
                }
            }
        })
        let btn3=document.getElementById("btn3");
        btn3.addEventListener("click",function(){
            if(document.body.style.backgroundColor === "white"){
                document.body.style.backgroundColor = "red";
            }else{
                document.body.style.backgroundColor = "white";
            }
        })
        let check = document.getElementById("btt");
        let ip=document.getElementById("input");
        btt.addEventListener("click",function(){
            if(ip.value){
            alert(ip.value);
            ip.value="";
        }})

            let one = document.getElementById("onee");
            one.addEventListener("click",function(){
                if(one.style.fontSize === "17px"){
                    one.style.fontSize="13px";
                }else{
                    one.style.fontSize="17px";
                }
            })
            let two = document.getElementById("twoo");
            two.addEventListener("click",function(){
                if(two.style.color ==="black"){
                    two.style.color="blue"
                    two.style.fontWeight=700;
                }else{
                    two.style.color="black";
                    two.style.fontWeight=400;
                }
            })
            let three = document.getElementById("threee");
            three.addEventListener("click",function(){
                if(three.style.fontFamily === "initial"){
                    three.style.fontFamily="cursive";
                }else{
                    three.style.fontFamily="initial";
                }
            })
            let four = document.getElementById("fourr");
            four.addEventListener("click",function(){
                if(four.style.backgroundColor=== "transparent"){
                    four.style.backgroundColor="orange";
                }else{
                    four.style.backgroundColor="transparent";
                }
            })