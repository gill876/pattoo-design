import React from 'react';
import Navigation from './Navigation';
import Modal from './Modal';

class Home extends React.Component {
    render() {
        return (
            <div className="grid md:grid-cols-7">
                <Navigation current={"home"}/>
                <Modal/>
            </div>
        );
    }
}

export default Home;