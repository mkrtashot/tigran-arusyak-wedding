import { useState } from "react";
import Button from "@mui/material/Button";
import "./App.css";

import Invitation from "./Invitation";
import InvitationText from "./InvitationText";
import AnimatedTextVariant from "./AnimatedTextVariant";
import Church from "./Church";
import Wedding from "./Wedding";
import Form from "./Form";
import Result from "./Result";
import Zags from "./Zags";

function App() {
  const [viewInvitation, setViewInvitation] = useState(false);
  const [accepted, setAccepted] = useState(undefined);
  return (
    <>
      {accepted === undefined && (
        <>
          <div className="first-container">
            <div className="Dzeragir title">
              <div>ՏԻԳՐԱՆ</div>
              <div>ԵՎ</div>
              <div>ԱՐՈՒՍՅԱԿ</div>
            </div>
            {/* <div>Հարսանյաց հրավեր</div> */}
            {viewInvitation ? (
              <Invitation />
            ) : (
              <div className="invitation-button">
                <Button
                  onClick={() => {
                    setViewInvitation(true);
                  }}
                  variant="outlined"
                  color="grey"
                >
                  Դիտել հրավերը
                </Button>
              </div>
            )}
          </div>
          {viewInvitation && (
            <>
              <InvitationText />
              <AnimatedTextVariant
                text="Ծրագիր"
                animationType="letterByLetter"
              />
              <Church />
              <Zags />
              <Wedding />
              <Form setAccepted={setAccepted} />
            </>
          )}
        </>
      )}
      {accepted !== undefined && <Result accepted={accepted} />}
    </>
  );
}

export default App;
