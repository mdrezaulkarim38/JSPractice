import { useState } from "react";

function App() {
    const [display, setDisplay] = useState(false);
    return (
        <div>
            <h1>Toggle in React js</h1>
            {
                display ? <h1>Superman</h1> : <h1>No User Name</h1>
            }
            <button onClick={()=> setDisplay(!display)}>Toggle</button>
        </div>
    );
}

export default App;