import React, { Component } from 'react';
import Application sizeWidget from 'pages/CRUD/Application size/page/Application sizeWidget';
import actions from 'actions/Application size/Application sizeFormActions';
import { connect } from 'react-redux';

class Application sizeViewPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
          <Application sizeWidget
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

export default connect(mapStateToProps)(Application sizeViewPage);
