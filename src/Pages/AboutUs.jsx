import React, { useState } from "react";
import { Grid } from "@chakra-ui/core";
import AboutUsPic from "../assets/about-us.jpg";

import Navbar from "../components/Navbar/Navbar";
import SideMenuNav from "../components/SideMenu/SideMenuNav";
import Hero from "../components/Hero";
import PlayBar from "../components/PlayBar";
import PlayerButton from "../components/PlayerButton/PlayerButton";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";

const AboutUs = () => {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <Grid
      templateColumns={{
        lg: "11rem 4fr",
        md: "1fr",
        base: "1fr",
      }}
      gridTemplateRows={{
        lg: "7vh 0.8fr 2fr",
        md: "7vh 0.8fr 3fr",
        base: "7vh 0.6fr 3fr",
      }}
      gap={{ md: "2", base: "0" }}
      width={{ xl: "90vw", md: "100%" }}
      mx="auto"
    >
      <Navbar bg={"gray.700"} gridColumn="1/4" gridRow="1/2" />
      <SideMenuNav bg={"gray.700"} gridColumn="1/2" gridRow="2/5" />
      <Hero
        image={AboutUsPic}
        gridColumn={{ lg: "2/4", md: "1/4", base: "1/4" }}
        gridRow="2/3"
        message={false}
        bgPos="50% 50%"
      />
      <AboutUsSection gridColumn="2/4" gridRow="3/4" />
      <PlayerButton onClick={() => setShowPlayer(!showPlayer)} />
      {showPlayer && (
        <PlayBar
          bg={"gray.700"}
          gridColumn="1/4"
          gridRow={{ md: "5/6", base: "6/7" }}
        />
      )}
    </Grid>
  );
};

export default AboutUs;
