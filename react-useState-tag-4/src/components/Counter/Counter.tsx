import { useState } from "react";



const Counter = () => {
    const [counter, setCounter] = useState<number>(0)

    return ( 
        <div className="counter__container">
            <div className="number">{counter}</div>
            <button onClick={() => setCounter(counter + 1)} className="">Plus</button>
            <button onClick={() => setCounter(counter - 1)} className="">Minus</button>
            <button onClick={() => setCounter(counter * 0)} className="">Reset</button>
        </div>
     );
}
 
export default Counter;