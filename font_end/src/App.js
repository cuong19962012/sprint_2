import { Detail } from "./components/Detail";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Album } from "./components/Album";
import './style/style.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AlbumList } from "./components/AlbumList";
import { ListSong } from "./components/ListSong";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    window.localStorage.getItem('username') ? setUser(true) : setUser(false);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/song/:id" element={<Detail />} />
          <Route path="/song/search/:songName" element={<ListSong />} />
          <Route path="/login" element={<Login />} />
          {
            user &&
            <>
              <Route path="/album" element={<AlbumList />} />
              <Route path="/album/:id" element={<Album />} />
            </>
          }
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
