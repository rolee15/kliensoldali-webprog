import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Home";
import Playlists from "./Playlists/Playlists";
import Tracks from "./Tracks";
import Search from "./Search";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<h1>Oops, nothing at this address</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
