import React, { useState } from "react"; 
import ComponentB from "../pure/ComponentB";
import { Contacto } from "../../models/contact.class";

function ComponentA() {

    const defaultContact = new Contacto(
        "Luciano","Martin","luciano@gmail.com",false
    )

    const [state,setState] = useState(false)

    const changeState = () =>{
        setState(!state) 
    }

  return (
    <>
      <h2>Componente A</h2>
      <div>
        <ComponentB contact={defaultContact} changeState={changeState}/>
      </div>
    </>
  );
} 

export default ComponentA;
