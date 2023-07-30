import { Interests } from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components";
import { InterestSkiils } from "../dummyData";

const Interest = () => {
  return (
    <InterestContainer>
      <div className="ExperienceHeadingContainer">
        <div className="WorkIcon">
          <Interests sx={{ color: "white" }} />
        </div>
        <h2 style={{ color: "#1b3140" }}> Interest </h2>
      </div>

     <div className="interestOuterContainer">
     {InterestSkiils.map((item) => (
        <div className="interests" key={item.id}>
          {item.name}
        </div>
      ))}
     </div>
    </InterestContainer>
  );
};

export default Interest;

const InterestContainer = styled.div`
    margin: 3rem 0;

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


    .interestOuterContainer{
        display: flex;
        gap: 1rem;
        margin: 2rem 0;
        flex-wrap: wrap;
    }

  .interests { 
    width: 15%;
    text-align: center;
    min-width: fit-content;
    padding: 0.5rem ;
    border: 1px solid;
    border-radius: 10px;
  }
`;
