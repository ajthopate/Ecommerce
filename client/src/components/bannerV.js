import React from 'react'

const bannerV = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel verticalCarousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/images/banner6.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/images/banner4.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/images/banner5.jpg" alt="Third slide" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default bannerV