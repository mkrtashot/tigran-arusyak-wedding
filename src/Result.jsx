import confetti from "canvas-confetti";

function Result({ accepted }) {
  if (accepted) {
    const duration = 1 * 1000;
    const animationEnd = Date.now() + duration;

    const colors = ["#ffffff"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: Math.random() * 360,
        spread: 60,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.6,
        },
        colors,
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    })();
  }
  const text = accepted
    ? "Սիրով կսպասենք Ձեզ"
    : "Շատ ափսոս, որ չեք կարող ներկա գտնվել";
  return <div className="result-container vrdznagir">{text}</div>;
}

export default Result;
