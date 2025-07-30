import Button from "@mui/material/Button";

import AnimatedTextVariant from "./AnimatedTextVariant";

const weddingGoogleMapHref = "https://maps.app.goo.gl/gvumwFDCX5LpEwjs7";

function Wedding() {
  const onClick = () => {
    window.open(weddingGoogleMapHref);
  };
  return (
    <div className="image-container wedding-container">
      <div>Հարսանյաց խնջույք</div>
      <AnimatedTextVariant text="18:00" animationType="letterByLetter" />
      <div>Villa Hills</div>
      <Button onClick={onClick} variant="outlined" color="grey">
        Քարտեզ
      </Button>
    </div>
  );
}

export default Wedding;
