import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { ElLoading } from "element-plus"
import { ElMessage } from "element-plus"
import { proxyReplace } from "./proxyReplace"

axios.defaults.withCredentials = true
axios.defaults.timeout = 5 * 1000

let loading: any
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    loading = ElLoading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.7)"
    })
    config.url = proxyReplace(config.url)
    // config.headers = { authorization: getInfo().token || "" }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    loading.close()
    const { status, data } = response
    if (status >= 200 && status < 300) {
      return Promise.resolve(data)
    } else {
      ElMessage.error(data.msg || "请求信息错误")
      return Promise.reject(data.msg)
    }
  },
  (error) => {
    loading.close()
    if (error.response) {
      let msg
      switch (error.response.status) {
        case 403:
          msg = "登录信息已过期,请重新登录"
          break
        case 404:
          msg = "接口请求不存在!错误码【404】。"
          break
        case 500:
          msg = error.response.data.message || "服务端应用接口异常!错误码【500】。"
          break
        default:
          msg = "请求错误，请检查或刷新重试！"
          break
      }
      ElMessage.error(msg)
    } else {
      ElMessage.error("服务不可用")
    }
    return Promise.reject(error)
  }
)

export default axios
