/**
 * App枚举
 */
export const isDev = process.env.NODE_ENV === 'development'
export const isTest = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

const getEnv = () => {
    return isDev ? '开发' : (isTest ? '测试' : '生产')
}
export const RELEASE_INFO = Object.freeze({
    ENV: getEnv(),
})