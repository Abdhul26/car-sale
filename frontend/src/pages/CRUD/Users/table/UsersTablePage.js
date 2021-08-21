import React, { Component } from 'react';
import UsersTable from 'pages/CRUD/Users/table/UsersTable';

class UsersListPage extends Component {
  render() {
    return (
    	<div>
          <UsersTable />
      	</div>
    );
  }
}

export default UsersListPage;
