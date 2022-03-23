import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
const Footer = () => {
  return (
    <Section>
      <SectionTitle>Contact me!</SectionTitle>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:786-394-3860">786-395-3860</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:sadielalmanza@outlook.com">
              Sadielalmanza@outlook.com
            </LinkItem>
          </LinkColumn>
        </LinkList>

        <SocialIconsContainer>
          <Slogan>Innovation one project at a time</Slogan>
          <SocialContainer>
            <SocialIcons
              target="a_blank"
              href="https://github.com/Sadiel0?tab=repositories"
            >
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons
              target="a_blank"
              href="https://www.linkedin.com/in/sadiel-almanza-205074197/"
            >
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
