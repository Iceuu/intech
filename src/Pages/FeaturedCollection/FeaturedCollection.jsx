
import React from 'react'
import Hexagon from "../images/hexagon.png"
import logo from "../images/logo.jpg"
import geometric from "../images/geometric.webp"
import building from "../images/building.jpg"
import green from "../images/blue.jpg"
import vector from "../images/vector.jpg"
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";


import "./FeaturedCollection.css"

export default function FeaturedCollection() {
    return (
        <div className="featuredCollection">

            <div className="head">
                <h1 id="header">Featured Collection</h1>
            </div>

            <div className="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur iste, porro at ducimus dignissimos debitis dicta natus mollitia asperiores inventore nam qui corporis? Adipisci expedita ad ratione, animi error in.
                quasi, hic nobis beatae.  ut beatae autem id voluptate temporibus ullam cum. Blanditiis, mollitia quidem ad praesentium necessitatibus deserunt dignissimos vel ipsam ipsa. Tenetur ducimus voluptas molestias, numquam incidunt quasi ea suscipit corrupti aliquid, praesentium consequatur dolore, facilis cum non quos corporis eaque facere. Tenetur ullam velit molestias magni ea deserunt aliquid cum quod nam animi.
            </div>

            <div className='container'>
                <div class="image-gallery">

                    <div className="gallery-item  gallery__item-1">
                        <div className='new-card'>
                            <img src={logo} className="images" />
                            <div className='bottom-txt'>
                                <h1 id='subtext'>Logo</h1>
                                <p id='icons'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></p>
                            </div>
                        </div>

                    </div>

                    <div className="gallery-item  gallery__item-2">
                        <div className='new-card'>
                            <img src={geometric} className="images" />
                            <div className='bottom-txt'>
                                <h1 id='subtext'>Logo</h1>
                                <p id='icons'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></p>
                            </div>
                        </div>

                    </div>

                    <div className="gallery-item  gallery__item-3">
                        <img src={building} className="images" />
                        <div className='bottom-txt'>
                            <h1 id='subtext'>Old Building</h1>
                            <p id='icons'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></p>
                        </div>
                    </div>

                    <div className="gallery-item  gallery__item-4">
                        <img src={Hexagon} className="images" />
                        <div className='bottom-txt'>
                            <h1 id='subtext'>Logo</h1>
                            <p id='icons'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></p>
                        </div>
                    </div>

                    <div className="gallery-item  gallery__item-5">
                        <img src={vector} className="images" />
                        <div className='bottom-txt'>
                            <h1 id='subtext'>Logo</h1>
                            <p id='icons'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></p>
                        </div>
                    </div>

                    <div className="gallery-item  gallery__item-6">
                        <img src={green} className="images" />
                        <div className='bottom-txt'>
                            <h1 id='subtext'>Logo</h1>
                            <p id='icons'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></p>
                        </div>
                    </div>

                </div>
            </div>

            <br />


            <div className="btn">
                <button>
                    more
                </button>
            </div>


        </div>
    )
}
