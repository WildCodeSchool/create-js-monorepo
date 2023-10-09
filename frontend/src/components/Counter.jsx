import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <p>
      <button
        type="button"
        onClick={() => setCount((oldCount) => oldCount + 1)}
      >
        count is: {count}
      </button>
    </p>
  );
}
