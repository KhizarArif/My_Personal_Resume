import { Psychology, Star } from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components"; 
import { TechnicalSkiils } from "../dummyData";


const Skills = () => {
  return (
    <SkillsContainer>
      <div className="ExperienceHeadingContainer">
        <div className="WorkIcon">
          <Psychology sx={{ color: "white" }} />
        </div>
        <h2 style={{ color: "#1b3140" }}>  Skills </h2>
      </div>
      <div className="SkillsInnerContainer">
        <div className="SkillsContainer">
          <h4> HTML </h4>
          <div>
            <Star sx={{ color: "orange" }} />
            <Star sx={{ color: "orange" }} />
            <Star sx={{ color: "orange" }} />
            <Star sx={{ color: "orange" }} />
            <Star sx={{ color: "orange" }} />
          </div>
        </div>

        <div className="SkillsContainer">
          <h4> css </h4>
          <div>
            <Star sx={{ color: "orange" }} />
            <Star sx={{ color: "orange" }} />
            <Star sx={{ color: "orange" }} />
            <Star sx={{ color: "orange" }} />
            <Star sx={{ color: "orange" }} />
          </div>
        </div>

        <div className="SkillsContainer">
          <h4> Javascript </h4>
          <div>
            <Star sx={{ color: "orange" }} />
            <Star sx={{ color: "orange" }} />
            <Star sx={{ color: "orange" }} />
            <Star sx={{ color: "orange" }} />
          </div>
        </div>

        <div className="SkillsContainer">
          <h4> React </h4>
          <div>
            <Star sx={{ color: "orange" }} />
            <Star sx={{ color: "orange" }} />
            <Star sx={{ color: "orange" }} />
            <Star sx={{ color: "orange" }} />
          </div>
        </div>
      </div>

      {/* Technical Skiils  */}
      <div className="TechnicalSkillsContainer">
      <div className="ExperienceHeadingContainer">
        <div className="WorkIcon">
          <Psychology sx={{ color: "white" }} />
        </div>
        <h2 style={{ color: "#1b3140" }}> Technical Skills </h2>
      </div>

      <div className="interestOuterContainer">
     {TechnicalSkiils.map((item) => (
        <div className="interests" key={item.id}>
          {item.name}
        </div>
      ))}
     </div>


      </div>
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`

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

  
  .SkillsInnerContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 1rem;
    width: 95%;
    padding-top: 1.5rem;
  }

  .SkillsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0.4rem 0;
    border: 1px solid;
    padding: 0.3rem;
    border-radius: 10px;
  }


  .TechnicalSkillsContainer{
    margin: 3rem 0;
  }

  .interestOuterContainer{
        display: flex;
        gap: 1rem;
        margin: 2rem 0;
        width: 100%;
        flex-wrap: wrap; 
    }


  .interests { 
    width: 15%;
    text-align: center;
    min-width: fit-content;
    padding: 0.5rem ;
    border: 1px solid;
    border-radius: 10px;
    cursor: pointer;
  }



`;

