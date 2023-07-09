import axios from "axios";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Outlet, Route, Routes, Link, useHistory } from 'react-router-dom';
import CreateNews from './CreateNews';
import AllNews from './AllNews';
import './MenuNews.css';

function MenuNews() {

    const [listOfNews, setListOfNews] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/news").then((response) => {
            setListOfNews(response.data);
        })
    }, [])

    return <div className="MenuNews">

        <div className="PageMenu">
            <Link to="/news/allnews">List A News</Link><br /><br />
            <Link to="/news/createnews">Create A News</Link>
        </div>

        <div className="MenuBorder"></div>

        <Routes className="PagePages">
            <Route path='/news/allnews' exact element={<AllNews />}></Route>
            <Route path='/news/createnews' exact element={<CreateNews />}></Route>
        </Routes>

    </div >
}

export default MenuNews;