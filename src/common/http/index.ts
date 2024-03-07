import axios from 'axios';
import { API_ENDPOINTS } from './routes';

const baseURL = () => {
  switch (process.env.COMPILE_ENV) {
    case 'prod':
    case 'production':
      return 'https://ssm-admin.sinsang.market';
    case 'stage':
      return 'https://ssm-admin.stage.sinsang.market';
    case 'qa':
      return 'https://ssm-admin.qa.sinsang.market';
    case 'dev':
    case 'development':
      return 'https://ssm-admin.dev.sinsang.market';
    default:
      return 'http://localhost:3000';
  }
};

const http = axios.create({
  baseURL: baseURL(),
  timeout: 90000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-Token': document.querySelector('[name=csrf-token]').content,
  },
});

// csrf token 을 react_admin 에서 처리하기 때문에 불필요
http.interceptors.request.use(
  (config) => {
    const token = document.querySelector('[name=csrf-token]').content;
    if (token) {
      config.headers = {
        ...config.headers,
        'X-CSRF-Token': token,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    switch (error.response.status) {
      case 401:
        window.location.href = baseURL() + API_ENDPOINTS.LOGIN;
        break;
      case 404:
        // alert('페이지를 찾을수 없습니다. 담당자에게 문의하세요');
        break;
      case 500:
        alert('알수없는 서버오류가 발생되었습니다. 담당자에게 문의하세요');
        break;
      default:
        alert(error.response.data.meta.resultMsg);
        break;
    }

    return Promise.reject(error);
  },
);

export default http;
