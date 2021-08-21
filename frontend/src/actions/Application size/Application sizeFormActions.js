import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'APPLICATION SIZE_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'APPLICATION SIZE_FORM_FIND_STARTED',
      });

      axios.get(`/Application size/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'APPLICATION SIZE_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'APPLICATION SIZE_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/Application size'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'APPLICATION SIZE_FORM_CREATE_STARTED',
      });

      axios.post('/Application size', { data: values }).then(res => {
        dispatch({
          type: 'APPLICATION SIZE_FORM_CREATE_SUCCESS',
        });

        toast.success('Application size created');
        dispatch(push('/admin/Application size'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'APPLICATION SIZE_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'APPLICATION SIZE_FORM_UPDATE_STARTED',
      });

      await axios.put(`/Application size/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'APPLICATION SIZE_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Application size updated');
        dispatch(push('/admin/Application size'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'APPLICATION SIZE_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
