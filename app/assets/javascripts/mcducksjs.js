console.log("This is the asset pipeline!")

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation)
    }
}

function showLocation(position) {
    var mcduckslat = 49.2855145882821
    var mcduckslon = -123.12147265711842

    var currentpositionlat = position.coords.latitude
    var currentpositionlon = position.coords.longitude

    var distance = getDistanceFromLatLonInMiles(mcduckslat, mcduckslon, currentpositionlat, currentpositionlon)

    document.getElementById("geodisplay").innerHTML = "Latitude: " + currentpositionlat + "<br>Longitude: " + currentpositionlon

}

function getDistanceFromLatLonInMiles(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c * 0.621371; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }


