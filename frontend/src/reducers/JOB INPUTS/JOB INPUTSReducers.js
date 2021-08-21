import list from 'reducers/JOB INPUTS/JOB INPUTSListReducers';
import form from 'reducers/JOB INPUTS/JOB INPUTSFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
