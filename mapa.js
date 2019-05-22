var mapa;

function inicializaMapa() {
  mapa = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.6037389,
      lng: -58.3815704
    },
    zoom: 5
  });

  centro = new google.maps.LatLng({
          lat:-31.4125196, 
          lng:-64.1852866
        });

  marker = new google.maps.Marker({
    position: centro,
    map: mapa,
    title: "Vates S.A."
  });

  mapa.setMapTypeId('satellite');

  



    // Completar para agregar una variable de tipo latlng con el constructor

    // Crear un marcador con la variable creada

    // Cambiar el tipo de mapa para que se vea con imágenes satelitales
}
