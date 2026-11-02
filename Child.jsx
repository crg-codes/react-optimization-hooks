import React from "react";


function Child({ name }) {

  console.log("Child Component Rendered");

  return (
    <div>
      <h3>Hello {name}</h3>
    </div>
  );
}

export default React.memo(Child);