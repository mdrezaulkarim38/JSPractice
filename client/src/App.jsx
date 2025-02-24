import { useState } from "react";
import Counter from "./components/Counter";
function App() {
    const [fruit, setFruit] = useState("Apple");
    const handleFruit = () => {
        fruit == "Apple" ? setFruit("Banana") : setFruit("Apple");
    }
    return (
        <div className="container">
            <h1>State in React Js</h1>
            <h1>{fruit}</h1>
            <button className="btn btn-primary btn-sm" onClick={handleFruit}>Change Fruit name</button>

            <Counter />
        </div>
    );
}

export default App;