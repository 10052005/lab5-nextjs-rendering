export default async function SSGPage() {
  // cache: "force-cache" means the data is fetched once at build time and reused
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
    cache: "force-cache",
  });
  const posts = await res.json();
  const builtAt = new Date().toLocaleTimeString();

  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>SSG: Static Site Generation</h1>
      <p><b>Page generated at (build time):</b> {builtAt}</p>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </main>
  );
}