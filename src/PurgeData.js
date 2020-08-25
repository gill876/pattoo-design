import React from 'react';

import Navigation from './Navigation';

class PurgeData extends React.Component {
    render() {
        return (
            <div className="flex flex-col md:grid md:grid-cols-7">
                <Navigation current={"purge"}/>
                <div className="md:col-span-6">
                    <div className="text-lg md:text-3xl text-center font-bold tracking-wider my-3 py-2">Purge Data</div>
                    <div className="md:px-10 flex justify-center text-center py-8 mx-5 bg-white shadow rounded border-b border-gray-200">
                        <div className="w-auto bg-white-300">
                            <PurgeForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class PurgeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    };

    handleSubmit(event) {
        event.preventDefault()
        alert("Purging after " + this.state.days + " days");
    }

    render() {
        return (
            <form id="purge-form" className="flex flex-col items-center" method="POST" onSubmit={this.handleSubmit}>
                <div className="inline">
                    Purge data after 
                    <input 
                        id="purge-days" 
                        type="text"
                        name="days"
                        value={this.state.days}
                        className="inline shadow appearance-none border rounded mx-1 w-10 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={this.handleInputChange}
                        /> days 
                </div>
                <button
                    id="purge-button" className="btn mt-5 border-2 border-red-600 shadow-md text-red-600 hover:text-white hover:bg-red-600 transition ease-out duration-500 focus:outline-none"
                    type="submit"
                    >
                        Purge
                </button>
            </form>
        )
    }
}

export default PurgeData;