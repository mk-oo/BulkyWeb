let button =document.getElementById("get");
let inputvalue=document.getElementById("city");
let name=document.getElementById("name");
let desc=document.getElementById("desc");
let temp=document.getElementById("temp");

button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=1d2e021667cf05e58f354f999ddac4f5')
.then(res => res.json())
.then(data =>{
name.innerHTML=data['name'];
desc.innerHTML=data['weather'][0]['description'];
temp.innerHTML=data['main']['temp'];

})
.catch(err =>alert("wrong city name"))

})