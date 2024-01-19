import React from "react"
import small_logo from "../images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return(
        <footer className="">
            <section>
            <div className="company-info">
                <img src={small_logo} alt="Little Lemon's logo"/>
                <p> We are a family from Chicago, focused on traditional medierranean food 
            with a modern twist. We are proud to serve you the best food in the city.</p>
            </div>
            <div>
                <h3>Important Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
            <li>Address: <br/> 123 Town Street, Chicago</li>
                <li>Phone: <br/> +00 123 456 789</li>
                <li>Email: <br/> little@lemon.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="/"><FontAwesomeIcon icon={faXTwitter} /></a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;