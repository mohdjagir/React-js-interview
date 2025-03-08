import React, { useState, useMemo, useCallback } from "react";
import './Counter.css';

const ChildComponent = React.memo(({ handleClick }) => {
    return (
        <div>
            <p>child component</p>
            <button onClick={handleClick}>Click Me</button>
            {console.log("child")}
        </div>
    )

});

export const Counter = ({ }) => {
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(0);
    const cubeNumber = (value) => {
        console.log(value)
        return Math.pow(value, 3)
    }
    const power = useMemo(() => cubeNumber(value), [value]);


    const handleClick = useCallback(() => {
        setValue((prev) => prev + 1)
    }, [])

    return (
        <div className="container">

            <button onClick={() => setCounter(counter + 1)}>+</button>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <input name="user" onChange={(e) => setValue(e.target.value)} value={value} />
            <p>Power: {power}</p>
            <ChildComponent handleClick={handleClick} />
        </div>
    );
}