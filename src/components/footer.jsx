import React from 'react';
import { Component } from 'react';

class Footer extends Component
{
    render()
    {
        return(

            <div>
            <div className="footer">
      <div>
      <h5><strong>Useful Links</strong></h5>
      <a href="/"><h6>Home</h6></a>
      <a href="/Contactus"><h6>Contact Us</h6></a>
      <a href="/SentimentAnalysis"><h6>Sentiment Analysis</h6></a>
    </div>

    <div>
      <h5>
        <strong>TRENDING SEARCHES</strong></h5>
      <a href=""><h6>Smart Phones</h6></a>
      <a href=""><h6>Tablets</h6></a>
      <a href=""><h6>Smart Phone Accessories</h6></a>
    </div>

    <div>
      <h5><strong>ABOUT US</strong></h5>
      <a href="/Aboutus" target="blank"><h6>About GrabTheBest</h6></a>
    </div>

    <div>
      <h5><strong>GrabTheBest</strong></h5>
      <a href="/TermsOfUse">Terms of Use</a><br/>
      <a href="PrivacyPolicy">Legal and Privacy Information</a>
    </div>

    <div>
      <h5><strong>FOLLOW US</strong></h5>
      <div className="socialMedia">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-youtube"></i>
      <i class="fab fa-instagram"></i>
      </div>

    </div>
</div>
       <div className="copyright">
       <h6>Copyright &#169; 2021 GrabTheBest </h6>
       </div>
       </div>
        )
    }
}

export default Footer;