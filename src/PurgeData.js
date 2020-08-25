import React from 'react';

import Navigation from './Navigation';

class PurgeData extends React.Component {
    render() {
        return (
            <div className="grid md:grid-cols-7">
                <Navigation current={"purge"}/>
                <div className="md:col-span-6 md:flex md:flex-col md:justify-center">
                    <div className="text-lg md:text-3xl text-center font-bold tracking-wider mt-3 pt-2">Purge Data</div>
                    <div className="md:px-10 py-8 mx-5 max-w-2xl w-auto">
                        Purge Data
                    </div>
                </div>
            </div>
        );
    }
}

export default PurgeData;