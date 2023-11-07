import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Carrousel-top/carrousel.scss'
import Card from './Card/Card';

import cafe from "../../assets/café.jpg"
import wine from "../../assets/wine.jpg"
import cuisine from "../../assets/cusine.jpg"

const MyCarousel = () => (
    
    <div className="container">
    <Carousel infiniteLoop="true" autoPlay="true" interval={6000}  showThumbs={false} >
        <div>
            <img  className="carousel__img" src={cafe} />
            <Card style="card1"/>
            <div className='carousel__containerText'>
                <p className='carousel__text1'>En ce moment</p>
                <p className='carousel__text2'>Package</p>
                <h2 className='carousel__title'>Restaurant à l'aveugle</h2>
            </div>
        </div>
        <div>
            <img src={wine} className="carousel__img"/>
            <Card style="card1"/>
            <div className='carousel__containerText'>
                <p className='carousel__text1'>En ce moment</p>
                <p className='carousel__text2'>Package</p>
                <h2 className='carousel__title'>Restaurant à l'aveugle</h2>
            </div>
        </div>
        <div>
            <img src={cuisine} className="carousel__img"/>
            <Card style="card1"/>
            <div className='carousel__containerText'>
                <p className='carousel__text1'>En ce moment</p>
                <p className='carousel__text2'>Package</p>
                <h2 className='carousel__title'>Restaurant à l'aveugle</h2>
            </div>
        </div>
    </Carousel>
    </div>
    
);

export default MyCarousel;
