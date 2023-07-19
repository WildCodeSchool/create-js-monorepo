import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home/Home";
import "./App.css";
import Register from "./pages/Register/Register";
import NotesPage from "./pages/Notes/NotesPage";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notespage" element={<NotesPage />} />
      </Routes>
      <ToastContainer limit={1} />
    </div>
  );
}

export default App;
