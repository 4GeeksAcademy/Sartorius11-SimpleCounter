import React, { useEffect, useState } from "react";

export const Contador = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []); 

  return (
    <div className="text-bg-danger col-12 m-5"style={{ height: "400px", fontSize: "300px", textAlign: "center" }}>
      {count}
    </div>
  );
};
