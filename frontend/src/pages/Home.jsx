import HomePage from "../components/HomePage";

/* eslint-disable react/prop-types */

export default function Home({ openModalToggle }) {
  return (
    <div>
      <HomePage openModalToggle={openModalToggle} />
    </div>
  );
}
