import './Header.css'
import React from 'react';
import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";

export default class Header extends React.Component {
   render () {
      return (
        <header className="header">
           <div className="container">
              <div className="header__inner">

                 {/*Компонент "Пользователь"*/}
                 <div className="header__user">
                    <div className="header__user-avatar">
                       {/*Откуда вытаскивать фотки - public или src?*/}
                       <img src="img/admin.jpg" alt="" className="header__user-img"/>
                    </div>
                    <span className="header__user-name">admin</span>
                 </div>

                 <Logo/>
                 {/*Кнопка бургер (добавить меню при нажатии в этот компонент или еще другой)*/}
                 <Burger/>
              </div>
           </div>
        </header>
      )
   }
}