import { useState, useEffect } from "react";

import { calculateTimeLeft } from "./helpers/componentHelpers";

function CountDown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div>
        <div>{timeLeft.days}</div>
        <div>Օր</div>
      </div>
      <div>
        <div>{timeLeft.hours}</div>
        <div>Ժամ</div>
      </div>
      <div>
        <div>{timeLeft.minutes}</div>
        <div>Րոպե</div>
      </div>
      <div>
        <div>{timeLeft.seconds}</div>
        <div>Վայրկյան</div>
      </div>
    </div>
  );
}

export default CountDown;
