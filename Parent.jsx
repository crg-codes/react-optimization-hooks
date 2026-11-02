import  { useState } from "react";
import Child from "./Child";

function Parent() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Parent Component</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child name="GUVI" />
    </div>
  );
}

export default Parent;