/**
 * 用于获取常用配置
 */

/**
 * 使用应用程序配置的钩子
 * 此钩子用于获取应用程序的全局配置，特别是与API相关的配置部分
 * 它将应用程序配置中的API相关配置提取出来，便于在组件中直接访问和使用
 *
 * @returns {Object} 返回包含API配置的对象，使得这些配置能在组件内部方便地被引用和使用
 */
const useConfig = () => {
  // 获取应用程序的全局配置
  // const appConfig = useAppConfig();
  const appConfig = useRuntimeConfig()

  // 提取全局配置中的API配置部分
  const { api } = appConfig.public;

  /**
   * 构建API URL
   *
   * @param url {string} - 原始URL模板，应包含待替换的参数占位符
   * @param params {IUrlParams} - URL参数对象，默认值为{ limit: 10 }
   * 此函数通过将参数对象中的键值对替换到URL模板中的占位符，来生成最终的API URL
   * 如果URL参数未提供，将抛出错误提示URL是必需的
   */
  const buildApiUrl = (url: string, params: IUrlParams = { limit: 10 }) => {
    // 检查URL是否已提供
    if (!url) {
      // 如果未提供URL，抛出错误
      throw new Error("url is required");
    }

    // 遍历参数对象的每个键值对
    Object.keys(params).forEach((key) => {
      const value = `${params[key]}`;
      // 如果参数值存在，将其替换到URL模板中的相应占位符
      if (value) {
        url = url.replace(`\$\{${key}\}`, value);
      }
    });
    return url;
  };

  // 返回API配置，以便在组件中使用
  return {
    api,
    buildApiUrl,
  };
};

export default useConfig;
