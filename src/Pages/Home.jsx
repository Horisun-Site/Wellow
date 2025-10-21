import React, { useState } from "react";
import Section from "../Component/Section";
import Navpc from "../Component/Navpc";
import Second from "../Component/Second";
import Third from "../Component/Third";
import Spider from "../Component/Spider";
import Slide from "../Component/Slide";
import Flex from "../Component/Flex";
import Count from "../Component/Count";
import Over from "../Component/Over";
import Lover from "../Component/Lover";
import Bottom from "../Component/Bottom";
import Pest from "../Component/Pest";

const Home = () => {
  
  return (
    <div className="overflow-hidden">
      <Navpc/>
      <Pest/>
      <Second/>
      <Third/>
      <Spider/>
      <Flex/>
      <Count/>
      <Slide/>
      <Over/>
      <Bottom/>
      <Lover/>
    </div>
  );
};

export default Home;
