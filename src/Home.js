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
        const modalElements = {title: "Modal Title",
                                content: <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                            I always felt like I could do anything. That’s the main
                                            thing people are controlled by! Thoughts- their perception
                                            of themselves! They're slowed down by their perception of
                                            themselves. If you're taught you can’t do anything, you
                                            won’t do anything. I was taught I could do everything.
                                            </p>
                                };
        return (
            <div className="grid md:grid-cols-7">
                <Navigation current={"home"}/>
                <Modal mElements={modalElements} mStyle={modalStyle} modalClick={this.handleClick}/>
            </div>
        );
    }
}

export default Home;