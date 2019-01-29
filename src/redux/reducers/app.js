import { handleActions } from 'redux-actions';

const initialState = {
  text: 'React',
  text2: 'React2',
};

const app = handleActions(
  {
    VALUE_CHANGE: (_state, { payload }) => ({ ..._state, ...payload }),
    VALUE_CHANGE_ASYNC_SUCCEEDED: (_state, { payload }) => ({ ..._state, ...payload }),
  },
  initialState,
);

export default app;
