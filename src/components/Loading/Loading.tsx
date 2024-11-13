import { useState, useEffect, FC } from "react";
import './Loading.css'

const Loading: FC<{isSmal?: boolean}> = ({ isSmal }) => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => (prevDots + 1) % 4);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if(isSmal) return (
    <div className="loading" style={{height: 'auto', width: 'auto'}}>
      <div className="dots">
        {Array.from({ length: dots }).map((_, i) => (
          <div key={i} className="dot"></div>
        ))}
      </div>
    </div>
  )
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