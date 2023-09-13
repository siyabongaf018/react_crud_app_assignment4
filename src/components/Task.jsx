
import { NavLink } from "react-router-dom";
import './style.css'


const Task = ({user,index, onDeleteMember,onEditMember}) => {
    

      return (
        <div className="member" style={{ position:'relative' ,display:'flex',gap:'2%'}}>
    
           < div className='member__photo' >
           <img src={user.imageData}  alt='user photo' style={{paddingTop:'20px'}} />
          
           </div> 
           <div style={{margin:'0'}}>
            <h3>{user.memberName}</h3>
            <p>{user.memberJobTitle}</p>
           </div>
           <div style={{padding:'20px'}}>
            <NavLink 
            to={{pathname:`/editPage/${index}`}}>
           <button onClick={ () => onEditMember(index)} color="primary" aria-label="Edit">
             🖊
          </button>
          </NavLink>
          <button onClick={ () => onDeleteMember(index)} color="secondary" aria-label="Delete">
            ❌
          </button>
           </div>
    
          
        </div>
      )
    }
    
    export default Task
