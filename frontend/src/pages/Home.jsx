import NavBar from "./components/NavBar";
export default function Home({ openModalToggle }) {
  return (
    <section className="flex justify-center">
       <NavBar />
      <div className="my-12">
        <button
          type="button"
          onClick={openModalToggle}
          className="w-[13dvw] p-3 bg-blue-500 text-white rounded-full"
        >
          Toggle Modal
        </button>
      </div>
    </section>
  );
}
