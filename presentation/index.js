// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Fit,
  List,
  ListItem,
  Slide,
  Spectacle,
  Text,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import {
  theme,
} from "../assets";

const images = {
  black: require("../assets/bg-black.jpg"),
  orange: require("../assets/bg-orange.jpg"),
  white1: require("../assets/bg-white-1.jpg"),
  white2: require("../assets/bg-white-2.jpg"),
  caseyImage: require("../assets/casey-neistat.jpg"),
};

preloader(images);

const getImage = (image) => {
  if (image && images[image]) {
    return images[image].replace("/", "");
  }
  return images.orange.replace("/", "");
};

const Presentation = () => (
  <Spectacle theme={theme}>
    <Deck transition={["fade", "slide"]} transitionDuration={500}>

      {/*
        Story Is King
      */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={1} fit caps lineHeight={1} textColor="dark-primary">
          Story
        </Heading>
        <Heading size={2} italic caps textColor="dark-primary">
          Is King
        </Heading>
      </Slide>

      {/*
        Who Am I
      */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={2} caps textColor="primary">
          Ed Long
        </Heading>
        <Heading size={6} italic light textColor="dark-primary">
          Web Developer, NewSpring Church
        </Heading>
      </Slide>

      {/*
        A place that I find inspiration outside of my area of specialty is
      */}
      <Slide transition={[]} bgImage={getImage("caseyImage")}>
        <Heading size={1} fit caps textColor="light-primary">
          Casey Neistat
        </Heading>
      </Slide>

      {/*
        Casey Intro
      */}
      <Slide transition={[]} bgImage={getImage("black")}>
        <Fit>
          {/* 800 x 450 */}
          <video width="800" height="450" controls>
            <source src="https://dl.dropboxusercontent.com/u/79048150/CaseyIntro.mp4" type="video/mp4" />
          </video>

          {/*
            <iframe src="https://player.vimeo.com/video/186520152?autoplay=1&color=f89734&title=0&byline=0&portrait=0" width="800" height="450" frameBorder="0" allowFullScreen />
          */}
        </Fit>
      </Slide>

      {/*
        Setup The Video
      */}
      <Slide transition={[]} bgImage={getImage("black")}>
        <Heading size={1} fit caps textColor="light-primary">
          Why Casey?
        </Heading>
        <List textColor="light-primary" textFont="secondary">
          <Appear><ListItem>At our core we are all creators</ListItem></Appear>
          <Appear><ListItem>As creators we need inspiration</ListItem></Appear>
          <Appear><ListItem>We need inspiration from others working within and outside of our specialties</ListItem></Appear>
        </List>
      </Slide>

      {/*
        Story Is King Vlog
      */}
      <Slide transition={[]} bgImage={getImage("black")}>
        {/* 800 x 450 */}
        <video width="800" height="450" controls>
          <source src="https://dl.dropboxusercontent.com/u/79048150/Story-Is-King.mp4" type="video/mp4" />
        </video>
        {/*
          <iframe src="https://player.vimeo.com/video/186520151?autoplay=1&color=f89734&title=0&byline=0&portrait=0" width="800" height="450" frameBorder="0" allowFullScreen />
        */}
      </Slide>

      {/*
        Segway out of video
      */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Casey's A Filmmaker.
        </Heading>
        <Heading size={1} caps fit textColor="dark-primary">
          What Does This Mean For Me?
        </Heading>
      </Slide>

      {/*
        We need to stay current in our industry but we can't build in all the things
      */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          FOMO
        </Heading>
        <Heading size={1} caps fit textColor="dark-primary">
          (Fear of missing out on frameworks/tools)
        </Heading>
      </Slide>

      {/*
        The framework / tools are a supporting role to the story.
        The ministries that we serve have big vision and we need to help them be able to translate that vision to people on the web.
      */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={1} caps fit textColor="dark-primary">
          Frameworks & Tools
        </Heading>
        <Heading size={4} fit textColor="dark-primary">
          Need to play a supporting role in helping facilitate telling the story, but they should not dictate the story.
        </Heading>
      </Slide>

      {/*
        This brings us back to the fact that the story is king, but why is that so important
      */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={1} caps lineHeight={1} textColor="primary">
          Why is the story so important?
        </Heading>
      </Slide>

      {/*
        Greatest story
      */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={3} lineHeight={1.25} textColor="dark-primary">
          We've got the corner on the greatest story ever told.
        </Heading>
      </Slide>

      {/*
        That story is the Gospel
      */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Gospel
        </Heading>
        <Heading fit size={3} lineHeight={1.25} textColor="dark-primary">
          It's the one story where people can find life, lasting hope, and a real purpose.
        </Heading>
      </Slide>

      {/*
        The most amazing part is
      */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={4} lineHeight={1.25} textColor="dark-primary">
          We've been gifted to be able to leverage a platform that's always evolving, and is always available to share this message of hope within the most desperate situations.
        </Heading>
      </Slide>

      {/* You see life is messy */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={1} caps fit textColor="primary">
          Life is messy
        </Heading>
        <Appear>
          <Text fit lineHeight={2}>
            The divorce, the affair, the suicide attempt, the miscarriage.
          </Text>
        </Appear>
        <Appear>
          <Text fit lineHeight={2}>
            These don't always happen between 9am & 5pm Sunday through Thursday.
          </Text>
        </Appear>
      </Slide>

      {/* 
        We ask google, or our virual assistants about everything these days.
        So let me ask you this, what if the church was ranked #1 on a google result for:
      */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={1} caps fit textColor="primary">
          Miscarriage
        </Heading>
      </Slide>

      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={3} caps textColor="primary">
          How do I tell my kids we're getting divorced
        </Heading>
      </Slide>

      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={1} caps fit textColor="primary">
          How to commit suicide
        </Heading>
      </Slide>

      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={1} caps fit textColor="primary">
          Where do I get an abortion
        </Heading>
      </Slide>

      {/*
        And when they get to our site
      */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Text textColor="dark-primary">
          We were able to tell the story in a concise, and compelling manner.
        </Text>
      </Slide>

      {/*
        If your like me and you came from an agency background you might be thinking...
        That sounds like it could be a marketing site.
        Yes, but here's the difference.  We have the opportunity to tell that story...
      */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Text textColor="dark-primary">
          In a way that speaks life, hope, and healing, into the person visiting our site.
        </Text>
      </Slide>

      {/*
        And from that place, they can then bring that same hope, and healing to others.
        So I want you guys to leave here knowing that as a team here at NewSpring we want to help serve you.
        We build all of our platforms in the open, and we'd love to help encourage, and or equip your team
      */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading fit size={1} textColor="primary">
          github.com/newspring
        </Heading>
        <Heading size={5} textColor="dark-primary">
          @newspringweb
        </Heading>
      </Slide>

    </Deck>
  </Spectacle>
);

export default Presentation;
