import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from "react-router-dom";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import IMG1 from '../assets/analysis.gif'
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import IMG2 from '../assets/meter2.jpg';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import IMG3 from '../assets/piechart.png';
import Analysis from '../components/analysis';
  
class Dashboard extends Component{
    render()
    {
      return(
          <div>
<Header />
<img src={IMG1}  alt="" height="300" className="senti"/>
<Tabs defaultActiveKey="amazon" transition={false} id="noanim-tab-example">
  <Tab eventKey="amazon" title="Amazon">
  <Analysis />
  </Tab>



  <Tab eventKey="walmart" title="Walmart">
  <div className="analysis">

<CardDeck>
<Card border="dark" style={{ width: '18rem' }}>
  <Card.Header>OVERALL SENTIMENT LEVEL</Card.Header>
  <Card.Body>
    <Card.Text>
        <img src={IMG2} alt="" className="meter"/>
       
       <h2> <SentimentVerySatisfiedIcon fontSize="large"/> 2.5 out of 5</h2>
       <h1 style={{color: "orange"}}>NEUTRAL</h1>
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
  </Tab>
  <Tab eventKey="aliexpress" title="Ali Express" >
  <Analysis />
  </Tab>
<Tab eventKey="overall" title="Overall" >
<Analysis />
  </Tab>

</Tabs>

<Footer />
          </div>
      )
    }
}

export default Dashboard;