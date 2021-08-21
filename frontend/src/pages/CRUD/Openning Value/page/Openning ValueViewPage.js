import React, { Component } from 'react';
import Openning ValueWidget from 'pages/CRUD/Openning Value/page/Openning ValueWidget';
import actions from 'actions/Openning Value/Openning ValueFormActions';
import { connect } from 'react-redux';

class Openning ValueViewPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
          <Openning ValueWidget
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

export default connect(mapStateToProps)(Openning ValueViewPage);
