import { reactive } from "vue"
import { defineStore } from "pinia"

export const useUserInfo = defineStore("counter", () => {
  const info = reactive({
    detail: {}
  })
  async function setInfo(payload: any) {
    info.detail = await payload
  }

  return { info, setInfo }
})
