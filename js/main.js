let statue=1;
let arrowLeft=document.getElementById("arrow-left"); 
let arrowRight=document.getElementById("arrow-right");
arrowLeft.addEventListener("click",()=>{
    if(statue==1){
        statue=3;
    }else{
        statue--;
    }
})
arrowRight.addEventListener("click",()=>{
    if(statue==3){
        statue=1;
    }else{
        statue++;
    }
})
function sliderChange(){

} 