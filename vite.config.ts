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
            // Optional: pass specific config here
            include: /\.(png|jpe?g|webp|svg|avif)$/i,
            exclude: /node_modules/,
            logStats: true,
            // Additional options for each file type if needed
            png: { compressionLevel: 9 },
            jpg: { quality: 60, progressive: true },
            jpeg: { quality: 75 },  
            webp: { quality: 80 },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
