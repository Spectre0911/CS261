import React, {useState} from "react";
import {IoIosPersonAdd} from "react-icons/io";
import {GrClose} from "react-icons/gr";
import {Modal, Button} from "react-bootstrap";
import { Box } from "@mui/material";
import Select from "react-select";
import "./index.css";
import "../projectDashboard/index.css";
import "../projectDashboard/index.jsx";
import ProfileCard from "./ProfileCard";

const UserPage = () => {

    const [showDelete, setShowDelete] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [removeUserId, setRemoveUserId] = useState();
  
    const handleDeleteClose = () => {
      setShowDelete(false);
    };
    const handleDeleteShow = (e) => {
      setRemoveUserId(e.target.value);
      setShowDelete(true);
    };
  
    const handleAddClose = () => {
      setShowAdd(false);
    };
    const handleAddShow = (e) => {
      console.log("2dd");
      setShowAdd(true);
    };
  
    const deleteFeature = (e) => {
      console.log("delete this");
      console.log(removeUserId);
      setShowDelete(false);
    };
  
    const addTeamMember = (e) => {
      console.log(teamMembersList);
    };
  
    const teamMembersOptions = [
      { value: "1", label: "Joshua" },
      { value: "2", label: "Morgan" },
      { value: "3", label: "Sanjula" },
    ];
  
    const [teamMembersList, setTeamMembersList] = useState([]);
    const handleTeamMemberChange = (e) => {
      setTeamMembersList(e);
    };

const teamMembers = [
    {
        id: "1",
        name:"Jane Arnold",
        image:"http://localhost:5000/assets/jane.jpg",
        bio:"I am a software engineer",
        skills:["Python","React"],
    },{ 
        id: "2",
        name:"Jane Arnold",
        image:"http://localhost:5000/assets/jane.jpg",
        bio:"I am a backend engineer",
        skills:["Python","Node","SQL"],
    }];

    const recommendedMembers = [
        {
            id: "1",
            name:"Jane Doe",
            image:"http://localhost:5000/assets/jane.jpg",
            bio:"I am a software engineer",
            skills:["Python","React"],
        },{ 
            id: "2",
            name:"John Smith",
            image:"http://localhost:5000/assets/jane.jpg",
            bio:"I am a backend engineer",
            skills:["Python","Node","SQL"],
        },{
            id: "3",
            name:"Jane Doe",
            image:"http://localhost:5000/assets/jane.jpg",
            bio:"I am a software engineer",
            skills:["Python","React"],
        }];

    return (
        <>
        <div className="spacer"></div>
        <div className="userContainer">
            <div className="userTitle">
                <p>Current Team Members:</p>
            </div>
            <div>
                {teamMembers.map((member) => {
                    return (
                        <ProfileCard
                            key={member.id}
                            name={member.name}
                            image={member.image}
                            bio={member.bio}
                            skills={member.skills} />
                    );
                })}
            </div>
        </div><div className="userContainer">
                    <p className="userTitle">Recommended Team Members:</p>
                    <button
                        onClick={handleAddShow}
                        className="projectFilterInput viewProject addFeatureButton"
                        style={{
                        height: "35px",
                        width: "40px",
                        padding: "0px",
                        position: "absolute",
                        right: "20px",
                        top: "15px",
                        }}
                    >
                        <IoIosPersonAdd />
                    </button>
                <div>
                    {recommendedMembers.map((member) => {
                        return (
                            <div>
                            <ProfileCard
                                key={member.id}
                                name={member.name}
                                image={member.image}
                                bio={member.bio}
                                skills={member.skills} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <Modal
        className="addProfileModal"
        style={{ marginTop: "200px" }}
        fade={false}
        show={showAdd}
        onHide={handleAddClose}
      >
        <Modal.Header>
          <div className="bugFormClose" onClick={handleAddClose}>
            <GrClose />
          </div>
          <Modal.Title>Add team member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please select the team member you would like to add:</p>
          <p
            style={{
              gridColumn: "span 1",
              margin: "auto",
              paddingRight: "2px",
            }}
          >
            Select team member:
          </p>
          <Select
            id="teamMembers"
            name="teamMembers"
            options={teamMembersOptions}
            onChange={handleTeamMemberChange}
            className="defineDependenciesBox"
            sx={{ gridColumn: "span 3", width: "70%" }}
            value={teamMembersList}
          />
          <Box>
            <Button
              className="bugCancelButton"
              fullWidth
              sx={{
                m: "2rem 1rem",
                p: "1rem",
              }}
              style={{ marginLeft: "10px" }}
              onClick={addTeamMember}
            >
              {"Add"}
            </Button>

            <Button
              className="bugAddButton"
              fullWidth
              onClick={handleDeleteClose}
              sx={{
                m: "2rem 1rem",
                p: "1rem",
              }}
            >
              {"Cancel"}
            </Button>
          </Box>
        </Modal.Body>
      </Modal>
            </>
    );
}

export default UserPage;