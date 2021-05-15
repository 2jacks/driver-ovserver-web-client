import './DriversPanel.css'
import React from "react";
import Driver from "../Driver/Driver";

export default class DriversPanel extends React.Component {
   render() {
      const drivers = this.props.drivers.map(([key, value]) => {
         return <Driver key={key.toString()} data={value} uid={key.toString()}/>
      })

      return(
         <section className='drivers-panel'>
            <div className="container">
               {drivers}
            </div>
         </section>
      )
   }
}
