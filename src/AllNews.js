import axios from "axios";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Outlet, Route, Routes, Link, useNavigate } from 'react-router-dom';
import EditNews from './EditNews';
import './AllNews.css';

function AllNews() {

    const [listOfNews, setListOfNews] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/news").then((response) => {
            setListOfNews(response.data);
        });
    }, [])

    const reversedlistOfNews = [];
    for (let i = listOfNews.length - 1; i >= 0; i--) {
        reversedlistOfNews.push(listOfNews[i]);
    }

    let navigate = useNavigate();

    const updateData = () => {
        const event = new CustomEvent('dataUpdated');
        window.dispatchEvent(event);
    };

    return <div className="AllNews">
        <div className="Edit-news-items">
            <div className="Edit-news-page-id">ID</div>
            <div className="Edit-news-page-name">Name</div>
        </div>
        {reversedlistOfNews.map((value, key) => {
            let imgtrue = true; if (value.img == "") imgtrue = false;
            return <div className='Edit-news-page' id=''>
                <div className="Edit-news-page-id"><label>{value.id}</label></div>
                <div className="Edit-news-page-name"><label>{value.name}</label></div>
                <div className="Edit-news-page-items">
                    <img className='Edit-news-page-img' onClick={() => { navigate(`/news/editnews/${value.id}`) }} src="" alt="Edit" />
                    <label>-</label>
                    <img className='Edit-news-page-img' onClick={ async () => {
                        await axios.delete(`http://localhost:3001/news/byId/${value.id}`).then((response) => {
                            axios.get("http://localhost:3001/news").then((response) => {
                                setListOfNews(response.data); updateData();
                            });
                        });
                    }} src="" alt="Del" />
                </div>
            </div>
        })}

        <Routes>
            <Route path='/editnews/:id' exact element={<EditNews />}></Route>
        </Routes>

    </div >
}

export default AllNews;