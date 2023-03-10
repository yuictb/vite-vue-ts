export default {
  "^/api": {
    target: "http://115.28.100.177:30001/dev-test/care-future-api",
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/api/, "")
  }
}
