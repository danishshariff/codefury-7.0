let register=document.getElementById("register");
register.addEventListener("submit", submit);

function submit(evt){
    evt.preventDefault();
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const confpass = document.getElementById("confpass").value;  
    
    if(password!==confpass){

        alert("password not matched");
        return;
    }

    const user={
        name:name,
        mail:mail,
        password:password
    };

    localStorage.setItem(name,JSON.stringify(user));
    alert("Registration successful");
    window.location.href="login.html";
}