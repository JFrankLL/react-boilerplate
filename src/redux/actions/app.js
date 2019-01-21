import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const changeValue = createAction('VALUE_CHANGE', (key, value) => ({ [key]: value }));
export const changeValueAsync = createActionThunk(
  'VALUE_CHANGE_ASYNC',
  async (key, value) => {
    await sleep(2048);
    return { [key]: value };
  },
);
