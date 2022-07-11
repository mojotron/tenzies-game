import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ConfettiTracker = () => {
  const [widthTracker, setWidthTracker] = useState(window.innerWidth);

  useEffect(() => {
    const watchWidth = () => setWidthTracker(window.innerWidth);
    window.addEventListener("resize", watchWidth);
    return () => window.removeEventListener("resize", watchWidth);
  }, []);

  return (
    <section className="overlay">
      <Confetti width={widthTracker} />
    </section>
  );
};

export default ConfettiTracker;
