//gets MY ip... not visitors, uses ipify
// function getIP(json) {
//     console.log("My public IP address is: ", json.ip);
//   }

//collect visitor's ip address:
//$(document).ready(start());

function start() {
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        console.log(data);
        var userIP = data.ip;
        //call api here
        $.getJSON("http://freegeoip.net/json/" + userIP + "?callback=?", function (data2) {
          var lat = data2.latitude;
          var long = data2.longitude;
          initialize(lat, long);
        });
    });
}

// //map overhead view- satellite
function initialize(latitude = 100, longitude = 100) {
  //get long/lat from ip address:
  var fenway = {lat: latitude, lng: longitude};
  // //  test: when no street view:
  // var fenway = {lat: 39.139457, lng: 126.412032};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: fenway,
    zoom: 20
  });
  var panorama = new google.maps.StreetViewPanorama(
    document.getElementById('pano'), {
    position: fenway,
    pov: {
    heading: 34,
    pitch: 10
    }
  });

  //if street view is available, show. if not, show map.
    console.log(google.maps.StreetViewStatus.ZERO_RESULTS);
    if (google.maps.StreetViewStatus.ZERO_RESULTS == "ZERO_RESULTS") {
       map.setStreetView(panorama);
       console.log("cool");
       console.log(fenway);
    }
    else {
      console.log("idiot");
      $("div").removeClass( "pano" ).addClass( "map" );
      $("#pano").empty();
    }
}
// //map view with no imagery:
//       // function initialize() {
//       //   var fenway = {lat: 39.307522, lng:-76.621623};
//       //   var map = new google.maps.Map(document.getElementById('map'), {
//       //     center: fenway,
//       //     zoom: 14
//       //   });
//       //   var panorama = new google.maps.StreetViewPanorama(
//       //       document.getElementById('pano'), {
//       //         position: fenway,
//       //         pov: {
//       //           heading: 34,
//       //           pitch: 10
//       //         }
//       //       });
//       //   map.setStreetView(panorama);
//       // }
