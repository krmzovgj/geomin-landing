import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";

function App({lang}: {lang: "mk" | "en"}) {
    
    return (
        <Routes>
            <Route path="/" element={<Home lang={lang} />} />
        </Routes>
    );
}

export default App;
