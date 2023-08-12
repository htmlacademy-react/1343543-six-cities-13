import useMap from "../../hooks/useMap";
import { City } from "../../types/city"
import { useEffect, useRef } from "react";
import { Icon, Marker, layerGroup } from "leaflet";
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from "../../const";
import 'leaflet/dist/leaflet.css';
import { TOffer } from "../../types/offer";

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


type MapProps = {
  offers: TOffer[];
  typeMap: 'offers' | 'main';
  activeCard: string;
}

const DEFAULT_CITY = {
  "location": {
    "latitude": 48.85661,
    "longitude": 2.351499,
    "zoom": 13
  }
}

function Map({offers, typeMap, activeCard}: MapProps) {
  const mapRef = useRef(null);
  const city = offers.length > 0 ? offers[0].location : DEFAULT_CITY.location;
  const map = useMap(mapRef, city);
  console.log('Перерисовалась карта')


  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer, item) => {
          const marker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          });

          marker
            .setIcon(
              activeCard === offer.id ? currentCustomIcon : defaultCustomIcon
            )
          .addTo(markerLayer);
        });

      map.setView({
        lat: city.latitude,
        lng: city.longitude,
      })

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers]);
  
  const classMap = typeMap === 'main' ? 'cities__map' : 'offer__map';
  
  return (
    <section className={classMap} ref={mapRef}/>
  )
}

export default Map