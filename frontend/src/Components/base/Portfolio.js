import React, {Component} from "react";
import UserInfoModal from "./UserInfoModal";

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

                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row">
                    {this.state.userData.map((item, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                           <UserInfoModal
                               userDataModal = {item}
                           />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Portfolio;
