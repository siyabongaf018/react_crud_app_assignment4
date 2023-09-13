import Task from "./Task"


const Tasks = ({ members, onDeleteMember, onEditMember }) => {
     // Check if members is an array before mapping
  if (!Array.isArray(members)) {
    return <div>Members is not an array</div>;
  }

  return (
    <>
      {members.map((user, index) => (
        <Task key={index} index ={index} user={user} onDeleteMember={onDeleteMember} onEditMember={onEditMember} />
      ))}
    </>
  )
}

export default Tasks
