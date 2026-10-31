// Regular function version
function GreetingRegular() {
  return <h2>Hello, React! (regular function)</h2>;
}

// Arrow function version
const Greeting = () => <h2>Hello, React! (arrow function)</h2>;

export default function Task1() {
  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>Task 1: ES6 Arrow Functions</h1>

      <h3>Regular function:</h3>
      <GreetingRegular />

      <h3>Arrow function:</h3>
      <Greeting />
    </main>
  );
}