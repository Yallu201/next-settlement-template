export const limitCount = (e, count) => {
  e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, count);
};

export default {
  limitCount,
};
