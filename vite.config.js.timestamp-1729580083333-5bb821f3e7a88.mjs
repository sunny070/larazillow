// vite.config.js
import { defineConfig } from "file:///E:/vue+LARAVEL/Larazillow/larazillow/node_modules/vite/dist/node/index.js";
import laravel from "file:///E:/vue+LARAVEL/Larazillow/larazillow/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///E:/vue+LARAVEL/Larazillow/larazillow/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import { quasar, transformAssetUrls } from "file:///E:/vue+LARAVEL/Larazillow/larazillow/node_modules/@quasar/vite-plugin/src/index.js";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/js/app.js"],
      refresh: true,
      template: { transformAssetUrls }
    }),
    vue({
      template: {
        base: null,
        includeAbsolute: false
      }
    }),
    quasar({
      sassVariables: "resources/css/quasar-variables.sass"
    })
  ],
  resolve: {
    alias: {
      ziggy: path.resolve("vendor/tightenco/ziggy/dist/vue.es.js")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx2dWUrTEFSQVZFTFxcXFxMYXJhemlsbG93XFxcXGxhcmF6aWxsb3dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHZ1ZStMQVJBVkVMXFxcXExhcmF6aWxsb3dcXFxcbGFyYXppbGxvd1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovdnVlK0xBUkFWRUwvTGFyYXppbGxvdy9sYXJhemlsbG93L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IHF1YXNhciwgdHJhbnNmb3JtQXNzZXRVcmxzIH0gZnJvbSBcIkBxdWFzYXIvdml0ZS1wbHVnaW5cIjtcblxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgbGFyYXZlbCh7XG4gICAgICAgICAgICBpbnB1dDogWydyZXNvdXJjZXMvY3NzL2FwcC5jc3MnLCAncmVzb3VyY2VzL2pzL2FwcC5qcyddLFxuICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7IHRyYW5zZm9ybUFzc2V0VXJscyB9LFxuXG4gICAgICAgIH0pLFxuICAgICAgICB2dWUoe1xuICAgICAgICAgICAgdGVtcGxhdGU6e1xuICAgICAgICAgICAgICAgIGJhc2U6bnVsbCxcbiAgICAgICAgICAgICAgICBpbmNsdWRlQWJzb2x1dGU6ZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHF1YXNhcih7XG4gICAgICAgICAgICBzYXNzVmFyaWFibGVzOiBcInJlc291cmNlcy9jc3MvcXVhc2FyLXZhcmlhYmxlcy5zYXNzXCIsXG4gICAgICAgICAgICB9KSwgICAgICAgICAgICBcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgIHppZ2d5OiBwYXRoLnJlc29sdmUoJ3ZlbmRvci90aWdodGVuY28vemlnZ3kvZGlzdC92dWUuZXMuanMnKSxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNTLFNBQVMsb0JBQW9CO0FBQ25VLE9BQU8sYUFBYTtBQUNwQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsUUFBUSwwQkFBMEI7QUFHM0MsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ0osT0FBTyxDQUFDLHlCQUF5QixxQkFBcUI7QUFBQSxNQUN0RCxTQUFTO0FBQUEsTUFDVCxVQUFVLEVBQUUsbUJBQW1CO0FBQUEsSUFFbkMsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLE1BQ0EsVUFBUztBQUFBLFFBQ0wsTUFBSztBQUFBLFFBQ0wsaUJBQWdCO0FBQUEsTUFDcEI7QUFBQSxJQUNKLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxNQUNILGVBQWU7QUFBQSxJQUNmLENBQUM7QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxPQUFPLEtBQUssUUFBUSx1Q0FBdUM7QUFBQSxJQUMvRDtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
