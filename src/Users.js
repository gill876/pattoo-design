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
            <div className="grid md:grid-cols-4">
                <Navigation/>
                <div className="md:col-span-3 md:flex md:justify-center">
                    <div className="md:px-32 py-8 w-full">
                        <div className="shadow overflow-y-scroll rounded border-b border-gray-200">
                            <table className="min-w-full bg-white">
                                <UsersHead/>
                                {user_rows}
                            </table>
                        </div>
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
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">First Name</th>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last Name</th>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Username</th>
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
        enabled: false
      }
  
      this.handleChange = this.handleChange.bind(this);
    };
  
    handleChange(event) {
      this.setState({
        enabled: !this.state.enabled
      });
    };
  
    render() {
      const idx_user = this.props.user.idx_user;
      const first_name = this.props.user.first_name;
      const last_name = this.props.user.last_name;
      const username = this.props.user.username;
      const user_type = this.props.user.user_type;
      return (
        <tbody className="text-gray-700">
          <tr>
            <td className="text-left py-3 px-4">{idx_user}</td>
            <td className="w-1/3 text-left py-3 px-4">{first_name}</td>
            <td className="w-1/3 text-left py-3 px-4">{last_name}</td>
            <td className="w-1/3 text-left py-3 px-4">{username}</td>
            <td className="text-center py-3 px-4">
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-600 ease-in">
                    <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer focus:outline-none"
                        defaultChecked={this.state.enabled}
                        onChange={this.handleChange}>
                    </input>
                    <label for="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
            </td>
            <td className="text-left py-3 px-4">{user_type}</td>
            <td className="text-center py-3 px-4">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="user-remove w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" /></svg>
            </td>
          </tr>
        </tbody>
      );
    };
};

export default Users;