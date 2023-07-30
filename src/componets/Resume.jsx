import React from "react";
import { styled } from "styled-components"; 
import Education from "./Education";
import Skills from "./Skills";
import Interest from "./Interest";
import WorkExperience from "./WorkExperience";
import Navbar from "./Navbar";

const Resume = () => {
  return (
    <ResumeMainContainer> 
        <Navbar /> 

      {/* Main Content  */}
      <section className="MainSection">
        <div className="personal_Details">
          <WorkExperience />
        </div>

        {/* Skills Container  */}
        <div className="skills_Details"> 
        <Education />
          <Skills />
          <Interest />
        </div>
      </section>
    </ResumeMainContainer>
  );
};

export default Resume;

const ResumeMainContainer = styled.div` 
  .personal_Details { 
    padding: 2rem;
  }
 
  .MainSection {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    margin-top: 3rem;
  }

  .personal_Details {
    width: 50%;
  }

  .skills_Details {
    width: 50%;
    margin: 1.5rem;

  }

  @media only screen and (max-width: 786px){
    .MainSection {
      flex-direction: column;
      width: 100%;
      padding: 1rem 0.5rem;
    }

    .personal_Details{
      width: 100%;
      padding: 0;
    }

    .skills_Details{
      width: 100%;
      margin: 1rem 0.2rem;
    }

  }

`;
