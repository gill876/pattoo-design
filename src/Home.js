import React from 'react';
import Navigation from './Navigation';

class Home extends React.Component {
    render() {
        return (
            <div className="grid md:grid-cols-7">
                <Navigation current={"home"}/>
                <div className="md:col-span-6 md:flex md:flex-col md:justify-center">
                    <div className="text-lg md:text-3xl text-center font-bold tracking-wider mt-3 pt-2">Home</div>
                    <div className="md:px-20 py-8 w-full">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;