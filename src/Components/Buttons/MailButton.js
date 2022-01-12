import React from "react";
import { Link } from "react-router-dom";
import "./MailButton.css";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
            className="mail-link"
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;