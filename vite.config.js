import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://agrobridge-backend-totk.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            // Strip the origin header completely so the backend treats it like a direct server call
            proxyReq.removeHeader("origin");
          });
        },
      },
    },
  },
});
