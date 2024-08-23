import md5 from 'md5';
import { showNotify } from "vant";

type UrlType =
  | string
  | Request
  | Ref<string | Request>
  | (() => string | Request);

export interface RequestOptions {
  method?: any;
  params?: any;
}

const request = async (url: UrlType, params: any, options: RequestOptions) => {
  const headers = useRequestHeaders(["cookie"]);
  const { apiBase: baseURL } = useRuntimeConfig().public;
  const { method = ((options?.method || "GET") as string).toUpperCase() } =
    options;
  console.log('url', url)
  const key =  md5(url + JSON.stringify(params));
  console.log('key', key);
  return await useFetch(url, {
    default: () => [],
    key,
    method,
    params: { ...params }, //temp hook
    headers,
    // lazy: true,
    credentials: "include",
    body: method === "POST" ? JSON.stringify(params) : undefined,
    onRequest({ request, options }) {
      // 如果需要授权的话，此处添加授权信息
      // options.headers = options.headers || {};
    },
    onRequestError({ request, options, error }) {
      error &&
        showNotify({ type: "danger", message: '"服务器走丢了，请稍后重试！"' });
      // Handle the request errors
    },
    onResponse({ request, response, options }) {
      // Process the response data
      return response._data;
    },
    onResponseError({ request, response, options }) {
      console.log(response);
      // Handle the response errors
      response._data.message &&
      showNotify({ type: "danger", message: '"服务器走丢了，请稍后重试！"' });
    },
  });
};

export const useAppRequest = {
  get: (url: UrlType, params?: any, option?: RequestOptions) => {
    return request(url, params, { method: "GET", ...option });
  },
  post: (url: UrlType, params?: any, option?: RequestOptions) => {
    return request(url, params, { method: "POST", ...option });
  },
};
