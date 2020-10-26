import React, { useState } from "react";
import { Grid } from "@chakra-ui/core";

import Navbar from "../components/Navbar/Navbar";
import SideMenuNav from "../components/SideMenu/SideMenuNav";
import PlayBar from "../components/PlayBar";
import PlayerButton from "../components/PlayerButton/PlayerButton";
import TracksSection from "../components/TracksSection/TracksSection";
import FilterTracks from "../components/FilterTracks/FilterTracks";

const AboutUs = () => {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <Grid
      templateColumns={{
        xl: "11rem 4fr 0.7fr",
        lg: "11rem 4fr 0.8fr",
        md: "4fr 1fr",
        base: "4fr 1.5fr",
      }}
      gridTemplateRows={{
        lg: "7vh 2fr",
        md: "7vh 3fr",
        base: "7vh 3fr",
      }}
      gap={{ md: "2", base: "0" }}
      width={{ xl: "90vw", md: "100%" }}
      mx="auto"
    >
      <Navbar bg={"gray.700"} gridColumn="1/4" gridRow="1/2" />
      <SideMenuNav bg={"gray.700"} gridColumn="1/2" gridRow="2/5" />
      <TracksSection
        bg={"gray.700"}
        gridColumn={{ lg: "2/3", md: "1/2", base: "1/2" }}
        gridRow="2/3"
      />
      <FilterTracks
        gridColumn={{ lg: "3/4", md: "2/4", base: "2/4" }}
        gridRow="2/3"
        bg="gray.700"
      />
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
