import { reactive } from "vue"
import { defineStore } from "pinia"

export const useUserInfo = defineStore("counter", () => {
  const info = reactive({
    detail: {}
  })
  function setInfo(payload: any) {
    console.log(payload)
  }

  return { info, setInfo }
})
