export default function Task3() {
  // Object destructuring
  const user = { name: "mehri", age: 21 };
  const { name, age } = user;

  // Array destructuring
  const colors = ["Red", "Green", "Blue"];
  const [first, second, third] = colors;

  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>Task 3: ES6 Destructuring</h1>

      <h3>Object destructuring:</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <h3>Array destructuring:</h3>
      <p>First: {first}</p>
      <p>Second: {second}</p>
      <p>Third: {third}</p>
    </main>
  );
}