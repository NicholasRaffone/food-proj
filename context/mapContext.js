import { createContext, useContext, useState, useRef, useEffect } from 'react';

const MapContext = createContext();

export function MapWrapper({ children }) {
  const [placeService, setPlaceService] = useState();
  const [autoCService, setAutoCService] = useState();
  const sharedState = {
    placeService,
    autoCService
  }
  const mapRef = useRef(null)

  useEffect(()=>{

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"`)) return resolve()
        const script = document.createElement('script')
        script.src = src
        script.onload = () => resolve()
        script.onerror = (err) => reject(err)
        document.body.appendChild(script)
    })
    const src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&libraries=places'

    if(mapRef){
      loadScript().then(()=>{
        const map = new google.maps.Map(mapRef.current);
        setPlaceService(new google.maps.places.PlacesService(map));
        setAutoCService(new google.maps.places.AutocompleteService());
      })

    }
  },[mapRef]);
  return (
    <MapContext.Provider value={sharedState}>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&libraries=places" async></script>
      <div id="map" ref={mapRef}/>
      {children}
    </MapContext.Provider>
  );
}

export function useMapContext() {
  return useContext(MapContext);
}
