import { useState } from "react";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeqViOgXhdYb99zLVRfN7CJfK8FwedxI3bfZqrxwdBpnrtWAg/formResponse";

function Form({ setAccepted }) {
  const [formData, setFormData] = useState({
    name: "",
    count: "",
    isAccepted: false,
    isDeclined: false,
  });
  const onClick = () => {
    if (formData.name && (formData.isAccepted || formData.isDeclined)) {
      const googleFormData = new FormData();
      googleFormData.append("entry.1901673953", formData.name);
      googleFormData.append("entry.293808420", formData.count);
      googleFormData.append(
        "entry.90553502",
        formData.agreement ? "Yes" : "No"
      );

      setAccepted(formData.isAccepted);
      setFormData({
        name: "",
        count: "",
        isAccepted: false,
        isDeclined: false,
      });
      fetch(formUrl, {
        method: "POST",
        body: googleFormData,
        mode: "no-cors",
      }).catch((error) => {
        alert("Error submitting form");
        console.error("Error:", error);
      });
    }
  };
  const onNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };
  const onCountChange = (e) => {
    setFormData({ ...formData, count: e.target.value });
  };
  const onAgreeChange = () => {
    setFormData({ ...formData, isAccepted: true, isDeclined: false });
  };
  const onDisagreeChange = () => {
    setFormData({ ...formData, isAccepted: false, isDeclined: true });
  };
  return (
    <div className="form-container">
      <div>Խնդրում ենք հաստատել Ձեր մասնակցությունը հարսանիքին</div>
      <TextField
        id="standard-basic"
        label="Անուն, Ազգանուն"
        variant="standard"
        value={formData.name}
        onChange={onNameChange}
      />
      <TextField
        id="standard-basic"
        label="Հյուրերի քանակ"
        variant="standard"
        type="number"
        value={formData.count}
        onChange={onCountChange}
      />
      <div className="checkbox-container">
        <FormControlLabel
          control={<Checkbox checked={formData.isAccepted} />}
          label="Իհարկե, սիրով կգամ"
          onClick={onAgreeChange}
          id="agree"
        />
        <FormControlLabel
          control={<Checkbox checked={formData.isDeclined} />}
          label="Ցավոք, չեմ կարողանա գալ"
          onClick={onDisagreeChange}
          id="disagree"
        />
      </div>
      <Button onClick={onClick} variant="outlined" color="grey">
        Ուղարկել
      </Button>
    </div>
  );
}

export default Form;
