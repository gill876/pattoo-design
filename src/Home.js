import React from 'react';
import Navigation from './Navigation';

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
        } else if (targetID === "close-button" || targetID === "close-icon") {
            if (JSON.stringify(this.state.modalView) === JSON.stringify({})) {
                this.setState({
                    modalView: {display: "none"},
                    modalBlur: {display: "none"}
                });
            }
        }
    }

    render() {
        return (
            <div className="grid md:grid-cols-7">
                <Navigation current={"home"}/>
                <div className="md:col-span-6 md:flex md:flex-col md:justify-center">
                    <div className="text-lg md:text-3xl text-center font-bold tracking-wider mt-3 pt-2">Home</div>
                    <div className="md:px-20 py-8 w-full">
                    {/*Start*/}
                    <button
                        id="modal-button"
                        className="bg-gray-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={this.handleClick}
                        >
                            Open regular modal
                    </button>
                        <div 
                            style={this.state.modalView}
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            onClick={() => {"good"}}
                            >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Modal Title
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        >
                                            <span
                                                id="close-icon"
                                                onClick={this.handleClick}
                                                className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                            I always felt like I could do anything. That’s the main
                                            thing people are controlled by! Thoughts- their perception
                                            of themselves! They're slowed down by their perception of
                                            themselves. If you're taught you can’t do anything, you
                                            won’t do anything. I was taught I could do everything.
                                        </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                        <button
                                            id="close-button"
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            style={{ transition: "all .15s ease" }}
                                            onClick={this.handleClick}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            style={{ transition: "all .15s ease" }}
                                            onClick={() => {"good"}}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={this.state.modalBlur} className="opacity-25 fixed inset-0 z-40 bg-black"></div>   
                    {/*End*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;