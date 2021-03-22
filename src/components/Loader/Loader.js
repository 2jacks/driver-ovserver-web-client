import React from 'react'
import './Loader.css'

export default class Loader extends React.Component {
   render() {
      return(
        <div className={'loader'}>
           <img className={'loader__icon'} src="img/antoshka.svg" alt=""/>
        </div>
      )
   }
}
