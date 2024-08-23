/// <reference path="./app/index.d.ts">

/**
 * url 的参数，形状如 ${limit}
 * 需要将${limit}替换为真正的参数
 */
interface IUrlParams {
  [key: string]: string | number | boolean | undefined;
}
