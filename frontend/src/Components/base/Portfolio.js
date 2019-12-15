import React, {Component} from "react";
import Modal from 'react-bootstrap/Modal'
import {Button, ButtonToolbar, Alert} from 'react-bootstrap';

function UserInfoModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                            <div className="divider-custom">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="divider-custom-line"></div>
                            </div>
                            <img className="img-fluid rounded mb-5" src="img/portfolio/cabin.png" alt="" />
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
                                    neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
                                    quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                                    itaque. Nam.</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Portfolio(props) {

    const [modalShow, setModalShow] = React.useState(false);

    class Portfolio extends Component {

        constructor(props) {
            super(props);
            this.state = {
                userData: [],
                modalShow: false,
            };
        }

        componentDidMount() {
            const URL = "http://localhost:8080/api/users";
            fetch(URL).then(res => res.json()).then(json => {
                this.setState({userData: json.data});
            });
        }

        render() {
            return (
                <div className="container">

                    {/*Portfolio Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

                    {/*Icon Divider*/}
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>

                    {/*Portfolio Grid Items*/}
                    <div className="row">
                        {this.state.userData.map((item, index) => (
                            <div className="col-md-6 col-lg-4" key={index}>

                                <ButtonToolbar>
                                    <Button variant="link" onClick={() => setModalShow(true)}>
                                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                            <div
                                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                                <div className="portfolio-item-caption-content text-center text-white">
                                                    <i className="fas fa-plus fa-3x"></i>
                                                </div>
                                            </div>
                                            <img className="img-fluid" src="img/portfolio/cabin.png" alt=""/>
                                        </div>
                                    </Button>

                                    <UserInfoModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </ButtonToolbar>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }
    return <Portfolio {...props}/>
}

export default Portfolio;
