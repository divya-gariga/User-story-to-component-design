import React from "react";
import { theme } from "../../../../Theme/Theme"
import { LinearProgress } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

interface ProgressBarProps {
  displayElement: React.CSSProperties;
  topHeight: React.CSSProperties;
  progressValue: number;
}

function LineProgressBar(props: ProgressBarProps) {
  return (
    <div >
      <ThemeProvider theme={theme}>
        <LinearProgress
          sx={{
            width: "282px",
            height: "15px",
            borderRadius: "0px 0px 8px 8px",
            display: props.displayElement,
            position: "relative",

          }}
          color="progressCompleted"
          variant="determinate"
          value={props.progressValue}
          data-testid="bar"
        />
      </ThemeProvider>
    </div>
  );
}
export default LineProgressBar;
