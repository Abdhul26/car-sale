import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'OPENNING VALUE_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'OPENNING VALUE_FORM_FIND_STARTED',
      });

      axios.get(`/Openning Value/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'OPENNING VALUE_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'OPENNING VALUE_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/Openning Value'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'OPENNING VALUE_FORM_CREATE_STARTED',
      });

      axios.post('/Openning Value', { data: values }).then(res => {
        dispatch({
          type: 'OPENNING VALUE_FORM_CREATE_SUCCESS',
        });

        toast.success('Openning Value created');
        dispatch(push('/admin/Openning Value'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'OPENNING VALUE_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'OPENNING VALUE_FORM_UPDATE_STARTED',
      });

      await axios.put(`/Openning Value/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'OPENNING VALUE_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Openning Value updated');
        dispatch(push('/admin/Openning Value'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'OPENNING VALUE_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
