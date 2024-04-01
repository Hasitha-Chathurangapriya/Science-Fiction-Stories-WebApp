// About.js

import React, { useState, useEffect } from "react";
import "./About.css";
import AppBarr from "../Home/AppBar";

const About = () => {
  const [aboutInfo, setAboutInfo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 10000));

        const fetchedData =
          "Welcome to the future of storytelling! Our science fiction stories take you on exhilarating journeys to distant galaxies, parallel dimensions, and beyond. Immerse yourself in a world where the limits of imagination are shattered, and possibilities are endless. Explore the unknown, encounter futuristic technologies, and meet characters who defy the boundaries of space and time. Join us as we push the boundaries of storytelling and transport you to realms uncharted.";

        setAboutInfo(fetchedData);
      } catch (error) {
        console.error("Error fetching about information:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <AppBarr />
      <div className="about-container">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">
          Welcome to the future of storytelling! Our science fiction stories
          take you on exhilarating journeys to distant galaxies, parallel
          dimensions, and beyond. Immerse yourself in a world where the limits
          of imagination are shattered, and possibilities are endless. Explore
          the unknown, encounter futuristic technologies, and meet characters
          who defy the boundaries of space and time. Join us as we push the
          boundaries of storytelling and transport you to realms uncharted.
        </p>

        <p className="about-text">
          Welcome to the future of storytelling! Our science fiction stories
          take you on exhilarating journeys to distant galaxies, parallel
          dimensions, and beyond. Immerse yourself in a world where the limits
          of imagination are shattered, and possibilities are endless. Explore
          the unknown, encounter futuristic technologies, and meet characters
          who defy the boundaries of space and time. Join us as we push the
          boundaries of storytelling and transport you to realms uncharted.
        </p>
      </div>
    </div>
  );
};

export default About;
