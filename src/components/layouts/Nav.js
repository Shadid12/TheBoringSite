import React, { Component } from 'react';
import './css/ham.css';
import './css/hovernav.css';
import $ from 'jquery';
import homeIcon from './css/001-home.svg';
import browser from './css/002-browser.svg';
import int from './css/int.svg';
import you from './css/you.svg';



export class Nav extends Component {
    // initial states
    
    constructor(props){
        super(props);
        this.state = {
            showButtons: false
        };
        
        this.toggle = this.toggle.bind(this);   // bind toggle
    }
    
    // toggle's hamburger menu
    
    toggle(){
        $("#nav-icon1").toggleClass('open');
        this.setState({
            showButtons: !this.state.showButtons
        });
    }
    
    render(){
        return(
           <div className="center">
                <h3>The Boring Site</h3>
                <div id="nav-icon1" onClick={this.toggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                { this.state.showButtons ?
                    <NavButtons />:
                    null
                }
           </div>
        );
    }
}

export class NavButtons extends Component {
    render(){
        return(
            <ol className="site-nav">
              <li className="site-nav__item">
                <a className="site-nav__link" href="/">
                    <img src={homeIcon} alt="Home" style={ { "width": 50, "height": 50 } } />
                    <br />
                    Home
                </a>
              </li>
              <li className="site-nav__item">
                <a className="site-nav__link" href="/components">
                    <img src={browser} alt="Home" style={ { "width": 50, "height": 50 } } />
                    <br />
                    Components
                </a>
              </li>
              <li className="site-nav__item">
                <a className="site-nav__link" href="#">
                    <img src={int} alt="int" style={ { "width": 50, "height": 50 } } />
                    <br />
                    Customize
                </a>
              </li>
              <li className="site-nav__item">
                <a className="site-nav__link" href="#">
                    <img src={you} alt="you" style={ { "width": 50, "height": 50 } } />
                    <br />
                    Create
                </a>
              </li>

            </ol>
        );
    }
}