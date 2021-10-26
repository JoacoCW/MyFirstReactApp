import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <header className="App-header">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://s3.amazonaws.com/images-cdn.libooks.com/large_banner_misterio_4491b26a46.png"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://s3.amazonaws.com/images-cdn.libooks.com/large_LBS_004_Ahora3y6_v1_desktop_8d05b503f2.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </header>
        </div>
    )
}

export default Header
