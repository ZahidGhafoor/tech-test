import { Box } from "@mui/material";
import styled from "styled-components";
export { default } from "./CircleLoader";

export const StyledBox = styled(Box)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 9999;
  backdrop-filter: blur(2px);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
