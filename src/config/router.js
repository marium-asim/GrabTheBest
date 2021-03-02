import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../containers/home';
import Products from '../containers/Products';
import Details from '../containers/ProductDetails';
import Dashboard from '../containers/Dashboard';
import Aboutus from '../containers/Aboutus';
import Contactus from '../containers/Contactus';
import TermsOfUse from '../containers/TermsOfUse';
import PrivacyPolicy from '../containers/PrivacyPolicy';


class AppRouter extends React.Component
{
    render()
    {
        return(
            <Router>
                <Route exact path='/' component={Home}/>
                <Route path='/Products' component={Products} />
                <Route path='/ProductDetails' component={Details} />
                <Route path='/Dashboard' component={Dashboard} />
                <Route path='/Aboutus' component={Aboutus} />
                <Route path='/Contactus' component={Contactus} />
                <Route path='/TermsOfUse' component={TermsOfUse} />
                <Route path='/PrivacyPolicy' component={PrivacyPolicy} />

            </Router>
        )
    }
}

export default AppRouter;