import { useState, useEffect } from "react";
import './Loading.css'

const Loading = () => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => (prevDots + 1) % 4);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading">
      <div className="dots">
        {Array.from({ length: dots }).map((_, i) => (
          <div key={i} className="dot"></div>
        ))}
      </div>
    </div>
  );
};

export default Loading