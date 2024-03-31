import { Outlet } from "react-router-dom";
// import Footer from "./components/Footer";

import "./App.css";

// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="main_body">
      {/* <Navbar /> */}
      <div className="content">
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
