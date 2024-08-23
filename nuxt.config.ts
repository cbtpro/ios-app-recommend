// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      'postcss-pxtorem': {
        rootValue({ file }: any) {
          return file.indexOf('vant') !== -1 ? 37.5 : 100
        },
        propList: ['*'],
        exclude: /(node_module)/,
        selectorBlackList: ['html', '.rem-ignore']
      }  
    }
     },
  /**
   * vant配置
   * @see https://github.com/vant-ui/vant-nuxt
   * @see https://nuxt.com.cn/modules/vant
   */
  modules: ["@vant/nuxt"],
  vant: {
    /** Options */
  },
  runtimeConfig: {
    // 私有密钥仅在服务器端可用
    apiSecret: 'apiSecret',

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
    }
  }
});
