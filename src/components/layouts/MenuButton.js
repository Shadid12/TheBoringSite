import React, { Component } from 'react';
import './css/hamburger.css';
import $ from 'jquery';

export class MenuButton extends Component {

    showMenu(e){
         e.preventDefault();
        $('.menu').toggleClass('slide-down');
    }
    
    render(){
        return(
            <div className="center">
            <nav className="light-blue darken-2">
                <a href="#" className="hamburger" onClick={this.showMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </a>
                <ul className="menu light-blue darken-2">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            </div>
        );
    }
}