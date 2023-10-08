import { Detail } from "./components/Detail";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Album } from "./components/Album";
import './style/style.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="detail/:id" element={<Detail />} />
        <Route path="login" element={<Login />} />
        <Route path="album" element={<Album />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
