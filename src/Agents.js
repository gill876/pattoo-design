import React from 'react';
import Navigation from './Navigation';

class Agents extends React.Component {
    render() {
        return (
            <div className="grid md:grid-cols-4">
                <Navigation current={"agents"}/>
                <div className="md:col-span-3 md:flex md:flex-col md:justify-center">
                    <div className="text-lg md:text-3xl text-center font-bold tracking-wider mt-3 pt-2">Manage Agents</div>
                    <div className="md:px-32 py-8 w-full">
                        <div className="shadow overflow-y-scroll rounded border-b border-gray-200">
                            <table className="min-w-full bg-white">
                                <AgentsHead/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class AgentsHead extends React.Component {
    render() {
      return (
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Agent ID</th>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Polled Target</th>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Agent Program</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Enabled</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Remove Agent</th>
          </tr>
        </thead>
      );
    };
};

export default Agents;