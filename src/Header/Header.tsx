import React from "react";
import icon from '../assets/locale/pizzaLogo.svg';

import "./Header.scss";
import {Button} from "../Button/Button";


export const Header = () => {

    const price: number = 520

   return (
        <header>
            <article className="header">
                <div className="header-title-container">
                    <img alt='Main page pizza image' src={icon}/>
                    <div>
                        <h1 className="main-title">REACT PIZZA</h1>
                        <h3 className="sub-title">самая вкусная пицца во вселенной</h3>
                    </div>
                </div>
                <div>
                    <Button price={price}/>
                </div>
            </article>
        </header>
    )

}