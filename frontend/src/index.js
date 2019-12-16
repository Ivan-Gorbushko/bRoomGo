import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainNav from "./Components/base/MainNav";
import Portfolio from "./Components/base/Portfolio";
import AboutSection from "./Components/base/AboutSection";
import Footer from "./Components/base/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<MainNav/>, document.getElementById('mainNav'));
// ReactDOM.render(<Masthead />, document.getElementById('masthead'));
ReactDOM.render(<Portfolio/>, document.getElementById('portfolio'));
ReactDOM.render(<AboutSection/>, document.getElementById('about'));
// ReactDOM.render(<ContactSection />, document.getElementById('contact'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));
// ReactDOM.render(<Copyright />, document.getElementById('copyright'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
