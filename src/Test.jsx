import { useState, useMemo } from "react";

function Test() {

    const [number, setNumber] = useState(5);
    const [count, setCount] = useState(0);

    const squaredNumber = useMemo(() => {
        console.log("Calculating square...");

        return number * number;

    }, [number]);

    return (
        <div>
            <h2>useMemo Example</h2>

            <h3>Number: {number}</h3>
            <h3>Square: {squaredNumber}</h3>

            <button onClick={() => setNumber(number + 1)}>
                Change Number
            </button>

            <hr />

            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>

        </div>
    );
}

export default Test;