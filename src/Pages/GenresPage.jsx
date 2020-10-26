import React, { useState } from "react";
import { Grid } from "@chakra-ui/core";
import { genresReleases } from "../data/genresData";
import { useRouteMatch } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import SideMenuNav from "../components/SideMenu/SideMenuNav";
import Hero from "../components/Hero";
import Releases from "../components/Releases/Releases";
import TopTenSection from "../components/TopTenSection/TopTenSection";
import PlayBar from "../components/PlayBar";
import PlayerButton from "../components/PlayerButton/PlayerButton";
import TracksSection from "../components/TracksSection/TracksSection";
import FilterGenresSection from "../components/GenresSection/FilterGenresSection";

const GenresPage = () => {
  const [showPlayer, setShowPlayer] = useState(false);
  const genres = genresReleases;
  const match = useRouteMatch();

  const matchCollection = genres[match.params.genreId];
  const { heroImage, genre, featured, ourSelection, tracks } = matchCollection;

  console.log(matchCollection);

  return (
    <Grid
      templateColumns={{
        lg: "11rem 4fr 1fr",
        md: "4fr 1fr",
        base: "4fr 2fr",
      }}
      gridTemplateRows={{
        xl: "7vh 0.2fr 0.5fr 3fr",
        lg: "7vh 0.2fr 0.5fr 3fr",
        md: "7vh 0.2fr 1fr 4fr",
        base: "7vh 0.1fr 0.5fr 0.1fr 2fr",
      }}
      gap={{ md: "2", base: "0" }}
      width={{ xl: "90vw", md: "100%" }}
      mx="auto"
    >
      <Navbar bg={"gray.700"} gridColumn="1/4" gridRow="1/2" />
      <SideMenuNav bg={"gray.700"} gridColumn="1/2" gridRow="2/5" />
      <Hero
        image={heroImage}
        gridColumn={{ lg: "2/4", md: "1/3", base: "1/3" }}
        gridRow="2/3"
        genreTitle={genre}
        bgPos="50% 30%"
      />
      <Releases
        bg={"gray.700"}
        data={featured}
        title="Featured Tracks"
        gridColumn={{ lg: "2/3", md: "1/2", base: "1/3" }}
        gridRow="3/4"
      />
      <TopTenSection
        bg={"gray.700"}
        title={`Top 10 ${genre} Artists`}
        gridColumn={{ lg: "3/4", md: "2/3", base: "1/3" }}
        gridRow={{ md: "3/4", base: "4/5" }}
      />
      <TracksSection
        data={tracks}
        gridColumn={{ lg: "2/3", md: "1/2", base: "1/2" }}
        gridRow={{ lg: "4/5", md: "4/5" }}
        bg={"gray.700"}
      />
      <FilterGenresSection
        gridColumn={{ lg: "3/4", md: "2/3", base: "2/3" }}
        gridRow={{ lg: "4/5", md: "4/5" }}
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

export default GenresPage;
