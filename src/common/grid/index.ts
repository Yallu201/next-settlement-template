export { AG_GRID_LOCALE_KO } from './locale';
export { defaultColDef, defaultGridOptions } from './option';

export const handleResponse = (dispatch, type, data, onSuccess) => {
  dispatch({ type, payload: data });
  if (onSuccess) onSuccess();
};
