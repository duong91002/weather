
async function timkiem()
{
    var search=document.querySelector('#search');
    var kq=xoa_dau(search.value);
    let vitri=kq.trim();
    console.log(vitri);
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${vitri}&appid=9676e0e21bd4cdf269b6408184fa97a6`;
    let data= await fetch(api).then(res=> res.json());
    if(data.cod==="404")
    {
        changeWeather();
    }else{
    console.log(data);
    var city=document.querySelector('.city');
    var country=document.querySelector('.country');
    var nhietdo=document.querySelector('.nhietdo');
    var chitiet_s=document.querySelector('.chitiet_s');
    var chitiet_v=document.querySelector('.chitiet_v');
    var chitiet_sun=document.querySelector('.chitiet_sun');
    var trangthai=document.querySelector('.trangthai');
    var time=document.querySelector('.today');
    var body=document.querySelector('body');
    city.innerText = data.name;
    country.innerText = data.sys.country;
    nhietdo.innerText=parseInt(data.main.temp-273.15);
    console.log(parseFloat(data.main.temp)-273.15);
    chitiet_s.innerText=data.visibility;
    chitiet_v.innerText=data.wind.speed;
    chitiet_sun.innerText=data.main.humidity;
    trangthai.innerText=data.weather[0]?data.weather[0].main:'';
    time.innerText= new Date().toLocaleString('vi');
    body.setAttribute('class','hot');
    if(parseInt(data.main.temp-273.15)<=25)
    {
        body.setAttribute('class','warm');
    }
    if(parseInt(data.main.temp-273.15)<=19)
    {
        body.setAttribute('class','cold');
    }
    }
}
async function changeWeather()
{
    let api=`https://api.openweathermap.org/data/2.5/weather?q=ho chi minh&appid=9676e0e21bd4cdf269b6408184fa97a6`;
    let data= await fetch(api).then(res=> res.json());
    var city=document.querySelector('.city');
    var country=document.querySelector('.country');
    var nhietdo=document.querySelector('.nhietdo');
    var chitiet_s=document.querySelector('.chitiet_s');
    var chitiet_v=document.querySelector('.chitiet_v');
    var chitiet_sun=document.querySelector('.chitiet_sun');
    var trangthai=document.querySelector('.trangthai');
    var time=document.querySelector('.today');
    var body=document.querySelector('body');
    city.innerText = data.name;
    country.innerText = data.sys.country;
    nhietdo.innerText=parseInt(data.main.temp-273.15);
    console.log(parseFloat(data.main.temp)-273.15);
    chitiet_s.innerText=data.visibility;
    chitiet_v.innerText=data.wind.speed;
    chitiet_sun.innerText=data.main.humidity;
    trangthai.innerText=data.weather[0]?data.weather[0].main:'';
    time.innerText= new Date().toLocaleString('vi');
    body.setAttribute('class','hot');
    if(parseInt(data.main.temp-273.15)<=25)
    {
        body.setAttribute('class','warm');
    }
    if(parseInt(data.main.temp-273.15)<=19)
    {
        body.setAttribute('class','cold');
    }
}
var search=document.querySelector('#search');
function xoa_dau(str) {
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "a");
    str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "e");
    str = str.replace(/??|??|???|???|??/g, "i");
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "o");
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "u");
    str = str.replace(/???|??|???|???|???/g, "y");
    str = str.replace(/??/g, "d");
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "A");
    str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "E");
    str = str.replace(/??|??|???|???|??/g, "I");
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "O");
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "U");
    str = str.replace(/???|??|???|???|???/g, "Y");
    str = str.replace(/??/g, "D");
    return str;
}
window.onload= function()
{
    changeWeather();
}