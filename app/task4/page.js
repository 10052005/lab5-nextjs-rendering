"use client";
import { useState } from "react";

export default function Task4() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>Task 4: ES6 Ternary Operator</h1>

      <h2>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h2>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login State
      </button>
    </main>
  );
}