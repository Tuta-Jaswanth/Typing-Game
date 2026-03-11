const sentenceText = "The quick brown fox jumps over the lazy dog";

let time = 60;
let timer;

const sentence = document.getElementById("sentence");
const input = document.getElementById("input");

function startGame(){

time = 60;

document.getElementById("time").innerText = time;
document.getElementById("wpm").innerText = 0;
input.value="";

displaySentence();

clearInterval(timer);

timer=setInterval(function(){

time--;

document.getElementById("time").innerText=time;

updateProgress();

if(time===0){
clearInterval(timer);
input.disabled=true;
}

},1000);

}

function displaySentence(){

sentence.innerHTML="";

sentenceText.split("").forEach(char=>{
let span=document.createElement("span");
span.innerText=char;
sentence.appendChild(span);
});

}

input.addEventListener("input",function(){

let characters=sentence.querySelectorAll("span");
let typed=input.value.split("");

let correct=0;

characters.forEach((char,index)=>{

if(typed[index]==null){

char.classList.remove("correct");
char.classList.remove("wrong");

}

else if(typed[index]===char.innerText){

char.classList.add("correct");
char.classList.remove("wrong");
correct++;

}

else{

char.classList.add("wrong");
char.classList.remove("correct");

}

});

let wpm=Math.floor((correct/5)/(60-time)*60);

if(wpm>0)
document.getElementById("wpm").innerText=wpm;

});

function updateProgress(){

let progress=((60-time)/60)*100;

document.getElementById("progress").style.width=progress+"%";

}