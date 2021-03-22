import './MainPanel.css'
import React from "react";
import DriversPanel from "../Drivers-panel/DriversPanel";
import Map from "../Map/Map";
import Loader from "../Loader/Loader";
import firebase from "firebase";

export default class MainPanel extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         drivers: [],
      }
   }

   componentDidMount() {
      const firebaseConfig = {
         apiKey: "AIzaSyByruty5exPhybFoEfyLdL_5lRf2cqam9s",
         authDomain: "Driver-observer.firebaseapp.com",
         databaseURL: "https://driver-observer-default-rtdb.firebaseio.com",
         projectId: "Driver-observer",
         storageBucket: "Driver-observer.appspot.com",
         messagingSenderId: "902202774868",
         appId: "1:902202774868:web:47c2ff275a92125ed6a4c1"
      };
      !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
      let drivers = firebase.database().ref('drivers/');
      drivers.on('value', (snapshot) => {
         this.setState({drivers: Object.values(snapshot.val())});
      })
   }

   render() {
      let isThereDrivers = !!this.state.drivers.length;
      if (isThereDrivers) {
         return (
           <main className="main-panel">
              <DriversPanel drivers={this.state.drivers}/>
              <Map drivers={this.state.drivers}/>
           </main>
         )
      }
      else {
         return(
           <main className="main-panel">
              <Loader/>
           </main>
         )
      }
      // return (
      //   <main className="main-panel">
      //      <Loader/>
      //   </main>
      // )


   }
}
