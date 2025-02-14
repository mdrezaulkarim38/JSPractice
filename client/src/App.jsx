import ClockHeading from "./components/ClockHeading.jsx";
import ClockSlogan from "./components/ClockSlogan.jsx";
import CurrentTime from "./components/CurrentTime.jsx";

function App() {
    return (
        <center className="container-fluid">
            <ClockHeading />
            <ClockSlogan />
            <CurrentTime />
        </center>
    );
}

export default App;