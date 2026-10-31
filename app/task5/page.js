"use client";
import { useState } from "react";

export default function Task5() {
  // Copy an array using the spread operator
  const numbers = [1, 2, 3];
  const newNumbers = [...numbers, 4, 5];

  // Update state using the spread operator
  const [list, setList] = useState([1, 2, 3]);
  const addNumber = () => setList([...list, list.length + 1]);

  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>Task 5: ES6 Spread Operator</h1>

      <h3>Copying an array:</h3>
      <p>Original array: {numbers.join(", ")}</p>
      <p>New array (with spread): {newNumbers.join(", ")}</p>

      <h3>Updating state:</h3>
      <p>State list: {list.join(", ")}</p>
      <button onClick={addNumber}>Add Number to State</button>
    </main>
  );
}