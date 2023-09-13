import React from 'react'
import {useState,useEffect} from 'react'
import HeaderNev from './HeaderNev';
import AddMemberDetails from './AddMemberDetails';
import Tasks from './Tasks';


const Home = () => {

    const [members,setMembers] = useState([])
    const [showAddMember,setShowAddMember] = useState(false);

  // const [members,setMembers] = useState([])
  const DeleteMember = (index) =>{
    const updatedList = [...members];
    updatedList.splice(index, 1);
    setMembers(updatedList);
    localStorage.setItem("MemberData", JSON.stringify(updatedList));
    }
  
    const onEditMember = (id) =>{
      //this filters the task shown on the div the delete button is clicked
      // setMembers(members.filter ((members) => members.id !==id))
      //    console.log('edit: ',id)
      
      console.log('edit: ',id)
    
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
        <HeaderNev onAdd ={()=>{setShowAddMember(!showAddMember)}}/>
        {showAddMember &&
      <AddMemberDetails  addDataToLocalStorage={addDataToLocalStorage}/>}

        {members.length>0 ? <Tasks members={members} onDeleteMember={DeleteMember} onEditMember={onEditMember}  />
       :  <h3>No member to show </h3>}
      <h3>home pagefff</h3>
    </div>
  )
}

export default Home
