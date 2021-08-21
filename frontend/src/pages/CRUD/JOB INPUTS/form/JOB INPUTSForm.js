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

import JOB INPUTSFields from 'pages/CRUD/JOB INPUTS/helpers/JOB INPUTSFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import Application sizeSelectItem from 'pages/CRUD/Application size/helpers/Application sizeSelectItem';

import Openning ValueSelectItem from 'pages/CRUD/Openning Value/helpers/Openning ValueSelectItem';

class JOB INPUTSForm extends Component {
  iniValues = () => {
    return IniValues(JOB INPUTSFields, this.props.record || {});
  }

  formValidations = () => {
    return FormValidations(JOB INPUTSFields, this.props.record || {});
  }

  handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(JOB INPUTSFields, values || {});
    this.props.onSubmit(id, data);
  };

  title = () => {
    if(this.props.isProfile) {
      return 'Edit My Profile';
    }

    return this.props.isEditing
      ? 'Edit JOB INPUTS'
      : 'Add JOB INPUTS';
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

                <TextAreaFormItem
                  name={'Hoistway Width (mm)'}
                  schema={JOB INPUTSFields}

                  autoFocus

                />

                <InputFormItem
                  name={'Hoistway Depth (mm)'}
                  schema={JOB INPUTSFields}

                />

                <InputFormItem
                  name={'Glass Door'}
                  schema={JOB INPUTSFields}

                />

                <Application sizeSelectItem
                  name={'Capacity (Person/Kg)'}
                  schema={JOB INPUTSFields}
                  showCreate={!this.props.modal}
                />

                <Application sizeSelectItem
                  name={'Opening Width (mm)'}
                  schema={JOB INPUTSFields}
                  showCreate={!this.props.modal}
                />

                <InputFormItem
                  name={'Opening Type'}
                  schema={JOB INPUTSFields}

                />

                <Application sizeSelectItem
                  name={'Car Inside Width'}
                  schema={JOB INPUTSFields}
                  showCreate={!this.props.modal}
                />

                <Application sizeSelectItem
                  name={'Car Inside Depth'}
                  schema={JOB INPUTSFields}
                  showCreate={!this.props.modal}
                />

                <Application sizeSelectItem
                  name={'Door Offset'}
                  schema={JOB INPUTSFields}
                  showCreate={!this.props.modal}
                />

                <Openning ValueSelectItem
                  name={'Speed (M/s)'}
                  schema={JOB INPUTSFields}
                  showCreate={!this.props.modal}
                />

                <Openning ValueSelectItem
                  name={'"Opening Height (mm) & Clear Ceiling Height"'}
                  schema={JOB INPUTSFields}
                  showCreate={!this.props.modal}
                />

                <InputFormItem
                  name={'No of Stops'}
                  schema={JOB INPUTSFields}

                />

                <InputFormItem
                  name={'Minimum Travel  (mm) Based on Stops'}
                  schema={JOB INPUTSFields}

                />

                <InputFormItem
                  name={'Maximum Travel (mm)'}
                  schema={JOB INPUTSFields}

                />

                <InputFormItem
                  name={'Travel (mm)'}
                  schema={JOB INPUTSFields}

                />

                <InputFormItem
                  name={'Minimum Overhead (mm)'}
                  schema={JOB INPUTSFields}

                />

                <InputFormItem
                  name={'Minimum Pit Depth (mm)'}
                  schema={JOB INPUTSFields}

                />

                <InputFormItem
                  name={'Overhead (mm)'}
                  schema={JOB INPUTSFields}

                />

                <InputFormItem
                  name={'Pit Depth (mm)'}
                  schema={JOB INPUTSFields}

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

export default JOB INPUTSForm;
