import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import ButtonMailto from "../Buttons/MailButton";


const Footer = () => {
    return (
        <>
            <footer className="primary-footer">
                <h3>Louise Derzansky</h3>
                <Link to="tel:7186199837" className="footer-link">718-619-9837</Link>
                <p>Kew Gardens, Forest Hills, Briarwood areas</p>
                <p>Queens NY</p>

                <ButtonMailto label="LDerzansky@gmail.com" mailto="mailto:LDerzansky@gmail.com" />
            </footer>
        </>

    );

};

export default Footer;