const messages=document.getElementById("messages");
const input=document.getElementById("input");

async function sendMessage(){

const text=input.value;

if(text==="") return;

messages.innerHTML+=`<div class="user"><b>You:</b> ${text}</div>`;

input.value="";

const res=await fetch("http://127.0.0.1:5000/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
message:text
})

});

const data=await res.json();

messages.innerHTML+=`<div class="ai"><b>Aadi AI:</b> ${data.reply}</div>`;

messages.scrollTop=messages.scrollHeight;

}

input.addEventListener("keydown",e=>{

if(e.key==="Enter")
sendMessage();

});