import "./App.css";
import Header from "./components/Header";
import Login,{ Profile} from "./components/UserComponent";
function App() {
  return (
    <div>
      <Header />
      <h2>First component</h2>
      <Login />
      <Profile />
    </div>
  );
}

export default App;
