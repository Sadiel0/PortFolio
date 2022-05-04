import React from "react";
import { DiFirebase, DiReact, DiZend, DiNodejsSmall } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>This are some of the technologies i have used...</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            JavaScript
            <br />
            ReactJS
            <br />
            HTML5/CSS3
            <br />
            BootStrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />

        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Express
            <br />
            Node.js <DiNodejsSmall size="3rem" />
            <br />
            MongoDB
            <br />
            Python
            <br />
            Flask
            <br />
            SQLAlchemy
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            BalSamiq
            <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
