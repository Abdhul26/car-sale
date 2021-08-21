import list from 'reducers/MAIN INPUTS/MAIN INPUTSListReducers';
import form from 'reducers/MAIN INPUTS/MAIN INPUTSFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
