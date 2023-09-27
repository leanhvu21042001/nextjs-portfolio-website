import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of me is to help aspiring and established developers to take
        their development skills to the next level and build awesome apps
      </SectionText>
      <Button>Contact</Button>
    </LeftSection>
  </Section>
);

export default Hero;
