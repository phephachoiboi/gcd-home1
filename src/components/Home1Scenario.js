import React from "react";
import "../App.css";
import MainSlider from "./MainSlider";
import CoreServices from "./CoreServices";
import AboutUs from "./AboutUs";
import ProfessionalTeams from "./ProfessionalTeams";
import ContactUs from "./ContactUs";

const Home1Scenario = () => {
  return (
    <main className="flex flex-col relative m-0 p-0">
      <MainSlider />
      <CoreServices />
      {/* <AboutUs /> */}
      {/* <ProfessionalTeams /> */}
      {/* <ContactUs />  */}
    </main>
  );
};
export default Home1Scenario;
