import React, { useState } from "react";
import { Button, Grid, Icon } from "@chakra-ui/core";
import {
  featuredReleases,
  ourSelection,
} from "../components/Releases/releasesData";
import { GiSoundWaves } from "react-icons/gi";

import Navbar from "../components/Navbar/Navbar";
import SideMenuNav from "../components/SideMenu/SideMenuNav";
import Hero from "../components/Hero";
import Releases from "../components/Releases/Releases";
import TopTenSection from "../components/TopTenSection/TopTenSection";
import PlayBar from "../components/PlayBar";

const HomePage2 = () => {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <Grid
      templateColumns={{
        lg: "11rem 4fr 1fr",
        md: "1fr 4fr",
        base: "1fr 1fr",
      }}
      gridTemplateRows={{
        lg: "7vh 0.8fr 2fr 2fr",
        md: "0.2fr 1fr 2fr 2fr",
        base: "0.1fr 0.3fr 2fr 0.8fr 2fr",
      }}
      gap={{ md: "2", base: "0" }}
      width={{ xl: "90vw", md: "100%" }}
      mx="auto"
    >
      <Navbar bg={"gray.700"} gridColumn="1/4" gridRow="1/2" />
      <SideMenuNav bg={"gray.700"} gridColumn="1/2" gridRow="2/5" />
      <Hero gridColumn={{ lg: "2/4", md: "1/4", base: "1/3" }} gridRow="2/3" />
      <Releases
        bg={"gray.700"}
        data={featuredReleases}
        title="Featured Tracks"
        gridColumn={{ lg: "2/3", md: "1/3", base: "1/3" }}
        gridRow="3/4"
      />
      <Releases
        bg={"gray.700"}
        data={ourSelection}
        title="Our Selection"
        gridColumn={{ lg: "2/3", md: "1/3", base: "1/3" }}
        gridRow={{ md: "4/5", base: "5/6" }}
      />
      <TopTenSection
        bg={"gray.700"}
        title="Top 10 House Artists"
        gridColumn={{ md: "3/4", base: "1/2" }}
        gridRow={{ md: "3/4", base: "4/5" }}
      />
      <TopTenSection
        bg={"gray.700"}
        title="Top 10 Techno Artists"
        gridColumn={{ md: "3/4", base: "2/3" }}
        gridRow={{ md: "4/5", base: "4/5" }}
      />
      <Button
        size={{ md: "md", base: "sm" }}
        colorScheme="yellow"
        position="fixed"
        bottom="1rem"
        right="1rem"
        zIndex="20"
        onClick={() => setShowPlayer(!showPlayer)}
      >
        <Icon as={GiSoundWaves} boxSize={{ md: 20, base: 8 }} />
      </Button>
      {showPlayer && (
        <PlayBar
          bg="rgba(45, 55, 72, 0.8)"
          gridColumn="1/4"
          gridRow={{ md: "5/6", base: "6/7" }}
        />
      )}
    </Grid>
  );
};

export default HomePage2;