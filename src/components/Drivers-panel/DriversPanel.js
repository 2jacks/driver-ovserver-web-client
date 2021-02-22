import './DriversPanel.css'
import React from "react";
import Driver from "../Driver/Driver";

export default class DriversPanel extends React.Component {
   render() {
      const drivers = this.props.drivers.map((driver) => <Driver key={driver.personal.uid.toString()} data={driver}/>)
      return(
         <section className='drivers-panel'>
            <div className="container">
               {drivers}
            </div>
         </section>
      )
   }
}
