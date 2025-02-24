function App() {
    let fruit = "Apple";
    let count = 0;
    const handleFruit = () => {
        fruit = "Banana"
        console.log(fruit,count);
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