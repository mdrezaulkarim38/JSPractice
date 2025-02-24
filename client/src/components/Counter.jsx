import { useState } from "react";

const Counter = () => {
    const[count,setCounter]= useState(0);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button className="btn btn-info btn-sm" onClick={()=> setCounter(count + 1)}>Update Counter</button>
        </div>
    );
}

export default Counter;