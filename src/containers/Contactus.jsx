import cart from "./video/cart.mp4";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import React from 'react';
import "aos/dist/aos.css";
import AOS from 'aos';
import Header from '../components/header';
import Footer from '../components/footer';

 function Contactus() {
           AOS.init({duration:2000});
        
    
  

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_886m5mr', e.target, 'user_x6eQ8RpGAKLA9iTWMuD1Y')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
   

    return(
        <div>
              
            <video autoPlay loop> 
      
        <source src={cart} type='video/mp4'/>      
    </video>
    <Header />
    <div className="contact">
            <div data-aos="fade-up" className="container">
            <form onSubmit={sendEmail}>
            
                    <div className="row pt-5 mx-auto">
                        <div  className="col-8 form-group mx-auto">
                        <h2> Get In Touch 💌</h2>
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control " placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-block btn-lg" style={{backgroundColor: "rgb(233, 39, 39)", color:"white"}} value="Submit" btn-lg btn-block ></input>
                             
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Contactus;