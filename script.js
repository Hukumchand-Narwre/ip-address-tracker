$(document).ready(function() {

  // var lat = "";
  // var lng = "";

    $("#form").submit(function(event) {
        event.preventDefault();
        $(".details-none").hide();
        $(".map-image").hide();
        $("#details-1").show();
        $("#details-1").empty();
        $("#details-1").css("display","flex");
        var ip = $("#ipadress").val();
        $("#details").empty();
        if(ip == "") 
        {
            
         alert("Please enter the ip address");
            
        }

        
    
        let api_key = "at_rhFHNpiZFCIzpFs9p1eZ3icMW8Z5g";
        let url = "https://geo.ipify.org/api/v1?apiKey=" + api_key + "&ipAddress=" + ip;
    
        $.get(url, function(data) {
            var city = data.location.city;
            console.log(city);
            var country = data.location.country;
            console.log(country);
            var timeZone = data.location.timezone;
            console.log(timeZone)
            var as = data.as.asn;
            console.log(as);
            var isp = data.isp;

            var lat = parseFloat(data.location.lat);

            var lng = parseFloat(data.location.lng);
            console.log(isp);
            displayDetails(city, country, timeZone, as, isp, ip);

            var map = L.map('map').setView([0, 0], 2);

            
            L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=bCMihKeR69KdiNff3aTT', {
              attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
            }).addTo(map);

             var marker = L.marker([0, 0]).addTo(map);

             marker.setLatLng([lat, lng]);
             console.log(lat);
             console.log(lng);

            
            
            
            
          })

    })
    
       



    function displayDetails(city, country, timeZone, as, isp, ip) 
    {
        var details = `
        <div class="ip-container">
        
        <h1>ip address</h1>
        <h4>${ip}</h4>
      </div>

     <div class="ip-container">
        <div class="ip">
          <h1>Location</h1>  
          <h4>${city}</h4>
          <h4>${country}</h4>
        </div>
     </div>

    <div class="ip-container">
        <div class="ip">
          <h1>Timezone</h1>
          <h4 class="timezone">UTC${timeZone}</h4>
        
        </div>
    </div>

    <div class="ip-container">
      <div class="ip">
        <h1>Isp</h1>
        <h4 class="timezone">${isp}</h4>
      </div>
      
    </div>

        `;
        $("#details-1").append(details);
    }

    
    
})

{/* <div class="ip-container">
            <h1>ip address</h1>
            <div class="ip">
             <h4>${ip}</h4>
            </div>
        </div>
        <div class="city-container">
            <h1>Location</h1>  
          <div class="city">
          <h4>${city}</h4>
          <h4>${country}</h4>
          </div>
        </div>

        <div class="time-container">
            <h1>Timezone</h1>
            <div class="time">
              <h4>UTC${timeZone}</h4>
            </div>
        </div>

        <div class="isp-container">
          <h1>Isp</h1>
          <div class="isp">
            <h4>${isp}</h4>
          </div>
        </div> */}