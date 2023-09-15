import React from 'react'
import ButtonAdd from './ButtonAdd'
import { useLocation } from 'react-router-dom'

const HeaderNev = ({onAdd}) => {

  const pathLocation = useLocation();
  return (
    <div>
      
    {pathLocation.pathname=== '/' && <ButtonAdd onAdd={onAdd}/>}
    </div>
  )
}

export default HeaderNev
