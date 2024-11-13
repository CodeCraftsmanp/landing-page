import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Join from "../Screens/Join/Join";
import MainHome from "../Screens/MainHome/MainHome";
import EmbedVideo from '../Screens/EmbedVideo';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/join" element={<Join />} />
        <Route path="/youtube_video" element={<EmbedVideo />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
