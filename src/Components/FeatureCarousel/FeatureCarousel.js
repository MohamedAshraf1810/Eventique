import React from 'react';
import { Carousel } from 'react-bootstrap';
import carouselData from '../../Data/FeatureCarouselData';
import './FeatureCarosel.scss';

const FeatureCarousel = () => {

    return (
        <>
            <Carousel className='Carousel'>
                {
                    carouselData.map(data => {
                        return (
                            <Carousel.Item key={data.id}>
                                <div className='Carousel-container'>
                                    <div className='Carousel-container-Data'>
                                        <div className='Carousel-container-Data-Paragraph'>
                                            <p>
                                                {data.TextContent}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )
                    })
                }

            </Carousel>
        </>
    )
}

export default FeatureCarousel