import axios from "@/http/index"

//  登录
export const login = (params = {}) => {
  return axios.post("/api/manage/manageLogin", params)
}

// 测试表格
export const getTable = (params = {}) => {
  return axios.post("/api/manage/point/listChangeLogByOptions", params)
}
