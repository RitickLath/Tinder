import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Feed from "./pages/Feed";
import Matches from "./pages/Matches";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Welcome />} />
        <Route element={<Layout />}>
          <Route path="/app/recs" element={<Feed />} />
          <Route path="/app/matches" element={<Matches />} />
          <Route path="/app/explore" element={<Explore />} />
          <Route path="/app/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
