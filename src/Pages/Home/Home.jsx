
import React from 'react'
import Header from "../../Component/Header";
import FeaturedCollection from '../FeaturedCollection/FeaturedCollection';
import ProductCollection from '../ProductCollection/ProductCollection';
import "./Home.css";
import buildingimage from "../images/building.jpg";
import hexagonImage from "../images/hexagon.png";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

export default function Home() {
    return (
        <div>
            <Header />

            <div className='home'>

                <div className='row1'>
                    <div className='row1-content'>
                        <div>
                            <h1>Ishtar</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis eaque dolore eum porro aperiam nulla, delectus facilis, necessitatibus magni doloremque, nam expedita autem voluptatum vitae perspiciatis quae debitis soluta.</p>
                        </div>
                    </div>

                    <div className='row1-img'>
                        <div class="card">
                            <img src={buildingimage} alt="building" className='card-img' />
                            <div class="container">
                                <h4>ishtar</h4>
                                <h4><IoIosStar /> <IoIosStar /> <IoIosStar /><IoIosStar /><IoIosStarHalf /></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />


                <div className='row2'>
                    <div className='row2-img'>
                        <div class="card">
                            <img src={hexagonImage} alt="building" className='card-img' />
                            <div class="container">
                                <h4>Hexagon</h4>
                                <h4><IoIosStar /> <IoIosStar /> <IoIosStar /><IoIosStar /><IoIosStarHalf /></h4>
                            </div>
                        </div>
                    </div>

                    <div className='row2-content'>
                        <div>
                            <h1>Hexagon</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis eaque dolore eum porro aperiam nulla, delectus facilis, necessitatibus magni doloremque, nam expedita autem voluptatum vitae perspiciatis quae debitis soluta.</p>
                        </div>
                    </div>
                </div>
            </div>

            <FeaturedCollection />
            <ProductCollection />

        </div>
    )
}
