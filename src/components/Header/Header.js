import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCodeigniter size="3rem" /> <Span>Sadiel's Portoflio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link type="disabled" href="#about">
          <NavLink style={{ pointerEvents: "none" }}>
            <span style={{}}>Data Analytics</span>
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
