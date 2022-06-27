import React from "react";
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api'


function Mapa() {
  const { isLoaded } = useJsApiLoader({
    
    googleMapsApiKey: 
  })
      return ( 
        <div className="mapa">
                       
                        { isLoaded ? (
                        <GoogleMap
                         mapContainerStyle={{width: '100%', height: '100%'}}
                          center={{
                            lat:-15.685300,
                            lng: -47.679086,
                            }}
                        zoom={15}
                     >
                        <Marker position={{
                            lat:-15.685300,
                            lng: -47.679086,
                            }}
                     options={{
                        label:{
                            Text:"Posição",
                            className:"map-marker",
                        },
                    }}/>
                 </GoogleMap>
                     ) :(
                         <></>
                         )}          
        </div>
    );
}

export default Mapa;
          
                               