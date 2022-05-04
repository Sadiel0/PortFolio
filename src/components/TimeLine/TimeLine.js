import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
      <SectionTitle>About me</SectionTitle>
      <SectionText>
        Since a kid I always said I wanted to be a "Computer Engineer" but I
        didn't know what it meant or what they did, I just assumed they worked
        with computers and made a lot of money. After graduating HighSchool I
        started studying all types of things that I thought would be what I
        would make my career out of. I was lost, I felt empty I knew I wanted to
        be something else but I couldn't put my finger on it. Few months after I
        remembered my childhood dream and I started investigating coding
        BootCamps and courses that could teach me how to code. I finally started
        to get in the world of tech and I loved it so I started a BootCamp. The
        first months of studying were amazing but as the course went on I got so
        overwhelmed that it forced me to stop coding completely. Again lost and
        trying to find another career I was desperate to start studying
        something I love again. A couple of years later I solved a coding
        challenge for my girlfriend's college class and the feeling of tackling
        a coding problem came rushing back, and it was the best. That small
        challenge reminded me how fun it is to code and how rewarding it is to
        have a problem and break it down into pieces and solve it. That is
        something I did not have before, logical and technical thinking, and is
        something I have now. I have completed a Full-Stack Development
        BootCamp, graduated top of my class and I can say now that coding has
        taught me not just to talk to computers but to think, solve problems,
        and look at things from different perspectives. My goal now is to grow
        and learn enough to teach others.
      </SectionText>
    </Section>
  );
};

export default Timeline;
