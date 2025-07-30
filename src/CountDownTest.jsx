import { Box, Zoom } from "@mui/material";

import useScrollAnimation from "./hooks/useScrollAnimation";
import useCountdown from "./hooks/useCountDown";

function CountDownTest({ targetDate }) {
  const [countdownRef, isVisible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  const timeLeft = useCountdown(targetDate);

  return (
    <Box ref={countdownRef} sx={{ py: 6 }}>
      {/* Countdown Cards */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(30px, 1fr))"
        gap={2}
        maxWidth="600px"
        mx="auto"
        marginBottom="60px"
      >
        {[
          { value: timeLeft.days, label: "Օր", color: "#e3f2fd" },
          { value: timeLeft.hours, label: "Ժամ", color: "#f3e5f5" },
          { value: timeLeft.minutes, label: "Րոպե", color: "#e8f5e8" },
          { value: timeLeft.seconds, label: "Վայրկյան", color: "#fff3e0" },
        ].map((item, index) => (
          <Zoom
            key={item.label}
            in={isVisible}
            timeout={800}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div>
              <div>{item.value}</div>
              <div>{item.label}</div>
            </div>
          </Zoom>
        ))}
      </Box>
    </Box>
  );
}

export default CountDownTest;
