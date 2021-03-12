import React, { useContext } from "react";
import { useGoogleMaps } from "react-hook-google-maps";
import { SosContext, ThemeContext } from "../LoginRescue/AppRescue";
import "./Style.css";

const uluru = { lat: 52.237049, lng: 21.017532 };

export const MapWithMarker = React.memo(function Map() {

  const { victims } = useContext(ThemeContext);
  const { sosCases } = useContext(SosContext);
  const { ref, map } = useGoogleMaps(
    "AIzaSyBkz_rtiTK4wHl18HUy_BnjmKnMEn4FxRw",
    {
      zoom: 4,
      center: uluru,
    }
  );
  const geocoder = new window.google.maps.Geocoder();

  if (map) {
    for (var i = 0; i < victims.length; i++) {
      const adres = victims[i].street + victims[i].nrStreet + victims[i].city;
      geocoder.geocode({ address: adres }, (results, status) => {
        if (status === "OK") {
          new window.google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          });
        }
      });

    }

    for ( i = 0; i < sosCases.length; i++) {
      const adres = { lat: sosCases[i].latitude, lng: sosCases[i].longtitude }

      new window.google.maps.Marker({
        map: map,
        position: adres,
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
      });

    }
  }
  return <div ref={ref} class="map-map" />;
});
