import React from 'react';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import CardDeck from 'react-bootstrap/CardDeck';
import Items from '../components/products';

import IMG1 from '../assets/airpods.jpg';

class Products extends Component {

    render() {
        const useStyles = makeStyles((theme) => ({
            link: {
                display: 'flex',

            },
            icon: {
                marginRight: theme.spacing(0.5),
                width: 20,
                height: 20,
            },
        }));

        function handleClick(event) {
            event.preventDefault();
            console.info('You clicked a breadcrumb.');
        }
        return (
            <div>
                <Header />
                <br />
                <div className="container">
                    <div className="filters">
                        <h5>Filters</h5>
                        <div>
                            <hr /> <br /> <br />
                            <form className="formFilters">
                                <p>Please select a store:</p>
                                <input type="checkbox" id="amazon" name="store" value="amazon" />
                                <label for="store">&nbsp;Amazon</label><br />
                                <input type="checkbox" id="walmart" name="store" value="walmart" />
                                <label for="store">&nbsp;Walmart</label><br />
                                <input type="checkbox" id="aliExpress" name="store" value="aliExpress" />
                                <label for="store">&nbsp;Ali Express</label><br /><br />


                                <p>Please select price range:</p>
                                <input type="radio" id="low" name="price" value="low" />
                                <label for="lowPrice">&nbsp;Lowest</label><br />
                                <input type="radio" id="high" name="price" value="high" />
                                <label for="highPrice">&nbsp;Highest</label><br /><br />

                                <p>Please select rating criteria:</p>
                                <input type="radio" id="all" name="rating" value="all" />
                                <label for="Bestrating">&nbsp;Best-rated</label><br />
                                <input type="radio" id="best" name="rating" value="best" />
                                <label for="allRatings">&nbsp;All</label><br />

                                <input type="submit" value="Apply" />


                            </form>

                        </div>
                    </div>
                    <div className="product">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/" onClick={handleClick} className={useStyles.link}>
                                <HomeIcon className={useStyles.icon} />
        Home
      </Link>
                            <Link
                                color="inherit"
                                href="/getting-started/installation/"
                                onClick={handleClick}
                                className={useStyles.link}
                            >
                                <WhatshotIcon className={useStyles.icon} />
       Mobile Phones
      </Link>
                            <Typography color="textPrimary" className={useStyles.link} >
                                <GrainIcon className={useStyles.icon} />
       Iphone
      </Typography>
                        </Breadcrumbs>
                        <br />

                        <CardColumns className="results">

                            <Items />
                            <Items />
                            <Items />
                            <Items />
                            <Items />
                            <Items />
                            <Items />
                            <Items />
                            <Items />
                            <Items />
                            <Items />
                            <Items />
                            <Items />
                            <Items />


                        </CardColumns>

                        <nav aria-label="Page navigation example" className="pages">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="trending">
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
                        </CardDeck>
                    </div>

                </div>

                <Footer />
            </div>
        )
    }
}

export default Products;