import { defineConfig } from "vite";
import genezioLocalSDKReload from "@genezio/vite-plugin-genezio";
import react from "@vitejs/plugin-react"; //removed swc

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), genezioLocalSDKReload()],
});
