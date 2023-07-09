import axios from "axios";
import React, { useEffect, useState } from 'react';
import Header from './Header';
import test from './zag.png';
import './App.css';

function App() {

  const [listOfNews, setListOfNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/news").then((response) => {
      setListOfNews(response.data);
    })
  }, [])

  return <div className="App">
    <Header />
    <div className='App-page' id='main'>
      <div className='App-header'>
        <div className='App-header-in'>
          <div className='App-Imgs'>
            <img src={test} alt="" height='604px' width='546px' className='round-Img' />
          </div>
          <div className='App-Desc'>
            <div className='App-header-desc'>
              <p>The goal of the project is only a project activity outside of study hours. The game should be created in 2D. The game is a single-player with top 10 player records. It should have a small functionality, a clicker that gives some in-game currency per click, buffs that provide passive growth when clicked, as well as buildings that passively generate currency. Each buff and building is purchased with the currency earned by the player's clicks. There is also a player level that increases after completing various tasks or missions, such as placing the first building.</p>
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
              <p>"Dark Fantasy Clicker" is a clicker game set in the Dark Fantasy genre. The goal of the project is to provide users with an entertaining pastime outside of study hours. The game is designed in 2D graphics and is a single-player game with the ability to view the top 10 player records.<br/><br/>The gameplay is based on clicks, which earn in-game currency. Players can also receive passive currency growth through buffs that are activated by clicks, as well as buildings that automatically mine currency. To acquire buffs and buildings, players must use their accumulated currency.<br/><br/>The game also features a player level system, which increases after completing various tasks and missions, such as building the first structure and other similar achievements.<br/><br/>"Dark Fantasy Clicker" is intended for the Android platform and is developed using advanced web development technologies and best practices. We strive to provide users with the best gaming experience, so we will constantly introduce new features and improve the game.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='App-page' id='news'>
      <div className='App-header'>
        <div className='App-header-in'>
          <div className='App-Desc'>
            <h1>{listOfNews.map((value, key) => {
              if (value.id == listOfNews[listOfNews.length - 1].id)
                return value.name;
            })}
              <div className='App-news-time'>{listOfNews.map((value, key) => {
                if (value.id == listOfNews[listOfNews.length - 1].id)
                  return value.createdAt;
              })}</div>
            </h1>
            <div>
              <p>{listOfNews.map((value, key) => {
                if (value.id == listOfNews[listOfNews.length - 1].id)
                  return value.desc;
              })}</p>
            </div>
            {/* <div className='App-header-links'>
                <a href=""><img src={applestorebadge} alt="" height='60px' className='link' /></a>
                <a href=""><img src={googleplaybadge} alt="" height='60px' className='link' /></a>
                </div> */}
          </div>
          <div>
            {listOfNews.map((value, key) => {
              if (value.id == listOfNews[listOfNews.length - 1].id)
                if (value.img != "") { return <img src={value.img} alt="" height='604px' width='546px' className='round-Img' /> }
            })}
          </div>
        </div>
        <a href='news/allnews' className='More-News-Button'><div>More</div></a>
      </div>
    </div>

  </div >
}

export default App;