import React from 'react';

import Navigation from './Navigation';

class Users extends React.Component {
        render() {
            const test_users = [{idx_user: 1,first_name: "Cargill",last_name: "Seiveright",username: "sivrite",user_type: "admin"},
                                {idx_user: 2,first_name: "John",last_name: "Brown",username: "jbrown",user_type: "standard"},
                                {idx_user: 3,first_name: "Mary",last_name: "Jane",username: "mjane",user_type: "standard"},
                                {idx_user: 4,first_name: "Joy",last_name: "Campbell",username: "jcamp",user_type: "standard"}]
            const user_rows = test_users.map((user)=>
                <UsersRow key={user.idx_user} user={user}/>
            );
            return (
                <div className="flex flex-col md:grid md:grid-cols-7">
                    <Navigation current={"users"}/>
                    <div className="flex flex-col justify-center md:col-span-6">
                        <div className="text-lg md:text-3xl text-center font-bold tracking-wider mt-3 pt-2">Manage Users</div>
                        <div className="md:px-10 py-8 w-auto md:flex md:flex-col md:justify-center overflow-x-scroll">
                            <table className="w-auto bg-white overflow-y-scroll shadow rounded border-b border-gray-200 justify-center">
                                <UsersHead/>
                                {user_rows}
                            </table>
                        </div>
                    </div>
                </div>
            );
    }
}

class UsersHead extends React.Component {
    render() {
      return (
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">User ID</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">First Name</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Last Name</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Username</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Enabled</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">User Type</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Delete User</th>
          </tr>
        </thead>
      );
    };
};

class UsersRow extends React.Component {
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
      const idx_user = this.props.user.idx_user;
      const first_name = this.props.user.first_name;
      const last_name = this.props.user.last_name;
      const username = this.props.user.username;
      const user_type = this.props.user.user_type;
      return (
        <tbody className="text-gray-700">
          <tr className={this.state.deleteRow}>
            <td className="text-left py-3 px-4">{idx_user}</td>
            <td className="text-left py-3 px-4">{first_name}</td>
            <td className="text-left py-3 px-4">{last_name}</td>
            <td className="text-left py-3 px-4">{username}</td>
            <td className="text-left py-3 px-4">
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <label className="switch">
                        <input
                            type="checkbox"
                            name="toggle"
                            id="toggle"
                            defaultChecked={this.state.enabled}
                            onChange={this.handleChange}
                            >
                        </input>
                        <span className="slider round"></span>
                    </label>
                </div>
            </td>
            <td className="text-left py-3 px-4">{user_type}</td>
            <td className="text-center py-3 px-4">
                <div className={this.state.deleteButton}
                    onClick={this.handleClick}>
                    <svg fill="none" viewBox="0 0 24 24" stroke={this.state.deleteIconColor} className="user-remove w-6 h-6 noclick-btn"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" /></svg>
                </div>
            </td>
          </tr>
        </tbody>
      );
    };
};

export default Users;