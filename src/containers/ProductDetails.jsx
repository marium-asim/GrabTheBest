import React from 'react';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from "react-router-dom";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import IMG2 from '../assets/iphone.jpg';
import IMG1 from '../assets/airpods.jpg';
import AOS from 'aos';

class Details extends Component {

    render() {
        AOS.init({duration:2000});
        return (
            <div>
                <Header />

                <div className="details">

                    <div className="itemDetails">

                        <div style={{maxWidth: 500}}>

                        <TransformWrapper defaultScale={1}
        defaultPositionX={200}
        defaultPositionY={100}>
        <TransformComponent>
          <img src={IMG2} alt="test" width="500" height="600"/>
        </TransformComponent>
      </TransformWrapper>
                          
                        </div>
                        <div className="desc" data-aos="zoom-in-up">
                            <h1> Iphone 12 Pro Max</h1> <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>

                            <p>4.1 average based on 254 reviews.</p> <br />
                            <h3>
                                Product Description:
                       </h3>
                            <ul>
                                <li>
                                    Super Retina XDR display
                           </li>
                                <li>Superfast downloads, high‑quality streaming</li>
                                <li>
                                    LiDAR Scanner for Night mode portraits
                           </li>
                            </ul>
                            <h3>Price:<span style={{ fontWeight: 'lighter' }}> $1300</span></h3><br/>

                            <Button variant="danger" href="https://www.amazon.com/" target="_blank" >Buy Now</Button>
                        </div>
                    </div>
<br/>

                    <h2>Frequently Bought Together</h2>
                    <hr /> <br />
                    <CardDeck>
                         <Card>
                                <a href="/ProductDetails">
                                    <Card.Img variant="top" src={IMG1} />
                                    <Card.Body>
                                        <Card.Title>Airpods</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
      </Card.Text>
                                    </Card.Body>

                                </a>
                            </Card>
                            <Card>
                                <a href="/ProductDetails">
                                    <Card.Img variant="top" src={IMG1} />
                                    <Card.Body>
                                        <Card.Title>Airpods</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
      </Card.Text>
                                    </Card.Body>

                                </a>
                            </Card>
                            <Card>
                                <a href="/ProductDetails">
                                    <Card.Img variant="top" src={IMG1} />
                                    <Card.Body>
                                        <Card.Title>Airpods</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
      </Card.Text>
                                    </Card.Body>

                                </a>
                            </Card>
                            <Card>
                                <a href="/ProductDetails">
                                    <Card.Img variant="top" src={IMG1} />
                                    <Card.Body>
                                        <Card.Title>Airpods</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
      </Card.Text>
                                    </Card.Body>

                                </a>
                            </Card>
                    </CardDeck>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Details;