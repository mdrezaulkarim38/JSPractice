function App() {
    let fruit = "Apple";
    const handleFruit = () => {
        fruit = "Banana"
        console.log(fruit);
    }
    return (
        <div>
            <h1>State in React Js</h1>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change Fruit name</button>
        </div>
    );
}

export default App;