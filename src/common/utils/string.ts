export const setEmptyOrStr = (v: unknown) => {
  if (typeof v === 'string' && v.trim() === '') return undefined;
  return v;
};

export const setBooleanStr = (v: unknown) => {
  if (v === true || v === 'true') return true;
  if (v === false || v === 'false') return false;
  return false;
};
