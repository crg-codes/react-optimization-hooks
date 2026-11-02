import  { useState } from "react";

function Child({ handleClick }) {
  console.log("Child Component Rendered");

  return (
    <button onClick={handleClick}>
      Click Child
    </button>
  );
}

function ParentWithoutCallBackHook() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child handleClick={handleClick} />
    </div>
  );
}

export default ParentWithoutCallBackHook;