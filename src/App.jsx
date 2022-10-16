// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import Editor from "./pages/Editor";
import LoginRegister from "./pages/LoginRegister";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/editor" element={<Editor />} />
        <Route path="/editor/:slug" element={<Editor />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/profile/:username/favorites" element={<Profile />} />
        <Route path="/register" element={<LoginRegister />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/:slug" element={<Article />} />
        <Route path="/" element={<ArticleList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
