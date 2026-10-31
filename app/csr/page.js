"use client";
import { useEffect, useState } from "react";

export default function CSRPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadedAt, setLoadedAt] = useState("");

  // useEffect runs in the browser after the page loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoadedAt(new Date().toLocaleTimeString());
        setLoading(false);
      });
  }, []);

  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>CSR: Client-Side Rendering</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p><b>Data loaded in browser at:</b> {loadedAt}</p>
          <ul>
            {posts.map((p) => (
              <li key={p.id}>{p.title}</li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}