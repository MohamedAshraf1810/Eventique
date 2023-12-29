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
                                        {/* <div className='Carousel-container-Data-img'> */}
                                        {/* <img width='50%' height='100%' src={data.DescImage} alt={data.DescImageAlt} /> */}
                                        {/* </div> */}
                                        <div className='Carousel-container-Data-Paragraph'>
                                            <p>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit vel obcaecati, et aut consequatur, aspernatur nulla aliquid exercitationem, eius blanditiis debitis dolorem. Nostrum vel iste corporis, tempora commodi fugiat harum.
                                                {/* {data.TextContent} */}
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