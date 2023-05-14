const image=['11.jpg','22.jpg','33.jpg','44.jpg'];
let i=0;
const s=document.getElementById("slider");
function slid(){
    s.style.backgroundImage="url("+image[i]+")";
    s.style.backgroundPosition="center";
    s.style.backgroundSize="cover";

    if(i<image.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("slid()",3000);
}
slid();

document.getElementById("ret").style.visibility="hidden";
document.getElementById("re").style.visibility="hidden";
document.getElementById("retu").style.visibility="hidden";

document.getElementById("roundrad").addEventListener("click",function(){
    document.getElementById("ret").style.visibility="visible";
    document.getElementById("roundrad").style.backgroundColor="blue";
    document.getElementById("wayrad").style.backgroundColor="white";
    document.getElementById("re").style.visibility="visible";
    document.getElementById("retu").style.visibility="visible";


    }
);

document.getElementById("wayrad").addEventListener("click",function(){
    document.getElementById("ret").style.visibility="hidden";
    document.getElementById("re").style.visibility="hidden";
    document.getElementById("retu").style.visibility="hidden";

    document.getElementById("roundrad").style.backgroundColor="white";

    document.getElementById("wayrad").style.backgroundColor="blue";
});


let t=['Assuit','Aswan'];
document.getElementById("sear").addEventListener("click",function(){
  let w=  document.getElementById("int1");
  let z=  document.getElementById("int2");
  for(let i=0;i<t.length;i++){
if(w.value==t[i]||z.value==t[i]){
   let y =document.getElementById("s"); 
   y.value="about.html";
}
  }
})


document.getElementById("navbar").addEventListener("click",function(){
  let f=  document.getElementById("menue");
    if(f.style.visibility=="hidden"){
f.style.visibility="visible";
    }
    else{
        f.style.visibility="hidden";
    }
    })
           