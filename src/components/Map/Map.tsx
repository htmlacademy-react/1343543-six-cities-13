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
  city: City;
  offers: TOffer[];
  selectedPoint?: TOffer | undefined;
}

function Map({city, offers}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const createMarkers = () => {

  }

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer, item) => {
        console.log(offers.length);
          const marker = new Marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          });

          marker
          .setIcon(defaultCustomIcon)
          // .setIcon(
          //   selectedPoint !== undefined && point.title === selectedPoint.title
          //     ? currentCustomIcon
          //     : defaultCustomIcon
          // )
          .addTo(markerLayer);
        });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers]);
  
  return (
    <section className="cities__map" ref={mapRef}/>
  )
}

export default Map