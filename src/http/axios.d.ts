/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import axios, { AxiosResponse, AxiosRequestConfig } from "axios"

declare module "axios" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface AxiosResponse<T = any> {
    // 这个地方放属性
    code: any
  }
  // eslint-disable-next-line no-unused-vars
  export function create(config?: AxiosRequestConfig): AxiosInstance
}
