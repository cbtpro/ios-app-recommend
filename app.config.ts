export default defineAppConfig({
  api: {
    /** 获取苹果最受欢迎 APP 列表 */
    appleTopAppsUrl: process.env.APPLE_TOP_APPS_URL as string,
    /** 获取苹果免费 APP 列表 */
    appleTopFreeAppsUrl: process.env.APPLE_TOP_FREE_APPS_URL as string,
    /** 获取苹果搜索 APP */
    appleLookupApsUrl: process.env.APPLE_LOOKUP_APPS_URL as string,
  },
})
