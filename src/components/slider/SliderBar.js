import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import shoppingImage from "../../Static/Image/shopping.webp"
import shoppingImage2 from "../../Static/Image/cloth1.jpg"
import shoppingImage3 from "../../Static/Image/cloth2.jpg"


function SliderBar() {
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={shoppingImage}
                            alt="First slide"
                            height="400px"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={shoppingImage2}
                            alt="Second slide"
                            height="400px"
                        />

                      
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={shoppingImage3}
                            alt="Third slide"
                            height="400px"
                        />

                       
                    </Carousel.Item>
                </Carousel>




            </div>

        </>
    )
}

export default SliderBar