import list from 'reducers/Openning Value/Openning ValueListReducers';
import form from 'reducers/Openning Value/Openning ValueFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
