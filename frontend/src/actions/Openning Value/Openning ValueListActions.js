import Errors from 'components/FormItems/error/errors';
import axios from 'axios';

async function list() {
  const response = await axios.get(`/Openning Value`);
  return response.data;
}

async function filterUsers(request) {
  const response = await axios.get(`/Openning Value${request}`)
  return response.data;
}

const actions = {

  doFilter: (request) => async (
    dispatch,
    getState,
  ) => {
    try {

      const response = await filterUsers(request);

      dispatch({
        type: 'OPENNING VALUE_LIST_FILTERED',
        payload: {
          rows: response.rows,
        },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: 'OPENNING VALUE_LIST_FETCH_ERROR',
      })
    }
  },

  doFetch: (filter, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'OPENNING VALUE_LIST_FETCH_STARTED',
        payload: { filter, keepPagination },
      });

      const response = await list();

      dispatch({
        type: 'OPENNING VALUE_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'OPENNING VALUE_LIST_FETCH_ERROR',
      });
    }
  },

  doDelete: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'OPENNING VALUE_LIST_DELETE_STARTED',
      });

      await axios.delete(`/Openning Value/${id}`)

      dispatch({
        type: 'OPENNING VALUE_LIST_DELETE_SUCCESS',
      });

      const response = await list();
      dispatch({
        type: 'OPENNING VALUE_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });

    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'OPENNING VALUE_LIST_DELETE_ERROR',
      });
    }
  },
  doOpenConfirm: (id) => async (dispatch) => {
      dispatch({
        type: 'OPENNING VALUE_LIST_OPEN_CONFIRM',
        payload: {
          id: id
        },
      });
  },
  doCloseConfirm: () => async (dispatch) => {
      dispatch({
        type: 'OPENNING VALUE_LIST_CLOSE_CONFIRM',
      });
  },
};


export default actions;