let signinname = document.getElementById("usernmaesign");
signinname.style.display = "none";
let s = document.getElementById("signinn");

let urls = window.location.search;
let var1 = new URLSearchParams(urls);
let username = var1.get("name");

let nm = username;

if(username){
    s.style.display = "none";
    signinname.style.display = "block";
    signinname.innerHTML = username;
    localStorage.setItem('usernm',nm);
}

    let r = localStorage.getItem("unamesus");
    if(r){
        s.style.display = "none";
    signinname.style.display = "block";
        signinname.innerHTML = r;
    }


// let uname = localStorage.getItem('nmas');
// if(uname !== null){
//     s.style.display = "none"; 
//     signinname.style.display = "block";
//     signinname.innerHTML= uname;
// }
// else{
//     s.style.display = "block";
//     signinname.style.display = "none";
//     signinname.innerHTML= "";
    
// }

