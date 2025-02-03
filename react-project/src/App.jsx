import "./App.css";
import Header from "./Header";
import Login,{ Profile} from "./UserComponent";
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
