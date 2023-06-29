import HomePage from "../components/HomePage";

/* eslint-disable react/prop-types */
import NavBar from "../components/NavBar";
// ({ openModalToggle });
export default function Home({ openModalToggle }) {
  return (
    <div>
      <NavBar />
      <HomePage openModalToggle={openModalToggle} />
    </div>
  );
}
