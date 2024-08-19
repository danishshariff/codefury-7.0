let login=document.querySelector("#login");
let error=document.querySelector("#errormessage");

login.addEventListener("submit", akshith);

function akshith (evt){
    evt.preventDefault();
    const name=document.getElementById("name").value;
    const password=document.getElementById("password").value;
    const check=localStorage.getItem(name);
    

    if(check){
        const parsedname= JSON.parse(check);
        if(parsedname.password===password){
            window.location.href="home.html";
        }else{
            error.classList.remove("hide");
            //alert("Incorrect password");
        }
    }else{
        error.classList.remove("hide");
        error.innerText="User not Found!!";
        //alert("User not found!");
    }
}

let user=document.querySelector("#username");