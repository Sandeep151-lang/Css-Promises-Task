
const box = document.getElementById('box');

fetch(`https://covid-api.mmediagroup.fr/v1/cases`).then(resp => resp.json()).then(data => {
    
     box.innerHTML = ` <div class="container">
            <div class="row">
               <div class="col">
                    <div class="card  country">
                         <i class="fas fa-flag"></i>
                         <div class="card-body bold main_div  text-white"> Country :</div>
                         <div class=" text-white deaths_text ml-3"> ${data.India.All.country}</div>
                    </div>
               </div>
               <div class="col capitals_div">
                    <div class="card  capital_city" >
                         <i class="fas fa-eye"></i>
                         <div class="card-body bold main_div text-white"> Capital :</div>
                         <div class=" text-white deaths_text ml-3"> ${data.India.All.capital_city}</div>
                    </div>
               </div>
               <div class="w-100"></div>
               <div class="col mt-5">
                    <div class="card  confirmed_case" >
                         <i class="far fas fa-bars"></i>
                         <div class="card-body bold main_div text-white"> Confirmed Case :</div>
                         <div class=" text-white deaths_text ml-3"> ${data.India.All.confirmed}</div>
                    </div>
               </div>
               <div class="col mt-5">
                    <div class="card  deaths_case" >
                         <i class="fas fa-times"></i>
                         <div class="card-body bold main_div text-white"> Deaths :</div>
                         <div class=" text-white deaths_text ml-3"> ${data.India.All.deaths}</div>
                    </div>
               </div>
            </div>`

}).catch((err) => {
     console.log(err, "invalid");
})
