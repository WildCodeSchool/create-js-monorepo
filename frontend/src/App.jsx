import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="App overflow-hidden">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
