import { BusinessCenter } from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components";
import { WorkExperienceData } from "../dummyData";

const WorkExperience = () => {
  return (
    <WorkExperienceContainer>
      <div className="ExperienceHeadingContainer">
        <div className="WorkIcon">
          <BusinessCenter sx={{ color: "white" }} />
        </div>
        <h2 style={{ color: "#1b3140" }}> Work Experience </h2>
      </div>
      <div className="workExperienceInnerContainer">
        <h3 className="CompanyName">
          <span className="CompanySpan"> Company: </span> Deutics Global
        </h3>
        <p className="designation"> Worked as a Junior Intern </p>
        <p className="Achievements"> Achievements </p>

        {WorkExperienceData?.map((item) => ( 
          <div className="ProjectDetailsMainCOntainer" key={item.id}>
            <h2 className="ProjectHeading"> {item.Project_Name} </h2>
            <p className="projectDescription"> {item.Project_Description}</p>
            <ul className="projectReponsibilities">
              {item?.Responsibilities?.map((point, index) => (
                <li key={index}> {point} </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </WorkExperienceContainer>
  );
};

export default WorkExperience;

const WorkExperienceContainer = styled.div`

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

  
  .CompanyName {
    color: #000;
    margin: 0.5rem 0;
    font-size: 1.3rem;
  }

  .CompanySpan {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .designation {
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem;
  }

  .Achievements {
    font-style: italic;
    color: #98c9e0;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0.4rem 0;
  }

  .ProjectDetailsMainCOntainer {
    width: 90%;
    margin-top: 1rem;
  }

  .ProjectHeading {
    text-decoration: underline;
    padding: 0.5rem 0;
    margin-bottom: 0;
  }

  .projectDescription {
    word-spacing: 3px;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  .projectReponsibilities {
    width: 85%;
    margin: 0 auto;
  }

  .projectReponsibilities li {
    margin: 0.3rem 0;
  }

  .projectReponsibilities li::marker {
    color: #5fbbcd;
    font-weight: 800;
    font-size: 1.8rem;
  }

  .workExperienceInnerContainer {
    margin: 0 auto;
    width: 85%;
  }
`;
