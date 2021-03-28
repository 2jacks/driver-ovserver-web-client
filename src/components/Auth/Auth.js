import React from 'react'
import './Auth.css'

export default class Auth extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         login: 'essent1al26@yandex.ru',
         password: '315220kalter',
      }
      this.onLoginChange = this.onLoginChange.bind(this);
      this.onPassChange = this.onPassChange.bind(this);
   }

   onLoginChange(e) {
      this.setState({login: e.target.value})
   }
   onPassChange(e) {
      this.setState({password: e.target.value})
   }
   isSingIn(login, password) {
      this.props.isSingIn(login, password)
   }

   render() {
      let login = this.state.login;
      let password = this.state.password;
      return (
        <div className={'auth'}>
           {this.props.failCount}
           <form className={'auth__form'}>
              <label className={'auth__label'} htmlFor="">
                 <input className={'auth__input'} type="text" placeholder={'Логин'} onChange={this.onLoginChange} value={this.state.login}/>
              </label>
              <label className={'auth__label'} htmlFor="">
                 <input className={'auth__input'} type="text" placeholder={'Пароль'} onChange={this.onPassChange} value={this.state.password}/>
              </label>
              <button className={'auth__button'} onClick={(e)=> {
                 e.preventDefault();
                 this.isSingIn(login, password)
              }}>Войти</button>
           </form>
        </div>
      );
   }
}
