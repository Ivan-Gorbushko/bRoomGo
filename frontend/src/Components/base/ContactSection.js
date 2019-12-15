import React, { Component } from "react";

class ContactSection extends Component {
  render() {
    return (
        <div className="container">

            {/*Contact Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>

            {/*Icon Divider*/}
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                </div>
                <div className="divider-custom-line"></div>
            </div>

            {/*Contact Section Form*/}
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    {/*To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Name</label>
                                <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Email Address</label>
                                <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Phone Number</label>
                                <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Message</label>
                                <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <br />
                            <div id="success"></div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                            </div>
                    </form>
                </div>
            </div>

        </div>
    );
  }
}

export default ContactSection;
