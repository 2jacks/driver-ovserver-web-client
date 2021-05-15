import './Map.css'
import React from "react";
import {MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet'
/**
 * @param driver.personal
 * @param driver.geo
 */

export default class Map extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         drivers: this.props.drivers,
      }
   }
   render() {
      const drivers = this.props.drivers.map(([key, value]) => {
         let markers = [];
           if (value.state.isOnline) {
              markers.push(

                <Marker
                  key={key}
                  position={[value.state.geo.lat, value.state.geo.lng]}>
                   <Popup>
                      Водитель: {value.personal.name}
                   </Popup>
                </Marker>
              )
           }
           return markers
      }
      );
      const routes = this.props.drivers.map(([key, value]) => {
           let lines = [];
           let positions;
           if (value.state.geo.route) {
              positions = value.state.geo.route.map((point) => {
                 return [point.latitude, point.longitude]
              });
              if (value.state.isOnline) {

                 lines.push(
                   <Polyline key={key} positions={positions} />
                 )
              }
           }
           console.log(positions)

           return lines
        }
      );

      return(
            <MapContainer className='map' center={[54.7431, 55.9678]} zoom={13} scrollWheelZoom={true}>
               <TileLayer
                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               {drivers}
               {routes}
            </MapContainer>
      )
   }
}
