import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Register from "./pages/Register/Register";
import NotesPage from "./pages/NotesPage/NotesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notespage" element={<NotesPage />} />
      </Routes>
    </div>
  );
}

export default App;
