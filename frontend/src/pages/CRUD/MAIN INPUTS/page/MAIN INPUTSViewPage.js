import React, { Component } from 'react';
import MAIN INPUTSWidget from 'pages/CRUD/MAIN INPUTS/page/MAIN INPUTSWidget';
import actions from 'actions/MAIN INPUTS/MAIN INPUTSFormActions';
import { connect } from 'react-redux';

class MAIN INPUTSViewPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
          <MAIN INPUTSWidget
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

export default connect(mapStateToProps)(MAIN INPUTSViewPage);
