import React from 'react'
import "./ProductCollection.css"
import geometric from "../images/geometric.webp";
import logo from "../images/logo.jpg";
import note from "../images/note.jpg"
import bamboo from "../images/bamboo.webp"


export default function ProductCollection() {
    return (
        <div className='productCollection'>

            <div id='header'>
                <h1>Product Collection</h1>
            </div>


            <div className='image-gallery'>
                <div className="gallery-item  gallery__item--1">
                    <img src={geometric} className="images" />
                    <h6>Geometric</h6>
                </div>


                <div className="gallery-item  gallery__item--2">
                    <img src={logo} className="images" />
                    <h6>Logo</h6>
                </div>


                <div className="gallery-item  gallery__item--3">
                    <img src={note} className="images" />
                    <h6>Note Books</h6>
                </div>

                <div className="gallery-item  gallery__item--4">
                    <img src={bamboo} className="images" />
                    <h6>Bamboo</h6>
                </div>
            </div >
        </div>

    )
}
