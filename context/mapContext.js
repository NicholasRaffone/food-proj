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
    if(mapRef){
      const map = new google.maps.Map(mapRef.current);
    
      const request = {
        query: "Black owned west village",
        type: ["restaurant"],
      };
      setPlaceService(new google.maps.places.PlacesService(map));
      setAutoCService(new google.maps.places.AutocompleteService());

    
    //   const service = new google.maps.places.PlacesService(map);
    
    //   service.textSearch(request, (
    //     results,
    //     status
    //   ) => {
    //     if (status === google.maps.places.PlacesServiceStatus.OK && results) {
    //       for (let i = 0; i < results.length; i++) {
    //         console.log(results[i])
    //       }
    //     }
    //   });
      // const autoCompTypes = ["geocode"];
      // const autoCompService = new google.maps.places.AutocompleteService();

      // autoCompService.getPlacePredictions({ input: "west village", types: autoCompTypes }, (
      //   results,
      //   status
      // ) => {
      //   if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      //     for (let i = 0; i < results.length; i++) {
      //       console.log(results[i])
      //     }
      //   }
      // });
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
