
import axios from 'axios';
import React, { Component } from 'react';
import AutocompleteFormItem from 'components/FormItems/items/AutocompleteFormItem';
import { connect } from 'react-redux';

async function selectList(query, limit) {
  const params = { query, limit };
  const response = await axios.get(`/Application size/autocomplete`, { params });
  return response.data;
}

class Application sizeSelectItem extends Component {
  fetchToItem = (value, limit) => {
    return selectList(value, limit);
  };

  mapper = {
    intoSelect(originalValue) {
      if (!originalValue) {
        return undefined;
      }

      const value = originalValue.id;
      let label = originalValue.label ? originalValue.label : originalValue.Capacity(person/kg);

      return {
        key: value,
        value,
        label,
      };
    },

    intoValue(originalValue) {
      if (!originalValue) {
        return undefined;
      }

      return {
        id: originalValue.value,
        label: originalValue.label,
      };
    },
  };

  render() {
    const { form, ...rest } = this.props;

    return (
      <React.Fragment>
        <AutocompleteFormItem
          {...rest}
          fetchFn={this.fetchToItem}
          mapper={this.mapper}
        />
      </React.Fragment>
    );
  }
}

const select = (state) => ({
  hasPermissionToCreate: state.Application size.hasPermissionToCreate
});

export default connect(select)(
  Application sizeSelectItem,
);
