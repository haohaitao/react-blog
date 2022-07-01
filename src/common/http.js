/*
 * @Description:
 * @Author: pacino
 * @Date: 2022-07-01 00:03:54
 * @LastEditTime: 2022-07-01 10:52:06
 * @LastEditors: pacino
 */
import axios from "axios";
import { message } from "antd";
const httpError = (msg) => {
  message.error(msg);
};

const service = axios.create({
  timeout: 5000, // request timeout
});

// respone拦截器
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      httpError("数据异常，请稍后重试");
      return Promise.reject(response || "error");
    }
  },
  (error) => {
    httpError("数据异常，请稍后重试");
    return Promise.reject(error);
  }
);

function request(host, uri, method, data) {
  if (!data) data = {};

  let r_url = host ? host + uri : uri;
  return service({
    method: method,
    url: r_url,
    data: data,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

export function postJson(uri, data, host) {
  return request(host, uri, "post", data);
}
export function getJson(uri, data, host) {
  return request(host, uri, "get", data);
}
