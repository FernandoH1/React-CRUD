import React from 'react';
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data,e) => {
        //console.log(data)
        props.addUser(data);
        //Limpiar los campos
        e.target.reset();
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('name', {
                        required: true,
                    })}
                    placeholder="Ingrese el nombre" 
                    className='form-control my-3'
                />
                {errors.name?.type === 'required' && (
                    <span className='text-danger text-small d-block mb-2'>
                        Debe de Ingresar el nombre
                    </span>
                )}
                <input
                    {...register('username', {
                        required: true,
                    })}
                    placeholder="Ingrese el nombre de Usuario" 
                    className='form-control my-3'
                />
                {errors.username?.type === 'required' && (
                    <span className='text-danger text-small d-block mb-2'>
                        Debe de Ingresar el nombre del Usuario
                    </span>
                )}
                <button className='btn btn-primary' type='submit'>Add new user</button>
            </form>
    );
}

export default AddUserForm;