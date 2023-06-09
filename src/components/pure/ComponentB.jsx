import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contact.class'

function ComponentB({contact, changeState}) {
  return (
    <>
        <h2>Componente B</h2>
          <p>Nombre: {contact.name}</p>
          <p> Apellido: {contact.lastname}</p>
          <p> Email: {contact.email}</p>
          <p> Estado de conexión: { contact.conect 
            ? 'Conectado En Línea' 
            : 'Conectado No Disponible'
            }</p>
            <button onClick={changeState}> Cambiar conexión</button>
    </>
  )
}

ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
}

export default ComponentB
