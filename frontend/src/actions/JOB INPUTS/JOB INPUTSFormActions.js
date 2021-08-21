import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'JOB INPUTS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'JOB INPUTS_FORM_FIND_STARTED',
      });

      axios.get(`/JOB INPUTS/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'JOB INPUTS_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'JOB INPUTS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/JOB INPUTS'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'JOB INPUTS_FORM_CREATE_STARTED',
      });

      axios.post('/JOB INPUTS', { data: values }).then(res => {
        dispatch({
          type: 'JOB INPUTS_FORM_CREATE_SUCCESS',
        });

        toast.success('JOB INPUTS created');
        dispatch(push('/admin/JOB INPUTS'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'JOB INPUTS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'JOB INPUTS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/JOB INPUTS/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'JOB INPUTS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('JOB INPUTS updated');
        dispatch(push('/admin/JOB INPUTS'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'JOB INPUTS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
