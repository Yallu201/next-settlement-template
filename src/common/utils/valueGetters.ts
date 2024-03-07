import { format, parseISO } from 'date-fns';

// date format
export const dateFormatYYMD = (date) => {
  if (!date) {
    return null;
  }
  return format(parseISO(date), 'yyyy-MM-dd');
};

export const dateFormatYYMDHm = (date) => {
  if (!date) {
    return null;
  }
  return format(parseISO(date), 'yyyy-MM-dd HH:mm');
};

export const dateFormatYYMDHms = (date) => {
  if (!date) {
    return null;
  }
  return format(parseISO(date), 'yyyy-MM-dd HH:mm:ss');
};

export const dateFormatYYMDHmsS = (date) => {
  if (!date) {
    return null;
  }
  return format(parseISO(date), 'yyyy-MM-dd HH:mm:ss.SSS');
};

// unix date format
export const unixDateFormatYYMD = (unix_date) => {
  if (!unix_date) {
    return null;
  }

  return format(new Date(unix_date), 'yyyy-MM-dd');
};

export const unixDateFormatYYMDHm = (unix_date) => {
  if (!unix_date) {
    return null;
  }

  return format(new Date(unix_date), 'yyyy-MM-dd HH:mm');
};

export const unixDateFormatYYMDHma = (unix_date) => {
  if (!unix_date) {
    return null;
  }

  return format(new Date(unix_date), 'yyyy-MM-dd HH:mm a');
};

export const numberFormatToLocaleString = (number) => {
  if (!number) {
    return null;
  }
  return number.toLocaleString();
};

export const dateFormatYYMDHma = (date) => {
  if (!date) {
    return null;
  }
  return format(parseISO(date), 'yyyy-MM-dd HH:mm a');
};
