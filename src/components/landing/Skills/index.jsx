import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/skills.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img
          src={dev}
          alt="I’m Devansh and I’m a Frontend Web engineer and Finance Enthusiast"
        />
      </Thumbnail>
      <Details>
        <h1>About</h1>
        <p>
          I am a hardworking and ambitious individual with a great passion for
          Computer Science. I am currently in my first year at BITS Pilani, Rajasthan,
          India seeking undergraduate education in Engineering and Science. I am seeing a
          part-time position in the industry in which I can put into practice my
          knowledge and experience, ultimately benefiting the operations of the
          organisation that I work for.
        </p>
        <Button as={AnchorLink} href="#contact">
          Get in Touch
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
