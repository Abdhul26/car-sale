

import auth from 'reducers/auth';
import alerts from 'reducers/auth';
import navigation from 'reducers/navigation';
import layout from 'reducers/layout';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import MAIN INPUTS from 'reducers/MAIN INPUTS/MAIN INPUTSReducers';

import JOB INPUTS from 'reducers/JOB INPUTS/JOB INPUTSReducers';

import users from 'reducers/users/usersReducers';

import Openning Value from 'reducers/Openning Value/Openning ValueReducers';

import Application size from 'reducers/Application size/Application sizeReducers';


export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    alerts,
    auth,
    navigation,
MAIN INPUTS,
JOB INPUTS,
users,
Openning Value,
Application size,

  });

