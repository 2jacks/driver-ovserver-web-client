import './Driver.css'
import React from "react";
import DriverControls from "../DriverControls/DriverControls";
import classnames from 'classnames'

export default class Driver extends React.Component {
   constructor(props) {
      super(props);
      this.handleShowProfile = this.handleShowProfile.bind(this)
      this.state = {
         showPersonalInfo: false,
      }
   }
   handleShowProfile() {
      this.setState({showPersonalInfo: !this.state.showPersonalInfo})
   }
   render() {
      const showProfile = this.state.showPersonalInfo
      return(
        <div className="driver">
           <div className="driver__menu">
              <div className="driver__main">
                 <div className="driver__avatar">
                    <img className="driver__img" src="img/drivers/jason.jpg" alt=""/>
                 </div>
                 <div className="driver__overview">
                    <h2 className="driver__full-name">{this.props.data.personal.name}</h2>
                    <div>
                       <h2 className="driver__status driver__status--road">
                          {this.props.data.state.status}
                          <span className="driver__status-timer">45 мин</span>
                       </h2>
                    </div>
                 </div>
              </div>
              <DriverControls handleShowProfile={this.handleShowProfile}/>
           </div>
           <div className={classnames('driver__profile', {'show': showProfile})}>
              <div className="driver__info-row">
                 <div className="driver__key">id:</div>
                 <div className="driver__value">{this.props.data.personal.id}</div>
              </div>

              <div className="driver__info-row">
                 <div className="driver__key">Телефон:</div>
                 <div className="driver__value">{this.props.data.personal.phone}</div>
              </div>

              <div className="driver__info-row">
                 <div className="driver__key">Возраст:</div>
                 <div className="driver__value">{this.props.data.personal.age}</div>
              </div>
           </div>
        </div>
      )
   }
}