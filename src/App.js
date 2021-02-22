import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import MainPanel from "./components/MainPanel/MainPanel";

export default class App extends React.Component{
   render() {
      return (
        <div className="App">
           <Header/>
           <MainPanel/>
        </div>
      )
   }

}
