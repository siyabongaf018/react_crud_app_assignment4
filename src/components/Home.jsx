import React from "react";
import { useState, useEffect } from "react";
import HeaderNev from "./HeaderNev";
import AddMemberDetails from "./AddMemberDetails";
import Tasks from "./Tasks";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [members, setMembers] = useState([]);
  const [showAddMember, setShowAddMember] = useState(false);
  const pathLocation = useLocation();

  // const [members,setMembers] = useState([])
  const DeleteMember = (index) => {
    const updatedList = [...members];
    updatedList.splice(index, 1);
    setMembers(updatedList);
    localStorage.setItem("MemberData", JSON.stringify(updatedList));
  };

  const onEditMember = (id) => {
    //this filters the task shown on the div the delete button is clicked
    // setMembers(members.filter ((members) => members.id !==id))
    //    console.log('edit: ',id)

    console.log("edit: ", id);
  };

  const changeShowAddMember = () => {
    setShowAddMember(!showAddMember);
  }

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("MemberData")) || [];
    setMembers(storedData);
  }, []);

  const addDataToLocalStorage = (formData) => {
    const newDataList = [...members, formData];
    setMembers(newDataList);

    localStorage.setItem("MemberData", JSON.stringify(newDataList));
  };
  return (
    <div>
      <nav className="header">
      <HeaderNev
        onAdd={changeShowAddMember}
      />

      </nav>
      
      {showAddMember ? (
        <AddMemberDetails addDataToLocalStorage={addDataToLocalStorage} changeShowAddMember = {changeShowAddMember} />
      ) : 
      members.length > 0 ? (
        <Tasks
          members={members}
          onDeleteMember={DeleteMember}
          onEditMember={onEditMember}
          
        />
      ) : (
        <h3>No member to show </h3>
      )
      }
      

      {/* {  members.length > 0 ? (
        <Tasks
          members={members}
          onDeleteMember={DeleteMember}
          onEditMember={onEditMember}
        />
      ) : (
        <h3>No member to show </h3>
      ) } */}
    </div>
  );
};

export default Home;
