import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">

                {/*Footer Location*/}
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Location</h4>
                    <p className="lead mb-0">2215 John Daniel Drive
                        <br />Clark, MO 65243</p>
                </div>

                {/*Footer Social Icons*/}
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Around the Web</h4>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/profile.php?id=100010531895443">
                        <i className="fab fa-fw fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/IvanGorbushko">
                        <i className="fab fa-fw fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/">
                        <i className="fab fa-fw fa-linkedin-in"></i>
                    </a>
                </div>
                {/*Footer About Text*/}
                <div className="col-lg-4">
                    <h4 className="text-uppercase mb-4">About Freelancer</h4>
                    <p className="lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by
                        <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;
