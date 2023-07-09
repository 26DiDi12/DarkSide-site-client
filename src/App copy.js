import axios from "axios";
import React, { Component, useEffect } from 'react';
import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import Header from './Header';
import test from './zag.png';
import './App.css';

useEffect(() => {
  axios.get("http://localhost:3001/posts").then((response) => {
    console.log(response);
  })
}, [])

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='App-page' id='main'>
          <div className='App-header'>
            <div className='App-header-in'>
              <div className='App-Imgs'>
                <img src={test} alt="" height='604px' width='546px' className='round-Img' />
              </div>
              <div className='App-Desc'>
                <div className='App-header-desc'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='App-page' id='game'>
          <div className='App-header'>
            <div className='App-header-in'>
              <div className='App-Desc'>
                <h1>about game</h1>
                <div className='App-header-desc'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='App-page' id='news'>
          <div className='App-header'>
            <div className='App-header-in'>
              <div className='App-Desc'>
                <h1>news name
                  <div className='App-news-time'>12.12.2222</div>
                </h1>
                <div className='App-header-desc'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                {/* <div className='App-header-links'>
                <a href=""><img src={applestorebadge} alt="" height='60px' className='link' /></a>
                <a href=""><img src={googleplaybadge} alt="" height='60px' className='link' /></a>
                </div> */}
              </div>
              <div className='App-Imgs'>
                <img src={test} alt="" height='604px' width='546px' className='round-Img' />
              </div>
            </div>
            <a href='news' className='More-News-Button'><div>More</div></a>
          </div>
        </div>

        {/* <div id="detail">
          <Outlet />
        </div> */}

      </div >
    )
  }
}