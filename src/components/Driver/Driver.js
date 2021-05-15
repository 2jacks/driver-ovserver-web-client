import './Driver.css'
import React from "react";
import DriverControls from "../DriverControls/DriverControls";
import classnames from 'classnames'
import firebase from "firebase";
import moment from "moment";

export default class Driver extends React.Component {
   constructor(props) {
      super(props);
      this.handleShowProfile = this.handleShowProfile.bind(this)
      this.state = {
         uid: this.props.uid,
         personal: this.props.data.personal,

         isOnline: this.props.data.state.isOnline,
         status: this.props.data.state.status,
         timestamp: this.props.data.state.timestamp,

         currentDriver: null,
         showPersonalInfo: false,
         currentTime: moment(),
      }
   }

   componentDidMount() {
      // const firebaseConfig = {
      //    apiKey: "AIzaSyByruty5exPhybFoEfyLdL_5lRf2cqam9s",
      //    authDomain: "Driver-observer.firebaseapp.com",
      //    databaseURL: "https://driver-observer-default-rtdb.firebaseio.com",
      //    projectId: "Driver-observer",
      //    storageBucket: "Driver-observer.appspot.com",
      //    messagingSenderId: "902202774868",
      //    appId: "1:902202774868:web:47c2ff275a92125ed6a4c1"
      // };
      // !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
      // firebase.database().ref('drivers/' + this.state.uid + '/state/isOnline').on('value', (snapshot) => {
      //    this.setState({isOnline: snapshot.val()})
      // })
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
   }
   componentWillUnmount() {
      clearInterval(this.timerID);
   }

   handleShowProfile() {
      this.setState({showPersonalInfo: !this.state.showPersonalInfo})
   }
   tick() {
      this.setState({currentTime: moment()})
   }

   render() {
      const showProfile = this.state.showPersonalInfo
      const driverIsOnline = this.props.data.state.isOnline ? 'driver__is-online driver__is-online--true' : 'driver__is-online' +
        ' driver__is-online--false'

      const changeDate = moment(this.props.data.state.timestamp);
      const currentDate = this.state.currentTime;

      const timerHours = currentDate.diff(changeDate, 'hours');
      const timerMinutes = currentDate.diff(changeDate, 'minutes') % 60;
      const timerSeconds = currentDate.diff(changeDate, 'seconds') % 60 + 3;

      return(
        <div className="driver">
           <div className="driver__menu">
              <div className="driver__main">
                 <div className="driver__avatar">
                    <img className="driver__img" src="img/drivers/jason.jpg" alt=""/>
                 </div>
                 <div className="driver__overview">
                    <div className={'driver__header'}>
                       <span className={driverIsOnline}>isOnline</span>
                       <h2 className="driver__full-name">{this.props.data.personal.name}</h2>
                    </div>

                    <div>
                       <h2 className="driver__status">
                          {this.props.data.state.status}
                          <span className="driver__status-timer">{`${timerHours} : ${timerMinutes} : ${timerSeconds}`}</span>
                       </h2>
                    </div>
                 </div>
              </div>
              <DriverControls handleShowProfile={this.handleShowProfile}/>
           </div>
           <div className={classnames('driver__profile', {'show': showProfile})}>
              <div className="driver__info-row">
                 <div className="driver__key">id:</div>
                 <div className="driver__value">{this.props.uid}</div>
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
