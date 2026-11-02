import  {
  useState,
  useCallback
} from "react";

import Child from "./Child";

function Parent() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

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

export default Parent;