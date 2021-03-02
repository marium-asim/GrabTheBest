import React from 'react';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import IMG1 from '../assets/iphone.jpg';
import {Link} from 'react-router-dom';

class Items extends Component
{
    render()
    {
        return(
            <div>
<Card className="box">
<div className="overlay">
<Link to="/ProductDetails"> <Button variant="danger" className="btntext">View Details</Button></Link>
  </div>
                                <Card.Img variant="top" src={IMG1} />

                                <Card.Body>
                                    <Card.Title>IPHONE 12 PRO MAX</Card.Title>
                                    <Card.Text>
                                        <del>$1400.00</del> $1000.00
                                        <h4>Amazon</h4>

      </Card.Text>
                                  
                                </Card.Body>
                            </Card>
            </div>
        )
    }
}

export default Items;