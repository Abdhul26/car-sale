import React, { Component } from 'react';
import UsersWidget from 'pages/CRUD/Users/page/UsersWidget';
import actions from 'actions/users/usersFormActions';
import { connect } from 'react-redux';

class UsersViewPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
          <UsersWidget
            loading={this.props.loading}
            record={this.props.record}
          />
      </React.Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    loading: store.users.form.loading,
    record: store.users.form.record,
  };
}

export default connect(mapStateToProps)(UsersViewPage);
