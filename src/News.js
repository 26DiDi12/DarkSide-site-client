import axios from "axios";
import React, { useEffect, useState } from 'react';
import Header from './Header';
import './News.css';

function News() {

  const [listOfNews, setListOfNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/news").then((response) => {
      setListOfNews(response.data);
    })
  }, [])

  const reversedlistOfNews = [];
  for (let i = listOfNews.length - 1; i >= 0; i--) {
    reversedlistOfNews.push(listOfNews[i]);
  }

  useEffect(() => {
    const handleDataUpdated = async () => {
      await axios.get("http://localhost:3001/news").then((response) => {
        setListOfNews(response.data);
      })
    };
 
    window.addEventListener('dataUpdated', handleDataUpdated);
  }, [])
  

  return <div className="News" id=''>
  <link rel="icon" href="gamelogo.ico" type="image/x-icon" />
    <Header />
    {reversedlistOfNews.map((value, key) => {
      let imgtrue = true;
      if (value.img == "") imgtrue = false;
      return <div className='News-page' id=''>
        <div className='News-header'>
          <div className='News-header-in'>
            <div className='News-Desc'>
              <h1>{value.name}
                <div className='News-news-time'>{value.createdAt}</div>
              </h1>
              <div>
                <p>{value.desc}</p>
              </div>
            </div>
            <div>
              {imgtrue && <img src={value.img} alt="" height='604px' width='546px' className='round-Img' />}
            </div>
          </div>
        </div>
      </div>
    })}
  </div>
}

export default News;