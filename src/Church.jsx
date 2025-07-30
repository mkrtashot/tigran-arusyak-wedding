import Button from "@mui/material/Button";

import AnimatedTextVariant from "./AnimatedTextVariant";

const churchGoogleMapHref = "https://maps.app.goo.gl/FiskYow8pwERrD3bA";

function Church() {
  const onClick = () => {
    window.open(churchGoogleMapHref);
  };
  return (
    <div className="image-container church-container">
      <div>Պսակադրություն</div>
      <AnimatedTextVariant text="13:00" animationType="letterByLetter" />
      <div>ՍՈՒՐԲ ԳԱՅԱՆԵ ԵԿԵՂԵՑԻ</div>
      <Button onClick={onClick} variant="outlined" color="grey">
        Քարտեզ
      </Button>
    </div>
  );
}

export default Church;
