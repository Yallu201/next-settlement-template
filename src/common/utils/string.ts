import _ from 'lodash';

export const setEmptyOrStr = (v) => {
  if (_.isString(v) && _.isEmpty(v)) return undefined;
  else return v;
};

export const setBooleanStr = (v) => {
  if (v === true || v === 'true') return true;
  if (v === false || v === 'false') return false;
};
