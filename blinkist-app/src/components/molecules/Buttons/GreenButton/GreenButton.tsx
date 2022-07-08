import { Button } from "@mui/material";
import React from "react";
interface ButtonProps {
  label: string;
  displayElement: React.CSSProperties;
  buttonBorderRadius: React.CSSProperties;
  onClickHandler: (arg1: any) => void;
}
function GreenButton(props: ButtonProps) {
  return (
    <Button
    variant="contained"
    color="secondary"
      sx={{
        border: "0.1px solid #DCE0DF",
        borderRadius: props.buttonBorderRadius,
        minWidth: "325px"
      }}
      onClick={props.onClickHandler}
    >
      {props.label}
    </Button>
  );
}
export default GreenButton;
