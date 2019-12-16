import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class UserInfoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
        };
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                    <button type="button" value="Open" onClick={() => this.openModal()}>
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white">
                                <i className="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img className="img-fluid" src="img/portfolio/cabin.png" alt="" />
                    </button>
                </div>

                <Modal
                    visible={this.state.visible}
                    // width="400"
                    // height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <div className="modal-dialog modal-xl" role="document">
                            <div className="modal-content">
                                <button type="button" className="close" onClick={() => this.closeModal()}>
                                      <span aria-hidden="true">
                                        <i className="fas fa-times"></i>
                                      </span>
                                </button>
                                <div className="modal-body text-center">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{this.props.userDataModal.name}</h2>
                                                <div className="divider-custom">
                                                    <div className="divider-custom-line"></div>
                                                    <div className="divider-custom-icon">
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <div className="divider-custom-line"></div>
                                                </div>
                                                <img className="img-fluid rounded mb-5" src="img/portfolio/game.png" alt="" />
                                                <p className="mb-5">My name is {this.props.userDataModal.name}. I was registered on this site on {this.props.userDataModal.CreatedAt}. I am {this.props.userDataModal.age} years old </p>
                                                <button type="button" className="close" onClick={() => this.closeModal()}>
                                                  <span aria-hidden="true">
                                                    <i className="fas fa-times fa-fw"></i>
                                                      Close Window
                                                  </span>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </section>
        );
    }
}