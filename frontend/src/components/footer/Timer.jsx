import React, { useEffect } from "react";
import Countdown from "react-countdown-now";

function Timer({ deadline }) {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const targetDate = new Date(deadline);
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    // Le concours est terminé
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer">
      <p>Temps restant pour participer:</p>
      <Countdown
        date={deadline}
        renderer={({ days, hours, minutes, seconds }) => (
          <span>
            {days} jours {hours}h {minutes}min {seconds}sec
          </span>
        )}
      />
    </div>
  );
}

export default Timer;
