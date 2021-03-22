import React from 'react'
import './App.css';
import Auth from './components/Auth/Auth';
import Header from "./components/Header/Header";
import MainPanel from "./components/MainPanel/MainPanel";
import {bind} from "leaflet/dist/leaflet-src.esm";

export default class App extends React.Component{
   constructor(props) {
      super(props);
      this.isSingIn = this.isSingIn.bind(this)
      this.state = {
         isAuth: false,
         login: null,
         password: null,
         failedSignInCount: 0,
      }
   }

   isSingIn(login, password) {
      if (login === 'admin' && password === 'admin') {
         this.setState({isAuth: true})
      }
      else {
         this.setState({failedSignInCount: this.state.failedSignInCount + 1})
      }
   }

   render() {

      // let login = this.state.login;
      // let password = this.state.password;
      let isAuth = this.state.isAuth;
      console.log(isAuth);

      if (isAuth === true) {
         return (
           <div className="App">
              <Header/>
              <MainPanel/>
           </div>
         )
      }
      else {
         const failedSignInCount = this.state.failedSignInCount;
         let failCount = null;
         if (failedSignInCount > 0) {
            failCount = <div className={'auth__fail-count'}>{'Вы облажались ' + failedSignInCount + ' раз'}</div>
         }
         return(
           <div className="App">
              {/*{failCount}*/}
              <Auth failCount = {failCount} isSingIn = {this.isSingIn}/>
           </div>
         )
      }


   }

}
