// import React from "react";
import { AuthProvider } from "context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import Editor from "./pages/Editor";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import PageLayout from "components/PageLayout";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/editor" element={<Editor />} />
            <Route path="/editor/:slug" element={<Editor />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/profile/:username/favorites" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/:slug" element={<Article />} />
            <Route path="/" element={<ArticleList />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
