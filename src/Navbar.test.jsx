import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "components/Navbar";
import { AuthProvider } from "context/context";

test("renders login", () => {
  render(
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </AuthProvider>
  );
  const loginLink = screen.getByTestId("loginButton");
  expect(loginLink).toHaveTextContent("Sign in");
});
