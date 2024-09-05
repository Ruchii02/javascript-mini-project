let gameSeq=[];
let userSeq=[];
 let start = false;
 let level=0;
let btns =["yellow","green","red" , "blue"];
let h2= document.querySelector("h2");
let h3 = document.querySelector("h3");
 document.addEventListener("keypress" , function(){
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
      btn.classList.remove("flash");
        
    } , 250);
 }
 function userFlash(btn){
  btn.classList.add("userFlash");
  setTimeout(function() {
    btn.classList.remove("userFlash");
      
  } , 250);
}
  
 function levelup(){
  userSeq = [];
    level++;
    h2.innerText=`Level ${level}`;
     let ranInd = Math.floor(Math.random()*3);
     let ranCol= btns[ranInd];
     let ranBtn = document.querySelector(`.${ranCol}`);
     gameSeq.push(ranCol);
     btnFlash(ranBtn);
    }

    function checkAns( idx ){
      if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
       setTimeout(levelup,1000);
       }
      }else{
        h2.innerText   = `Game Over!<br><br>Press any key to start`;
        h3.innerHTML = `Your score was :<b> ${level}</b>`; 
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
          document.querySelector("body").style.backgroundColor = "gray";
        } , 150)
        reset()
      }
        
      
    }

    function btnPress (){
      let btn = this;
      userFlash(btn);
      //console.log("btn was pressed");

      userColor = btn.getAttribute("id");
      userSeq.push(userColor);

      checkAns(userSeq.length-1);

    }

    let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns){
      btn.addEventListener("click" , btnPress);
    }

    function reset(){
      start = false ;
      gameSeq = [];
      userSeq = [];
      level = 0;
    }
    