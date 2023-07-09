import axios from "axios";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Outlet, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './EditNews.css';

function EditNews() {

    let { id } = useParams();
    let navigate = useNavigate();

    const [newsObject, setNewsObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/news/byId/${id}`).then((response) => {
            setNewsObject(response.data);
        })
    }, [])

    const initialValues = {
        name: "",
        desc: "",
        img: "",
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('is a required field'),
        desc: Yup.string().required('is a required field'),
        img: Yup.string(),
    })

    const onSubmit = (data) => {
        axios.put(`http://localhost:3001/news/byId/${id}`, data).then((response) => {
            updateData();
            let el1 = document.querySelector('.news-menu-box-full');
            el1.classList.remove("active");
            let el2 = document.querySelector('.news-menu-box');
            el2.classList.remove("active");
            navigate(`/news/allnews`)
        })
    }

    const updateData = () => {
        const event = new CustomEvent('dataUpdated');
        window.dispatchEvent(event);
    };

    return <div className="CreateNews">

        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="CreateNews-form">
                <label>Name <ErrorMessage name="name" component='span' /></label><br />
                <Field autocomplete='off' id="inputCreateNews" name="name" placeholder={newsObject.name}>
                </Field><br /><br />
                <label>Description <ErrorMessage name="desc" component='span' /></label><br />
                <Field autocomplete='off' id="inputCreateNews" name="desc" placeholder={newsObject.desc}>
                </Field><br /><br />
                <label>IMG <ErrorMessage name="img" component='span' /></label><br />
                <Field autocomplete='off' id="inputCreateNews" name="img" placeholder={newsObject.img}>
                </Field>

                <div className='CreatedNews-Buttons'>
                    <button className="CreatedNews-Button" type="submit">Submit</button>
                </div>
            </Form>
        </Formik>

    </div >
}

export default EditNews;