const cityName=document.getElementById('cityName');      //input field


const submitBtn=document.getElementById("submitBtn");
const city_name=document.getElementById('city_name')   //where we are showing city name to user as output

const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');


const getInfo= async(event) => {
    event.preventDefault();
    let cityVal=cityName.value;
    
    if(cityVal === "")
    { 
        city_name.innerText=`Please write in search box first`;
    }
    else{
        try{
            url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9b0f16d840bd8a00c24ee143fa5ae0c6`;
            const response= await fetch(url);
            let data=await response.json();
            const arrData=[data];
            city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_val.innerText= arrData[0].main.temp;
            temp_status.innerText=`    ${arrData[0].weather[0].main}`;

            // const tempMood=arrData[0].weather[0].main;
            // if (tempMood === "Sunny") {
            //     temp_status.innerHTML = '<i class="fas fa-sun iconSize" style="color: #edf10e;"></i>';
            // } else if (tempMood === "Cloudy") {
            //     temp_status.innerHTML = '<i class="fas fa-cloud iconSize" style="color: #888;"></i>';
            // } else if (tempMood === "Rain") {
            //     temp_status.innerHTML = '<i class="fas fa-cloud-rain iconSize" style="color: #6c757d;"></i>';
            // } else if (tempMood === "Smoke") {
            //     temp_status.innerHTML = '<i class="fas fa-smog iconSize" style="color: #555;"></i>';
            // } else {
            //     temp_status.innerHTML = '<i class="fas fa-cloud iconSize" style="color: #888;"></i>';
            // }
            
        }catch{
            city_name.innerText=`Please Enter the city name Properly`;
        }
   
    }
}


submitBtn.addEventListener('click',getInfo);