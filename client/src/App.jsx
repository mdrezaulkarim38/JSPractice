import { useState } from "react";
function App() {
    const [fruit, setFruit] = useState("Apple");
    const handleFruit = () => {
        fruit == "Apple" ? setFruit("Banana") : setFruit("Apple");
    }
    return (
        <div className="container">
            <h1>State in React Js</h1>
            <h1>{fruit}</h1>
            <button className="btn btn-primary" onClick={handleFruit}>Change Fruit name</button>
        </div>
    );
}

export default App;