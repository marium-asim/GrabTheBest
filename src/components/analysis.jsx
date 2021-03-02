import React, {Component} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import IMG1 from '../assets/analysis.gif'
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import IMG2 from '../assets/meter.jpg';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import IMG3 from '../assets/piechart.png';


class Analysis extends Component
{
    render()
    {
        return(
            
  <div className="analysis">

  <CardDeck>
  <Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>OVERALL SENTIMENT LEVEL</Card.Header>
    <Card.Body>
      <Card.Text>
          <img src={IMG2} alt="" className="meter"/>
         
         <h2> <SentimentVerySatisfiedIcon fontSize="large"/> 4 out of 5</h2>
         <h1 style={{color: "green"}}>POSITIVE</h1>
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>COMMENTS' SENTIMENT</Card.Header>
    <Card.Body>
      <Card.Text>
       <img src={IMG3} alt="" height="370" className="meter" style={{paddingTop: 30}}/>
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
 </CardDeck>
 </div>
        )
    }
}

export default Analysis;