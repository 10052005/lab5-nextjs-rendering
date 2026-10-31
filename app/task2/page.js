// const: declared outside, cannot be reassigned
const title = "React ES6 Lab";

export default function Task2() {
  // let: can be reassigned
  let message = "Initial message";
  message = "Message changed using let";

  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>Task 2: ES6 Variables (let, const)</h1>

      <h3>Using const:</h3>
      <h2>{title}</h2>

      <h3>Using let:</h3>
      <p>{message}</p>
    </main>
  );
}