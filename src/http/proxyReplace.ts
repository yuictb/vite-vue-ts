import proxy from "./proxy.d"

export const proxyReplace = (url?: string) => {
  if (import.meta.env.VITE_NODE_ENV === "development") return url
  const regs: any = []
  Object.keys(proxy).forEach((key) => {
    const reg = new RegExp(key)
    regs.push(reg)
  })
  for (let i = 0; i < regs.length; i++) {
    if (regs[i].test(url)) {
      return url?.replace(regs[i], "")
    }
  }
  return url
}
