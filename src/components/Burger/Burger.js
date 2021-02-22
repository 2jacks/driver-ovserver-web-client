import './Burger.css'
import React from 'react';
import classnames from 'classnames';

export default class Burger extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isActive: false,
      };
   }
   onClick() {
      this.setState({isActive: !this.state.isActive});
   }
   render() {
      let isActive = this.state.isActive;
      return(
        <button className={classnames('burger', {active: isActive})} onClick={() => this.onClick()}>
           <span></span>
        </button>
      )
   }
}