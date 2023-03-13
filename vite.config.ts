import { defineConfig, loadEnv } from "vite"
import path from "path"
import ElementPlus from "unplugin-element-plus/vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import vue from "@vitejs/plugin-vue"
import proxy from "./src/http/proxy.d"

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log("当前环境", env.VITE_NODE_ENV)
  return defineConfig({
    plugins: [
      vue(),
      ElementPlus({}),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    base: "./",
    build: {
      target: "modules",
      outDir: "demo-platform-web", //项目打包文件夹名称, 如nginx 使用root 配置,需与 location 的值一致
      chunkSizeWarningLimit: 800,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
    server: {
      proxy: {
        ...proxy
      }
    }
  })
}
