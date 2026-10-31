export const dynamic = "force-dynamic"; // render on every request

export default async function SSRPage() {
  // cache: "no-store" means the data is fetched fresh on every request
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
    cache: "no-store",
  });
  const posts = await res.json();
  const renderedAt = new Date().toLocaleTimeString();

  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>SSR: Server-Side Rendering</h1>
      <p><b>Page rendered at (request time):</b> {renderedAt}</p>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </main>
  );
}