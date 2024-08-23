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
});
