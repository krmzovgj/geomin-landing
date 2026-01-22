import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Header } from "./components/header.tsx";
import { GridPattern } from "./components/grid-pattern/index.tsx";
import { cn } from "./lib/utils.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <GridPattern
                width={35}
                height={35}
                strokeDasharray="2 6"
                className={cn(
                    "fixed inset-0 z-0 pointer-events-none",
                    "stroke-foreground/15 mask-[radial-gradient(1300px_circle_at_center,white,transparent)]",
                )}
            />
            <Header />
            <div
                id="home"
                className="relative tracking-tight pt-40 lg:pt-60w-screen "
            >
                <App />
            </div>
        </BrowserRouter>
    </StrictMode>,
);
