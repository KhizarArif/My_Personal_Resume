import React from "react";
import { styled } from "styled-components";
import { School } from "@mui/icons-material";

const Education = () => {
  return (
    <EducationContainer>
      <div className="ExperienceHeadingContainer">
        <div className="WorkIcon">
          <School sx={{ color: "white" }} />
        </div>
        <h2 style={{ color: "#1b3140" }}> Education </h2>
      </div>

      <div className="EducationDetailsContainer">
        <h2> Intermediate </h2>
        <div className="InstituteDetails">
          <div>
            <p className="Institute_Name">
              Government College of Science, Wahdat Road, Lahore{" "}
            </p>
            <p className="degree_Name"> I.C.S- Physics Pre-Engineering </p>
          </div>
          <div>
            <p> Lahore, Pakistan </p>
            <p> 2016-2018 </p>
          </div>
        </div>
      </div>

      <div className="EducationDetailsContainer">
        <h2> Bachelors </h2>
        <div className="InstituteDetails">
          <div>
            <p className="Institute_Name">
              Institute Of Business And Information Technology, <br />
              University Of The Punjab.
            </p>
            <p className="degree_Name">
              Bachelors of Business and Information Technology.
            </p>
          </div>
          <div>
            <p> Lahore, Pakistan </p>
            <p> 2018-2022 </p>
          </div>
        </div>
      </div>
    </EducationContainer>
  );
};

export default Education;

const EducationContainer = styled.div` 

.ExperienceHeadingContainer {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .WorkIcon {
    background: #1b3140;
    padding: 0.3rem;
    border-radius: 5px;
  }

  
    margin-bottom: 3rem;
  .EducationDetailsContainer {
    margin: 1rem 0;
    border: 1px solid #b1adad;
    border-radius: 10px;
    padding: 0.5rem;
  }

  .InstituteDetails {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Institute_Name {
    font-size: 1rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .degree_Name {
    font-style: italic;
    font-weight: 500;
    margin-left: 1rem;
  }
`;
