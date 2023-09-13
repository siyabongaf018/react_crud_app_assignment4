import React from 'react'
import ButtonAdd from './ButtonAdd'

const HeaderNev = ({onAdd}) => {
  return (
    <div>
      <ButtonAdd onAdd={onAdd}/>
    </div>
  )
}

export default HeaderNev
