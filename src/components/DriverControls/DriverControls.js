import React from "react"
import './DriverControls.css'

class DriverButton extends React.Component {
   constructor(props) {
      super(props);

   }

   render() {
      return(
        <button
          className="driver__button"
          onClick={() => this.props.onClick()}>
           <svg className="driver__button-icon">
              <use href={this.props.icon}/>
           </svg>
        </button>
      )
   }
}

export default class DriverControls extends React.Component {
   constructor(props) {
      super(props);
      this.handleShowProfile = this.handleShowProfile.bind(this)
   }
   handleShowProfile() {
      this.props.handleShowProfile();
   }
   render() {
      return(
        <div className="driver__controls">
           <DriverButton
             icon={'img/icons/icons.svg#placeholder'}
             onClick={() => this.watchDriver()}/>
           <DriverButton
             icon={'img/icons/icons.svg#information'}
             onClick={() => this.handleShowProfile()}/>
           <DriverButton
             icon={'img/icons/icons.svg#stack'}
             onClick={() => this.watchDriver()}/>
           <DriverButton
             icon={'img/icons/icons.svg#line-chart'}
             onClick={() => this.watchDriver()}/>
        </div>
      )
   }
}
