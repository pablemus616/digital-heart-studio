import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true, // Acepta conexiones desde cualquier dominio/IP
    port: 8080,
    strictPort: false,
    cors: true, // Habilita CORS para permitir solicitudes desde cualquier origen
  },
  preview: {
    host: true, // Acepta conexiones desde cualquier dominio/IP
    port: 8080,
    strictPort: false,
    cors: true, // Habilita CORS para permitir solicitudes desde cualquier origen
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
