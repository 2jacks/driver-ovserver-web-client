import React from 'react'
import './App.css';
import firebase from "firebase";
// import AdminPage from "./components/AdminPage/AdminPage";
// import Auth from './components/Auth/Auth';
import Header from "./components/Header/Header";
import MainPanel from "./components/MainPanel/MainPanel";


export default class App extends React.Component {
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

   componentDidMount() {
      const firebaseConfig = {
         apiKey: "AIzaSyByruty5exPhybFoEfyLdL_5lRf2cqam9s",
         authDomain: "driver-observer.firebaseapp.com",
         databaseURL: "https://driver-observer-default-rtdb.firebaseio.com",
         projectId: "driver-observer",
         storageBucket: "driver-observer.appspot.com",
         messagingSenderId: "902202774868",
         appId: "1:902202774868:web:47c2ff275a92125ed6a4c1"
      };
      !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
   }

   isSingIn(login, password) {
      if (login === 'admin' && password === 'admin') {
         this.setState({isAuth: 'admin'})
      } else {
         firebase.auth().signInWithEmailAndPassword(login, password)
           .then((credential) => {
              firebase.database().ref('observers/' + credential.user.uid).get()
                .then((snapshot)=> {
                   let authingUser = snapshot.val();
                   if (authingUser.isObserver === true) {
                      this.setState({isAuth: true})
                   }
                   else {
                      alert('ВЫ НЕ ДОСТОЙНЫ');
                   }
                })
           })
           .catch((error) => {
              console.log(error)
              this.setState({failedSignInCount: this.state.failedSignInCount + 1})
           })
      }
   }

   render() {
      // let isAuth = this.state.isAuth;
      return (
             <div className="App">
                <Header/>
                <MainPanel/>
             </div>
      )

      // if (isAuth === true) {
      //    return (
      //      <div className="App">
      //         <Header/>
      //         <MainPanel/>
      //      </div>
      //    )
      // }
      // else if (isAuth === false) {
      //    const failedSignInCount = this.state.failedSignInCount;
      //    let failCount = null;
      //    if (failedSignInCount > 0) {
      //       failCount = <div className={'auth__fail-count'}>{'Вы облажались ' + failedSignInCount + ' раз'}</div>
      //    }
      //    return (
      //      <div className="App">
      //         <Auth failCount={failCount} isSingIn={this.isSingIn}/>
      //      </div>
      //    )
      // }
      // else if (isAuth === 'admin') {
      //    return (
      //      <AdminPage/>
      //    )
      // }
   }
}
