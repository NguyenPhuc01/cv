import { Container, Row, Col } from 'react-bootstrap';
import { BsFillCameraReelsFill, } from "react-icons/bs";
import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../Header';
import Watch from '../Watch';
import './Body.css'

function Body() {
    const [films, setFilms] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/film')
            .then(res => res.json())
            .then(films => {
                setFilms(films)
            })
    }, [])


    return (

        <Container fluid className='bg_black mt-5 pt-5 '>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <div className='titlefilm'>
                            <h4 className='text-uppercase text-light'>
                                <BsFillCameraReelsFill className='' /> Phim bộ mới
                            </h4>
                        </div>


                        {/* <ul>
                            {films.map((film) => {
                                return (<li key={film.id}>{film.title}</li>
                                )




                            })}

                        </ul> */}

                        <div className='content mt-5 d-flex justify-content-center'>








                            {films.map((film) => {


                                return (
                                    <Link to='Watch' className="film mb-5 me-3 text-decoration" >

                                        <img src={film.image} className="" alt="..." />
                                        <div className="film_tilte ">
                                            <h6 className="card-title ms-2  text-decoration-none">{film.title}</h6>
                                            <p className="card-text ms-2  text-decoration-none ">{film.description}</p>
                                        </div>
                                    </Link>

                                )



                            })}
                        

                        </div>
                    </Col>

                </Row>
            </Container >

        </Container >

    )

}
export default Body;