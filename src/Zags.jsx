import Button from "@mui/material/Button";

import AnimatedTextVariant from "./AnimatedTextVariant";

const weddingGoogleMapHref = "https://maps.app.goo.gl/gvumwFDCX5LpEwjs7";

function Zags() {
  const onClick = () => {
    window.open(weddingGoogleMapHref);
  };
  return (
    <div className="image-container zags-container">
      <div>Զագսի արարողություն</div>
      <AnimatedTextVariant text="17:30" animationType="letterByLetter" />
      <div>Villa Hills</div>
      <Button onClick={onClick} variant="outlined" color="grey">
        Քարտեզ
      </Button>
    </div>
  );
}

export default Zags;
