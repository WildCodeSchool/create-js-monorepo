import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

function HomeContent() {
  const data = useLoaderData();
  return (
    <div className="hom-container">
      {data.map((el) => (
        <Card key={el.id} item={el} />
      ))}
    </div>
  );
}

export default HomeContent;
