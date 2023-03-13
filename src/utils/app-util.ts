// 保存用户信息
export const setUserInfo = (obj: any) => {
  return sessionStorage.setItem("userInfo", JSON.stringify(obj))
}
// 获取用户信息
export const getUserInfo = () => {
  return JSON.parse(sessionStorage.getItem("userInfo") || "{}")
}
// 设置token
export const setToken = (jwt: string) => {
  return sessionStorage.setItem("token", jwt)
}
// 获取token
export const getToken = () => {
  return sessionStorage.getItem("token")
}
// 登出清除所有信息
export const removeAll = () => {
  return sessionStorage.clear()
}
