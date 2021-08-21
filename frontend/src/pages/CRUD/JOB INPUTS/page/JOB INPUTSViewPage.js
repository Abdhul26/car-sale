import React, { Component } from 'react';
import JOB INPUTSWidget from 'pages/CRUD/JOB INPUTS/page/JOB INPUTSWidget';
import actions from 'actions/JOB INPUTS/JOB INPUTSFormActions';
import { connect } from 'react-redux';

class JOB INPUTSViewPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
          <JOB INPUTSWidget
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

export default connect(mapStateToProps)(JOB INPUTSViewPage);
