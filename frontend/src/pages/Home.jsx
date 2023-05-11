import React, { useEffect, useState } from "react";

function Home() {
  const [Events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.seatgeek.com/2/events?client_id=MzM1ODcyMTh8MTY4Mzc5NzY5MC41MDE4NQ`
    )
      .then((res) => res.json())
      .then((events) => setEvents(events))
      .catch((err) => console.error(err));
  }, []);

  return <div>{Events}</div>;
}

export default Home;
