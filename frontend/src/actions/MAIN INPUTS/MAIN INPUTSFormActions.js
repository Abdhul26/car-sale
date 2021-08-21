import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'MAIN INPUTS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'MAIN INPUTS_FORM_FIND_STARTED',
      });

      axios.get(`/MAIN INPUTS/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'MAIN INPUTS_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'MAIN INPUTS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/MAIN INPUTS'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'MAIN INPUTS_FORM_CREATE_STARTED',
      });

      axios.post('/MAIN INPUTS', { data: values }).then(res => {
        dispatch({
          type: 'MAIN INPUTS_FORM_CREATE_SUCCESS',
        });

        toast.success('MAIN INPUTS created');
        dispatch(push('/admin/MAIN INPUTS'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'MAIN INPUTS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'MAIN INPUTS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/MAIN INPUTS/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'MAIN INPUTS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('MAIN INPUTS updated');
        dispatch(push('/admin/MAIN INPUTS'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'MAIN INPUTS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
