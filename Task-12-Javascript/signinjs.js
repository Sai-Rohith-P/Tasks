let form = document.getElementById("form");
let email = document.getElementById("email");
let name = document.getElementById("name");
let password = document.getElementById("password");

let hiddenemail = document.getElementById("emailcheck");
let hiddenpassword = document.getElementById("passwordcheck");
let hiddenName= document.getElementById("namecheck");


form.addEventListener("submit", (e) => {
    // console.log(name.value);
    // e.preventDefault(); 
    let nnms = name.value;
  
    
    localStorage.setItem("unamesus",nnms);
    let isValid = true; 
    if (email.value === "" || email.value === null) {
        hiddenemail.style.display = "block";
        isValid = false;
    } else {
        hiddenemail.style.display = "none";
    }
    email.addEventListener("input",function(){
        if(email.value === "" || email.value === null){
            hiddenemail.style.display="block"; 
            
        }else if(email.value.length >=1){
            hiddenemail.style.display="none"; 
        }
    })

    if (name.value === "" || name.value === null) {
        hiddenName.style.display = "block";
        isValid = false; 
    } else {
        hiddenName.style.display = "none";
    }
    name.addEventListener("input",function(){

        if(name.value === "" || name.value === null){
            hiddenName.style.display="block"; 
        }else if(name.value.length >=1){
             hiddenName.style.display="none";
        }
    })

    if (password.value === "" || password.value === null) {
        hiddenpassword.style.display = "block";
        hiddenpassword.innerHTML = "Enter a strong Password";
        hiddenpassword.style.color = "red";
        isValid = false; 
    } else if (password.value.length <= 4) {
        hiddenpassword.style.display = "block";
        hiddenpassword.innerHTML = "Password must be at least 6 characters";
        hiddenpassword.style.color = "yellow";
        isValid = false; 
    } else if (password.value.length >= 6) {
        hiddenpassword.style.display = "block";
        hiddenpassword.innerHTML = "Strong password";
        hiddenpassword.style.color = "green";
    }
    password.addEventListener("input",function(){

        if (password.value === "" || password.value === null) {
            hiddenpassword.style.display = "block"; 
            hiddenpassword.innerHTML = "Enter a strong Password"; 
            hiddenpassword.style.color="red";
        } else if (password.value.length <= 4) {
            hiddenpassword.style.display = "block"; 
            hiddenpassword.innerHTML = "Password must be at least 6 characters";
            hiddenpassword.style.color="yellow"; 
        } else if(password.value.length >= 6){
            hiddenpassword.style.display = "block"; 
            hiddenpassword.innerHTML = "Strong password";
            hiddenpassword.style.color="green"; 
        }
    });
    if (!isValid) {
        e.preventDefault();
        }
});

