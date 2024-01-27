function display(playermove,modi){
    
    let result="";
    if(playermove==="Rock"){
        if(modi==="Rock"){
            result="draw";
        }
        else if(modi==="Paper"){
            result="Won";
        }
        else if(modi==="Scissor"){
            result="Lose";
        }
    }
    else if(playermove==="Paper"){
        if(modi==="Rock"){
            result="Lose";
        }
        else if(modi==="Paper"){
            result="Draw";
        }
        else if(modi==="Scissor"){
            result="Won";
        }

    }
    else if(playermove==="Scissor"){
        if(modi==="Rock"){
            result="Won";
        }
        else if(modi==="Paper"){
            result="Lose";
        }
        else if(modi==="Scissor"){
            result="Draw";
        }

    }
    let r="";
    if(result==="Draw"){
        r=("It is a Draw");
    }
    else{
        r=(`Modi ${result}`);
    }
    document.querySelector('.result').innerHTML=`
        <p>Modi Choosed ${modi} || You Choosed ${playermove}</p>
    <div class="modiimg">
    <img src="/images/modi ${modi}.png">
    
    </div>
    <p>${r}</p>
    <a href="#n" onclick="document.querySelector('.result').innerHTML='';">Retry</a>`
    ;
    
    
    
   }
   

   let modi=" ";
   let playermove=" ";
   function modifunc(playermove,str1){
    removeborder();
    let obj=document.querySelector(`.${str1}`);
    obj.style.border='solid white 2px';
    let modimove=Math.random(1);
    if(modimove<1/3){
            modi="Rock";
    }
    else if(modimove>=1/3&&modimove<2/3){
            modi="Paper";
    }
    else if(modimove>=2/3&&modimove<1){
            modi="Scissor";
    }

    display(playermove,modi);
}
function removeborder(){
    for(let i=1;i<=3;i++){
    let obj=document.querySelector(`.img${i}`);
    obj.style.border='';
    }
  
}