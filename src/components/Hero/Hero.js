import React from "react";
import Emoji from "a11y-react-emoji/lib/Emoji";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Wave } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <Wave>👋</Wave> <br />I am genuinely happy <br />
        to have you here.
      </SectionTitle>
      <SectionText>
        I am a Full-Stack Software developer on a mission to create and inspire.
      </SectionText>
      <SectionText>
        <i style={{ fontWeight: "800" }}>
          "To be successful, you have to have your heart in your business and
          your business in your heart"
        </i>{" "}
        <br />
        -Thomas J. Watson
      </SectionText>
      <a href="#about">
        <Button href="#about">Learn More</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
