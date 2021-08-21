import { Formik } from 'formik';
import React, { Component } from 'react';
import Loader from 'components/Loader';
// eslint-disable-next-line no-unused-vars
import InputFormItem from 'components/FormItems/items/InputFormItem';
// eslint-disable-next-line no-unused-vars
import InputNumberFormItem from 'components/FormItems/items/InputNumberFormItem';
// eslint-disable-next-line no-unused-vars
import SwitchFormItem from 'components/FormItems/items/SwitchFormItem';
// eslint-disable-next-line no-unused-vars
import RadioFormItem from 'components/FormItems/items/RadioFormItem';
// eslint-disable-next-line no-unused-vars
import SelectFormItem from 'components/FormItems/items/SelectFormItem';
// eslint-disable-next-line no-unused-vars
import DatePickerFormItem from 'components/FormItems/items/DatePickerFormItem';
// eslint-disable-next-line no-unused-vars
import ImagesFormItem from 'components/FormItems/items/ImagesFormItem';
// eslint-disable-next-line no-unused-vars
import FilesFormItem from 'components/FormItems/items/FilesFormItem';
// eslint-disable-next-line no-unused-vars
import TextAreaFormItem from 'components/FormItems/items/TextAreaFormItem';
// eslint-disable-next-line no-unused-vars

import MAIN INPUTSFields from 'pages/CRUD/MAIN INPUTS/helpers/MAIN INPUTSFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

class MAIN INPUTSForm extends Component {
  iniValues = () => {
    return IniValues(MAIN INPUTSFields, this.props.record || {});
  }

  formValidations = () => {
    return FormValidations(MAIN INPUTSFields, this.props.record || {});
  }

  handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(MAIN INPUTSFields, values || {});
    this.props.onSubmit(id, data);
  };

  title = () => {
    if(this.props.isProfile) {
      return 'Edit My Profile';
    }

    return this.props.isEditing
      ? 'Edit MAIN INPUTS'
      : 'Add MAIN INPUTS';
  };

  renderForm() {
    const { saveLoading } = this.props;

    return (
      <Widget title={<h4>{this.title()}</h4>} collapse close>
        <Formik
          onSubmit={this.handleSubmit}
          initialValues={this.iniValues()}
          validationSchema={this.formValidations()}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>

                <InputFormItem
                  name={'Enquiry No'}
                  schema={MAIN INPUTSFields}

                  autoFocus

                />

                <InputFormItem
                  name={'Project Name'}
                  schema={MAIN INPUTSFields}

                />

                <InputNumberFormItem
                  name={'CODE'}
                  schema={MAIN INPUTSFields}
                />

                <SelectFormItem
                  name={'PRODUCT TYPE'}
                  schema={MAIN INPUTSFields}
                />

                <SelectFormItem
                  name={'ENQUIRY OPTION'}
                  schema={MAIN INPUTSFields}
                />


                <div className="form-buttons">
                  <button
                    className="btn btn-primary"
                    disabled={saveLoading}
                    type="button"
                    onClick={form.handleSubmit}
                  >
                    Save
                  </button>{' '}{' '}

                  <button
                    className="btn btn-light"
                    type="button"
                    disabled={saveLoading}
                    onClick={form.handleReset}
                  >
                    Reset
                  </button>{' '}{' '}

                    <button
                      className="btn btn-light"
                      type="button"
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                    >
                      Cancel
                    </button>
                </div>
              </form>
            );
          }}
        />
      </Widget>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Loader />;
    }

    if (isEditing && !record) {
      return <Loader />;
    }

    return this.renderForm();
  }
}

export default MAIN INPUTSForm;
