import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        ViteImageOptimizer({
            include: /\.(png|jpe?g|webp|svg|avif)$/i,
            exclude: /node_modules/,
            logStats: true,
            png: { compressionLevel: 9 },
            jpeg: { quality: 70, progressive: true },
            webp: { quality: 70 },
            avif: { quality: 50 }, 
            svg: {},
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
