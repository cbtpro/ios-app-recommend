import { isDev } from "./constants/App";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '',
    /** 修改默认 assets 目录，支持部署到 gh-pages：gh-pages -d dist */
    buildAssetsDir: 'assets',
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      "postcss-pxtorem": {
        rootValue({ file }: any) {
          return file.indexOf("vant") !== -1 ? 37.5 : 100;
        },
        propList: ["*"],
        exclude: /(node_module)/,
        selectorBlackList: ["html", ".rem-ignore"],
      },
    },
  },
  /**
   * vant配置
   * @see https://github.com/vant-ui/vant-nuxt
   * @see https://nuxt.com.cn/modules/vant
   */
  modules: ["@vant/nuxt"],
  vant: {
    /** Options */
    lazyload: true
  },
  /**
   * @see https://nuxt.com.cn/docs/api/composables/use-runtime-config#%E8%AE%BF%E9%97%AE%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE
   */
  runtimeConfig: {
    // 私有密钥仅在服务器端可用
    apiSecret: "apiSecret",

    // 对客户端暴露的公共参数
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      api: {
        /** 获取苹果最受欢迎 APP 列表 */
        appleTopAppsUrl: process.env.APPLE_TOP_APPS_URL as string,
        /** 获取苹果免费 APP 列表 */
        appleTopFreeAppsUrl: process.env.APPLE_TOP_FREE_APPS_URL as string,
        /** 获取苹果搜索 APP */
        appleLookupApsUrl: process.env.APPLE_LOOKUP_APPS_URL as string,
      },
    },
  },
});
