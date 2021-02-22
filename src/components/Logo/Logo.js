import './Logo.css'
import React from "react";

export default class Logo extends React.Component {
   render() {
      return (
        <div className="logo header__logo">
           <a href="/">
              <svg className='logo__icon'>
                 <use href='img/icons/icons.svg#maracas'/>
              </svg>
           </a>
        </div>
      )
   }
}
