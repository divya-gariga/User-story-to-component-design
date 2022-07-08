import { Button } from "@mui/material";
import React from "react";
interface ButtonProps {
  label: string;
  displayElement: React.CSSProperties;
  buttonBorderRadius: React.CSSProperties;
  onClickHandler: (arg1: any) => void;
}
function Primary(props: ButtonProps) {
  return (
    <Button
      sx={{
        border: "0.1px solid #DCE0DF",
        borderRadius: props.buttonBorderRadius,
        width: "282px",
        ":hover": { backgroundColor: "#0365F2", color: "white" },
        textTransform: "capitalize",
        display: props.displayElement,
        height: "52px"
      }}
      onClick={props.onClickHandler}
    >
      {props.label}
    </Button>
  );
}
export default Primary;
