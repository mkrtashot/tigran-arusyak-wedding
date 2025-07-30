import useScrollAnimation from "./hooks/useScrollAnimation";
import {
  Box,
  Typography,
  Fade,
  Slide,
  Zoom,
  Grow,
  useTheme,
} from "@mui/material";

function AnimatedTextVariant({ text, animationType }) {
  const theme = useTheme();
  const [textRef, isVisible] = useScrollAnimation({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <Box sx={{ py: 6, textAlign: "center" }} ref={textRef}>
      {animationType === "fade" && (
        <Fade in={isVisible} timeout={1500}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {text}
          </Typography>
        </Fade>
      )}

      {animationType === "slideUp" && (
        <Slide direction="up" in={isVisible} timeout={1200}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              textShadow: `0 4px 8px ${theme.palette.primary.main}30`,
            }}
          >
            {text}
          </Typography>
        </Slide>
      )}

      {animationType === "scale" && (
        <Zoom in={isVisible} timeout={1000}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.secondary.main,
              textShadow: `0 0 20px ${theme.palette.secondary.main}50`,
            }}
          >
            {text}
          </Typography>
        </Zoom>
      )}

      {animationType === "letterByLetter" && (
        <Box sx={{ overflow: "hidden" }}>
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontWeight: 700,
              // color: theme.palette.success.main,
              display: "inline-flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {text.split("").map((letter, index) => (
              <Grow
                key={index}
                in={isVisible}
                timeout={800}
                style={{ transitionDelay: `${index * 100}ms`, fontSize: 30 }}
              >
                <Box component="span" sx={{ display: "inline-block" }}>
                  {letter === " " ? "\u00A0" : letter}
                </Box>
              </Grow>
            ))}
          </Typography>
        </Box>
      )}

      {animationType === "typewriter" && (
        <TypewriterText text={text} isVisible={isVisible} />
      )}
    </Box>
  );
}

export default AnimatedTextVariant;
