import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { qrcode } from "vite-plugin-qrcode";
import htmlPurge from "vite-plugin-purgecss";

export default defineConfig({
  plugins: [react(), qrcode(), htmlPurge([htmlPurge()])],
});
