import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import pic from '../images/mine.jpg'


const Home = () => {
  return (
    <div>
         <div>
            <section className='sidebar'>

                <img src={pic} alt="{mypic}" className='mypic'/>

                <div className='info'>
                    <h1>Oduola Kamol</h1>
                    <p>Email: Oduolakamol@gmail.com</p>
                    <p>Phone Number:07086830803</p>
                </div>

                <div id='box' className='intro'>
                    <h4><a href='#About'>Introduction</a></h4>
                    <ul>
                        <li><a href="About.js">About</a></li>
                        <li><a href="#About">Project</a></li>
                        <li><a href="#About">SKills</a></li>
                        <li><a href="#About">Contact</a></li>
                        <li><a href="#About">Hire Me!</a></li>
                    </ul>
                </div>
                <Container className='icons social-media-icons'>
                    <h3>Socials</h3>
                    <a href='https://facebook.com'><FontAwesomeIcon icon={faFacebook}/></a>
                    <a href='https://instagram.com'><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href='https://twitter.com'><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href='https://whatsapp.com'><FontAwesomeIcon icon={faWhatsapp}/></a>
                </Container>
               
            </section>
         </div>
    </div>
  )
}

export default Home