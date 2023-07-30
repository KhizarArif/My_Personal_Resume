import { LinkedIn, PhoneIphoneTwoTone, Mail } from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components";
import ProfileImage from "../assets/img/MY_Picture-removebg-Whitebg.png";

const Navbar = () => {
  return (
    <>
      <NavbarSection>
        <div className="User_Details">
          <h2 style={{ color: "#F4F1FF" }}> Muhammad Khizar </h2>
          <p style={{ color: "#48848F" }}> Front-End-Developer </p>
          <p>
            As a front-end developer with 10 months of experience in React JS, I
            have a strong foundation in creating responsive and user-friendly
            web applications. My expertise lies in converting designs into
            functional and interactive React components, effectively utilizing
            Redux for state management, and integrating APIs for seamless data
            retrieval.
          </p>
        </div>

        {/* Social Media Contact  */}
        <div className="User_Social_Media">
          <div className="User_Social_Media_Inner_Container">
            <p className="Social_Description"> khizararif201@gmail.com </p>
            <Mail sx={{ color: "#56B8C5" }} />
          </div>

          <div className="User_Social_Media_Inner_Container">
            <p className="Social_Description"> 03494123504 </p>
            <PhoneIphoneTwoTone sx={{ color: "#56B8C5" }} />
          </div>
          <div className="User_Social_Media_Inner_Container">
            <p className="Social_Description">
              https://www.linkedin.com/in/muhammad-khizar-arif-37a3b0217/{" "}
            </p>
            <LinkedIn sx={{ color: "#56B8C5" }} />
          </div>
        </div>
      </NavbarSection>

      <ProfileImageContainer className="">
        <img src={ProfileImage} alt="Profile Image" className="profileImage" />
      </ProfileImageContainer>
    </>
  );
};

export default Navbar;

const ProfileImageContainer = styled.div`
  width: 150px;
  height: 150px; 
  position: absolute;
  top: 25%; 
  left: 45%; 

  .profileImage {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  @media only screen and (max-width: 786px){
    display: none;
  }
`;

const NavbarSection = styled.section`
  background: #183141;
  color: #c2cbd3;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  padding-bottom: 5rem;
  position: relative;

  .User_Details {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem; 
    /* position: relative; */
  }

  .User_Social_Media {
    width: 23%;
  }

  .User_Social_Media_Inner_Container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;
    cursor: pointer;
  }

  .Social_Description {
    width: 70%;
    overflow-wrap: break-word;
    text-align: right;
  }

  @media only screen and (max-width: 786px){
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
    gap: 1rem; 

    .User_Details{ 
        padding: 0 20px;
        width: 100%;
    }

    .User_Social_Media{
        width: 100%;
        padding: 0 20px;

    }

    .User_Social_Media_Inner_Container{
        justify-content: space-between; 
    }

    .Social_Description{
        text-align: left;
    }

  }


`;
