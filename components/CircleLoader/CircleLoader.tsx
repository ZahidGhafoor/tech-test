import React from "react";
import { StyledBox } from ".";
import { CircularProgress } from "@mui/material";

export default function CircleLoader(props: any) {
  return (
    <StyledBox>
      <CircularProgress {...props} />
    </StyledBox>
  );
}
