import React from 'react';
import Navigation from './Navigation';
import Modal from './Modal';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalView: {display: "none"},
            modalBlur: {display: "none"}
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const target = event.target;
        const targetID = target.id;

        if (targetID === "modal-button") {
            if (JSON.stringify(this.state.modalView) === JSON.stringify({display: "none"})) {
                this.setState({
                    modalView: {},
                    modalBlur: {}
                });
            }
        } else if (targetID === "close-button" || targetID === "close-icon" || targetID === "close-out") {
            if (JSON.stringify(this.state.modalView) === JSON.stringify({})) {
                this.setState({
                    modalView: {display: "none"},
                    modalBlur: {display: "none"}
                });
            }
        }
    }

    render() {
        const modalStyle = {bLur: this.state.modalBlur, vIew: this.state.modalView};
        return (
            <div className="grid md:grid-cols-7">
                <Navigation current={"home"}/>
                <Modal mStyle={modalStyle} modalClick={this.handleClick}/>
            </div>
        );
    }
}

export default Home;