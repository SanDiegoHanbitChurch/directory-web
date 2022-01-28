import React from "react";
import { Box } from "@material-ui/core";
import BackButton from "./backButton";
import NextButton from "./nextButton";

type Props = {
  onNextMembers: () => void;
  onBackMembers: () => void;
  offset: number;
};

// eslint-disable-next-line no-unused-vars
const PagesContainer = ({ onNextMembers, onBackMembers, offset }: Props) => (
  <Box display="flex" flexDirection="row" justifyContent="space-between">
    {offset >= 25 && <BackButton onClick={onBackMembers} />}
    <Box></Box>
    <NextButton onClick={onNextMembers} />
  </Box>
);

export default PagesContainer;
