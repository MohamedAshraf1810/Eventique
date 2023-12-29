import Carousel from 'react-bootstrap/Carousel';
import './PartnerCarousel.scss';
import PartnerCarouselData from '../../Data/PartnerCarouselData';


const PartnerCarousel = () => {
    return (
        <>
            <Carousel className='PartnerCarousel' controls={false} interval={2000} indicators={false} >
                {PartnerCarouselData.map((group, groupIndex) => (
                    <Carousel.Item key={groupIndex}>
                        <div className='partnersContainer'>
                            {group.map((partner) => (
                                <div key={partner.id} className='partnersLogo'>
                                    <img
                                        src={partner.ImgSrc}
                                        alt={`Partner ${partner.id}`}
                                        loading='lazy'
                                    />
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default PartnerCarousel