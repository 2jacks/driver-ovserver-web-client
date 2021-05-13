import './DriversPanel.css'
import React from "react";
import Driver from "../Driver/Driver";

export default class DriversPanel extends React.Component {
   render() {
      const drivers = this.props.drivers.map(([key, value]) => {
         console.log(key, value)
         return <Driver key={key.toString()} data={value}/>
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
