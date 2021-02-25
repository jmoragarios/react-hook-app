import React, { useEffect, useState } from 'react'
import './effects.css';

export const Simpleform = () => {


    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        console.log('Hi!');
    }, [] );

    useEffect( () => {
        console.log('formState changed!');
    }, [ formState ] );

    useEffect( () => {
        console.log('email changed!');
    }, [ email ] );

    const handleInputChange = ({ target }) => {
        
        setFormState({
            ...formState,
            [target.name]: target.value 
        });

    }

    return (
      <>
        <h1>useEffect</h1>
        <hr />

        <div className="form-group m-1">
          <input
            autoComplete="off"
            className="form-control"
            name="name"
            onChange={handleInputChange}
            placeholder="Your nombre"
            type="text"
            value={name}
          />
        </div>

        <div className="form-group m-1">
          <input
            autoComplete="off"
            className="form-control"
            name="email"
            onChange={handleInputChange}
            placeholder="email@example.com"
            type="text"
            value={email}
          />
        </div>
      </>
    );
}
