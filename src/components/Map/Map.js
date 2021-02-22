import './Map.css'
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Driver from "../Driver/Driver";

/**
 * @param driver.personal
 * @param driver.geo
 */

export default class Map extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         drivers: [],
      }
   }
   render() {
      const drivers = this.props.drivers.map((driver) =>
        <Marker
         key={driver.personal.uid.toString()}
         position={[driver.geo.location.lat, driver.geo.location.long]}>
           <Popup>
              {driver.personal.name}
           </Popup>
         </Marker>
      );

      return(
            <MapContainer className='map' center={[54.7431, 55.9678]} zoom={13} scrollWheelZoom={true}>
               <TileLayer
                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               {drivers}
            </MapContainer>
      )
   }
}
