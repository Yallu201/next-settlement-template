export const APP_ENV = import.meta.env.MODE;
export const ADMIN_API_BASE_URL = import.meta.env.VITE_ADMIN_API_BASE_URL;
export const BILLING_API_BASE_URL = import.meta.env.VITE_BILLING_API_BASE_URL;
export const DDINGDONG_API_BASE_URL = import.meta.env.VITE_DDINGDONG_API_BASE_URL;
export const ONDO_API_BASE_URL = import.meta.env.VITE_ONDO_API_BASE_URL;

export const IMAGE_RESIZER_BASE_URL = import.meta.env.VITE_IMAGE_RESIZER_BASE_URL;

export const AG_GRID_KEY = import.meta.env.VITE_AG_GRID_KEY;

export const IS_DEV = APP_ENV === 'dev';
