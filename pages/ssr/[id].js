export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  // Show a 404 page if the post does not exist (e.g. /ssr/999)
  if (!data.id) {
    return { notFound: true };
  }

  return {
    props: {
      post: data,
      renderedAt: new Date().toLocaleTimeString(),
    },
  };
}

export default function SSRPost({ post, renderedAt }) {
  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>SSR: Dynamic Post Page</h1>
      <p><b>Post ID:</b> {post.id}</p>
      <p><b>Rendered on server at:</b> {renderedAt}</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </main>
  );
}