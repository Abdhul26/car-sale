import Errors from 'components/FormItems/error/errors';
import axios from 'axios';

async function list() {
  const response = await axios.get(`/MAIN INPUTS`);
  return response.data;
}

async function filterUsers(request) {
  const response = await axios.get(`/MAIN INPUTS${request}`)
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
        type: 'MAIN INPUTS_LIST_FILTERED',
        payload: {
          rows: response.rows,
        },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: 'MAIN INPUTS_LIST_FETCH_ERROR',
      })
    }
  },

  doFetch: (filter, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'MAIN INPUTS_LIST_FETCH_STARTED',
        payload: { filter, keepPagination },
      });

      const response = await list();

      dispatch({
        type: 'MAIN INPUTS_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'MAIN INPUTS_LIST_FETCH_ERROR',
      });
    }
  },

  doDelete: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'MAIN INPUTS_LIST_DELETE_STARTED',
      });

      await axios.delete(`/MAIN INPUTS/${id}`)

      dispatch({
        type: 'MAIN INPUTS_LIST_DELETE_SUCCESS',
      });

      const response = await list();
      dispatch({
        type: 'MAIN INPUTS_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });

    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'MAIN INPUTS_LIST_DELETE_ERROR',
      });
    }
  },
  doOpenConfirm: (id) => async (dispatch) => {
      dispatch({
        type: 'MAIN INPUTS_LIST_OPEN_CONFIRM',
        payload: {
          id: id
        },
      });
  },
  doCloseConfirm: () => async (dispatch) => {
      dispatch({
        type: 'MAIN INPUTS_LIST_CLOSE_CONFIRM',
      });
  },
};


export default actions;
