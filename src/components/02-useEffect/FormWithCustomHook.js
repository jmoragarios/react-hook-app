import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {


    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect( () => {
        console.log('email changed');
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    }

    return (

      <form onSubmit={ handleSubmit }>
        <h1>FormWithCustomHook</h1>
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

        <div className="form-group m-1">
          <input
            autoComplete="off"
            className="form-control"
            name="password"
            onChange={handleInputChange}
            placeholder="Your password"
            type="password"
            value={password}
          />
        </div>

        <button className="btn btn-primary" type="submit">Save</button>

      </form>
      
    );
}
