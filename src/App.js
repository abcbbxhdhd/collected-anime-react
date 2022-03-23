import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}/>
      <Route exact path="/animes" element={<ListPage />}/>
      <Route path="/animes/:animeId" element={<DetailPage />}/>
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
