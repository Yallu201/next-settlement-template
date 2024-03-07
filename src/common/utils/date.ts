import { format } from 'date-fns';

export const formatDate = (date, fm = 'yyyy-MM-dd') => {
  return format(date, fm);
};
