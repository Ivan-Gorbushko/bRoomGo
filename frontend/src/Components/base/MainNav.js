import React, {Component} from "react";

const MainNavItems = [
    {name: "Portfolio", anchor: "portfolio"},
    {name: "About", anchor: "about"},
    {name: "Contact", anchor: "contact"},
];

class MainNav extends Component {
    render() {
        return (
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                <button
                    className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                    type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {MainNavItems.map((item, index) => (
                            <li className="nav-item mx-0 mx-lg-1" key={index}>
                                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                   href={'#' + item.anchor}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainNav;
