import './style.css';

const ButtonAdd = ({onAdd}) => {
    return (
    
        <button className="btn" onClick={onAdd}>
          Add Member
        </button>
  )
}

export default ButtonAdd
