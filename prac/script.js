
 let btn = document.querySelector(".submit");
 let val= document.querySelector(".display");
 let turu=Math.floor(Math.random()*100);
 let res = document.querySelector(".result");
 let chance = document.querySelector(".chances");
 let re= document.querySelector(".retry");
 let cnc=10;
 console.log(chance)
 chance.innerHTML=`You have ${cnc} chances`;
 console.log(turu);
console.log(btn);

const retry=()=>{
    turu=Math.floor(Math.random()*100);
    console.log(turu);
    cnc=10;
    chance.innerHTML=`You have ${cnc} chances`;
    res.innerHTML="I will guide you";
    val.value="";
    console.log(cnc)
}
btn.onclick=
function main(){
   cnc= cnc-1;
   let fala=Number(val.value);
  
let req=( Math.sqrt((fala-turu)*(fala-turu)));
chance.innerHTML=`You have ${cnc} chances`;
console.log(fala)
if(fala>turu){
res.innerHTML="You are greater";
}


else if(fala<turu){
    res.innerHTML="You are smaller";
    }

 if(Number(req)<= 5){
        res.innerHTML="You are very close";
        console.log(req)
    }
if(fala===turu){
    console.log("hello")
    res.innerHTML=`Congratulation The number was ${turu}`;
    }
    if(cnc===0){
        res.innerHTML=`You couldn't guess the number The number was ${turu}`;
        console.log("hello")
    }
    val.value="";
}









