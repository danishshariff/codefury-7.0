
let sendbtn=document.querySelector(".chat_input span");
let chatIpt=document.querySelector(".chat_input textarea");
let chatbox=document.querySelector(".chatbox");
let openchat=document.querySelector(".chatbot_toggler");
let close=document.querySelector("header span");

let usermsg;
let height=chatIpt.scrollHeight;

close.addEventListener("click",()=>document.body.classList.remove("show_chatbot"));
openchat.addEventListener("click",()=>document.body.classList.toggle("show_chatbot"));

chatIpt.addEventListener("input",()=>{
    chatIpt.style.height=`${height}px`;
    chatIpt.style.height=`${chatIpt.scrollHeight}px`;
})

let createChat=(msg,classN) => {
    let chatLi=document.createElement("li");
    chatLi.classList.add("chat",classN);
    let content=classN==="outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML=content;
    chatLi.querySelector("p").textContent=msg;
    return chatLi;
}
function genresponse(robomsg){
    let msgEle=robomsg.querySelector("p");
    if(usermsg==undefined || usermsg==""){
        
    }else{
        let res="";

        axios.get('https://v2.jokeapi.dev/joke/Any')
        .then(response => {
            if (response.data.type === 'single') {
                msgEle.textContent=response.data.joke;
                console.log('Joke:', response.data.joke);
            } else {
                msgEle.textContent=`${response.data.setup}. ${response.data.delivery}`;
            }
        })
        .catch((error) => {
            msgEle.textContent="Looks like you have network error. Try again.";
        }).finally(()=>chatbox.scrollTo(0,chatbox.scrollHeight));

        //network error
        //axios.get('https://api.quotable.io/random')
        //.then(response => {
        //    console.log('Quote:', response.data.content);
        //    console.log('Author:', response.data.author);
        //})
        //.catch(error => {
        //    console.error('Error:', error);
        //});
    }
}

let sendChat = ()=>{
    usermsg=chatIpt.value;
    if(!usermsg) return;
    chatIpt.value="";
    chatIpt.style.height=`${height}px`;
    chatbox.appendChild(createChat(usermsg,"outgoing"));
    chatbox.scrollTo(0,chatbox.scrollHeight);
    setTimeout(()=>{
        let robomsg=createChat("Typing...","incoming");
        chatbox.appendChild(robomsg);
        chatbox.scrollTo(0,chatbox.scrollHeight);
        genresponse(robomsg);
    },600);
}

chatIpt.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"&&!e.shiftKey){
        e.preventDefault();
        sendChat();
    }
});

sendbtn.addEventListener("click",sendChat);
