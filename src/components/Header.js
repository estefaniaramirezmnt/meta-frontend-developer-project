import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on tradictional recipes served in a modern way.</p>
                    <Link to="/booking"><button aria-label="On Click">Reserve table</button></Link>
                </div>

            </section>
        </header>
    );
}

export default Header;