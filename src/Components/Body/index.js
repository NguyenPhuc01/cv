import { Container, Row, Col } from 'react-bootstrap';
import { BsFillCameraReelsFill } from "react-icons/bs";
import React, { Component } from "react";
import Slider from "react-slick";
import Header from '../Header';
function Body() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (

        <Container fluid className='bgAll mt-5 pt-5'>
            <Header />
            <Container>
                <Row>
                    <Col xl>
                        <div className='text-light ms-5 ps-5  d-flex mt-5'>
                            <BsFillCameraReelsFill className='text-danger fs-3 me-3' />
                            <h5> PHIM ĐỀ CỬ</h5>
                        </div>

                        <div className='carosel text-light mt-5'>
                            <div>

                                <Slider {...settings}>
                                    <div >
                                        <img src='spiderman.jpg' className='mw-75' />

                                    </div>
                                    <div>
                                        <img src='daula.jpg' className='mw-50' />
                                    </div>
                                    <div>
                                        <img src='nguoihoagiai.jpg' className='mw-75' />
                                    </div>
                                    <div>
                                        <img src='spiderman.jpg' className='mw-75' />
                                    </div>
                                    <div>
                                        <img src='daula.jpg' className='mw-75' />

                                    </div>
                                    <div>
                                        <img src='nguoihoagiai.jpg' className='mw-75' />

                                    </div>
                                    <div>
                                        <img src='spiderman.jpg' />
                                    </div>
                                    <div>
                                        <img src='daula.jpg' className='mw-75' />

                                    </div>
                                    <div>
                                        <img src='nguoihoagiai.jpg' className='mw-75' />

                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* <Row>
                    <Col>
                        <div>
                            <video width="750" height="500" controls >
                                <source src="video1.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                </Row> */}

            </Container>

        </Container>

    )

}
export default Body;