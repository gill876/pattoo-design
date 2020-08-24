import React from 'react';
import Navigation from './Navigation';

class Agents extends React.Component {
    render() {
        const test_agents = [{agent_id: "7e6bad57159fc3320ce380d5b35f4a1282780db08262f86a2b0777ba09379caf",agent_polled_target: "cargill-K501UX",agent_program: "pattoo_agent_os_autonomousd",ts_created: "2020-07-25 16:26:56"},
                                {agent_id: "a300087584e8bb14393414cedb781ad3710e4d8433d8c4b4243dbdd64ca44c7a",agent_polled_target: "cargill-K501UX",agent_program: "pattoo_agent_linux_autonomousd",ts_created: "2020-07-30 19:08:05"}]
        const agent_rows = test_agents.map((agent)=>
            <AgentsRow key={agent.agent_id} agent={agent}/>
        );
        return (
            <div className="grid md:grid-cols-7">
                <Navigation current={"agents"}/>
                <div className="md:col-span-6 md:flex md:flex-col md:justify-center">
                    <div className="text-lg md:text-3xl text-center font-bold tracking-wider mt-3 pt-2">Manage Agents</div>
                    <div className="md:px-10 py-8 w-auto">
                        <table className="w-auto bg-white shadow overflow-scroll rounded border-b border-gray-200">
                            <caption className="pl-4 pt-4 text-left tracking-widest uppercase font-semibold bg-gray-800 text-white">All Available Agents</caption>
                            <AgentsHead/>
                            {agent_rows}
                        </table>
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
            <th className="text-left pb-3 px-4 uppercase font-semibold text-sm">Agent ID</th>
            <th className="text-left pb-3 px-4 uppercase font-semibold text-sm">Polled Target</th>
            <th className="text-left pb-3 px-4 uppercase font-semibold text-sm">Agent Program</th>
            <th className="text-left pb-3 px-4 uppercase font-semibold text-sm">Enabled</th>
            <th className="text-left pb-3 px-4 uppercase font-semibold text-sm">Date Created</th>
            <th className="text-left pb-3 px-4 uppercase font-semibold text-sm">Remove Agent</th>
          </tr>
        </thead>
      );
    };
};

class AgentsRow extends React.Component {
    constructor(props){
      super (props);
      this.state = {
        enabled: false,
        deleteButton: 'cursor-pointer',
        deleteRow: '',
        deleteIconColor: 'red'
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    };
  
    handleChange(event) {
        const target = event.target;
        alert(this.state.enabled);
        if (target.name === 'toggle'){
            this.setState({
                enabled: !this.state.enabled
            });
        }
    };

    handleClick(event) {
        const target = event.target;
        if (target.className === 'cursor-pointer') {
            const confirm = prompt("Enter \"OK\" to permanently delete user", "OK");
            (confirm === "OK")? 
            this.setState({
                deleteButton: 'cursor-pointer noclick-btn',
                deleteRow: 'line-through noclick-btn',
                enabled: false,
                deleteIconColor: 'currentColor'
            }) : alert("Operation cancelled")
        }
    }
  
    render() {
        const agent_id = this.props.agent.agent_id;
        const agent_polled_target = this.props.agent.agent_polled_target;
        const agent_program = this.props.agent.agent_program;
        const ts_created = this.props.agent.ts_created;
      return (
        <tbody className="text-gray-700">
          <tr className={this.state.deleteRow}>
            <td className="text-left py-3 px-4">{agent_id}</td>
            <td className="text-left py-3 px-4 text-black hover:text-blue-500 cursor-pointer">{agent_polled_target}</td>
            <td className="text-left py-3 px-4">{agent_program}</td>
            <td className="text-center py-3 px-4">
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-600 ease-in">
                    <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer focus:outline-none"
                        defaultChecked={this.state.enabled}
                        onChange={this.handleChange}>
                    </input>
                    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
            </td>
            <td className="text-left py-3 px-4">{ts_created}</td>
            <td className="text-center py-3 px-4">
                <div className={this.state.deleteButton}
                    onClick={this.handleClick}>
                    <svg fill="none" viewBox="0 0 24 24" stroke={this.state.deleteIconColor} className="x-circle w-6 h-6 noclick-btn"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
            </td>
          </tr>
        </tbody>
      );
    };
};

export default Agents;