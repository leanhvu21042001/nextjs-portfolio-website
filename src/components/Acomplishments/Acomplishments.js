import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 1, text: "Open Source Projects" },
  { number: 5, text: "Students" },
  { number: 9, text: "Github Followers" },
  { number: 90, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map(({ number, text }, index) => (
        <Box key={`personal-acomplishments-${index}`}>
          <BoxNum>{number}</BoxNum>
          <BoxText>{text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
