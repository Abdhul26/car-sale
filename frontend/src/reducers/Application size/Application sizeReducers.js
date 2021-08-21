import list from 'reducers/Application size/Application sizeListReducers';
import form from 'reducers/Application size/Application sizeFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
