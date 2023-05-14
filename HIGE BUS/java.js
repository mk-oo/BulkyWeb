const image=['1.jpg','2.jpg','3.jpg'];
let i=0;
const s=document.getElementById("slider");
function slid(){
    s.style.backgroundImage="url("+image[i]+")";
    if(i<image.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("slid()",3000);
}
slid();
