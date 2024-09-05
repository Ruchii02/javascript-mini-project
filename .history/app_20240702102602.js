let gameSeq=[];
let userSeq=[];
 let start = false;
 let level=0;
let btns =["yellow","green","red" , "blue"];
let h2= document.querySelector("h2");

 document.addEventListener("keypress" , function(){
  //game can be started at once so only the case when game is not stated yet will start the game
   if(start==false){
    console.log("game started");
    start = true;

     levelup();
   }
 });
 
 function btnFlash(btn){
    btn.classList.add("flash");
    //let f = document.querySelector(".flash");
    //f.background-color(white);
    setTimeout(function() {
      btn.classList.remove("flash")
        
    } , 250);
 }
  
 function levelup(){
    level++;
    h2.innerText=`Level ${level}`;
     let ranInd = Math.floor(Math.random()*3);
     let ranCol= btns[ranInd];
     let ranBtn = document.querySelector(`.${ranCol}`);
     btnFlash(ranBtn);
    }