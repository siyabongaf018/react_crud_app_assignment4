
import { NavLink,useParams } from "react-router-dom";
const EditPage = () => {
    const { memberid } = useParams(); // Get the articleId from the URL parameters
  return (
    <div>
        <NavLink 
            to={{pathname:`/`}}>
           <button onClick={ () => onEditMember(index)} color="primary" aria-label="Edit">
             ⬅ BACK
          </button>
          </NavLink>
      <h2>EditPage {memberid}</h2>
    </div>
  )
}

export default EditPage
