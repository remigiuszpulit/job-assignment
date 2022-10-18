import React, { Suspense } from "react";
import { AuthProvider } from "context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./pages/ArticleList";
import PageLayout from "components/PageLayout";
import Loader from "components/loader/Loader";
const Article = React.lazy(() => import("./pages/Article"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Editor = React.lazy(() => import("./pages/Editor"));
const Login = React.lazy(() => import("./pages/Login"));
const Settings = React.lazy(() => import("./pages/Settings"));
const Logout = React.lazy(() => import("./pages/Logout"));
const Register = React.lazy(() => import("./pages/Register"));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route
              path="/editor"
              element={
                <Suspense fallback={<Loader />}>
                  <Editor />
                </Suspense>
              }
            />
            <Route
              path="/editor/:slug"
              element={
                <Suspense fallback={<Loader />}>
                  <Editor />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<Loader />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="/logout"
              element={
                <Suspense fallback={<Loader />}>
                  <Logout />
                </Suspense>
              }
            />
            <Route
              path="/profile/:username"
              element={
                <Suspense fallback={<Loader />}>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path="/profile/:username/favorites"
              element={
                <Suspense fallback={<Loader />}>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path="/register"
              element={
                <Suspense fallback={<Loader />}>
                  <Register />
                </Suspense>
              }
            />
            <Route
              path="/settings"
              element={
                <Suspense fallback={<Loader />}>
                  <Settings />
                </Suspense>
              }
            />
            <Route
              path="/:slug"
              element={
                <Suspense fallback={<Loader />}>
                  <Article />
                </Suspense>
              }
            />
            <Route path="/" element={<ArticleList />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
