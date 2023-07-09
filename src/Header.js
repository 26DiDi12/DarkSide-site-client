import axios from "axios";
import React, { Component } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import x from './x.png';
import MenuNews from './MenuNews';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Header.css';
let name = 'News';
const path = window.location.pathname;
const words = path.split('/');
const firstWord = words[1];

function supportBox() {
  let el1 = document.querySelector('.support-box-full');
  (el1.classList.contains("active") === true) ? el1.classList.remove("active") : el1.classList.add("active");
  let el2 = document.querySelector('.support-box');
  (el2.classList.contains("active") === true) ? el2.classList.remove("active") : el2.classList.add("active");
}

function newsBox() {
  let el1 = document.querySelector('.news-menu-box-full');
  (el1.classList.contains("active") === true) ? el1.classList.remove("active") : el1.classList.add("active");
  let el2 = document.querySelector('.news-menu-box');
  (el2.classList.contains("active") === true) ? el2.classList.remove("active") : el2.classList.add("active");
}

var rootElement = document.documentElement;
function handleScroll() {
  let but = document.querySelector('#uppbutton');
  if ((rootElement.scrollTop) > 130) {
    but.classList.add("active");
  } else {
    but.classList.remove("active");
  }
}
document.addEventListener("scroll", handleScroll);

function siteClick() {
  if (firstWord == 'news') {
    let el1 = document.querySelector('.news-menu-box-full');
    (el1.classList.contains("active") === true) ? el1.classList.remove("active") : el1.classList.add("active");
    let el2 = document.querySelector('.news-menu-box');
    (el2.classList.contains("active") === true) ? el2.classList.remove("active") : el2.classList.add("active");
  } else {
    window.location.assign(`${window.location.origin}#news`);
  }
}

if (firstWord == 'news') {
  name = "Menu";
} else {
  name = "News";
}

function Header() {

  let navigate = useNavigate();

  const initialValues = {
    text: "",
  }

  const validationSchema = Yup.object().shape({
    text: Yup.string().required('is a required field'),
  })

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/reports", data).then(async (response) => {
      let el1 = document.querySelector('.support-box-full');
      el1.classList.remove("active");
      let el2 = document.querySelector('.support-box');
      el2.classList.remove("active");
      navigate(`/news/allnews`);
    });
  }

  return <div className='header-bg'>
    <div className="header-main" id='menu'>
      <a href="\#main" className='header-button'>Main</a>
      <a href="\#game" className='header-button'>Game</a>
      <a href="\#game" className='header-heavy-button'>DARK SIDE</a>
      <a onClick={siteClick} className='header-button'>{name}</a>
      <a onClick={supportBox} className='header-button'>Support</a>
    </div>

    <div className='support-box-full'>
      <div className='support-box-gray' onClick={supportBox}></div>
      <div className='support-box'>
        <div className='support-box-x'>
          <h1>Support</h1>
          <img className='support-box-x-img' onClick={supportBox} height='34px' width='34px' src={x} alt="" />
        </div>
        <Formik initialValues={initialValues} onSubmit={(values, { resetForm }) => { onSubmit(values); resetForm(); }} validationSchema={validationSchema}>
          <Form className="support-box-page">
            <label>Report <ErrorMessage name="text" component='span' /></label><br />
            <Field autocomplete='off' id="inputCreateReport" name="text" placeholder="Your report..."></Field><br /><br />

            <div className='News-Buttons'>
              <button className="News-Button" type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>

    <div className='news-menu-box-full'>
      <div className='news-menu-box-gray' onClick={newsBox}></div>
      <div className='news-menu-box'>
        <div className='news-menu-box-x'>
          <h1>Menu</h1>
          <img className='news-menu-box-x-img' onClick={newsBox} height='34px' width='34px' src={x} alt="" />
        </div>
        <div className='news-menu-box-in'>
          <MenuNews />
          <div id="detail">
            <Outlet />
          </div>
        </div>
      </div>
    </div>

    <div className='up-button-box' id='uppbutton'>
      <a href="#" className='up-button'>
        up
      </a>
    </div>
  </div>
}

export default Header;