import React from 'react';
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {

    //console.log(props.currentUser)

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: props.currentUser

    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data,e) => {
        console.log(data)
        data.id = props.currentUser.id

        props.updateUser(props.currentUser.id, data)

        //Limpiar los campos
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
            {...register('name', {
                required: true,
            })}
            placeholder="Ingrese el nombre a editar" 
            className='form-control my-3'
        />
        {errors.name?.type === 'required' && (
            <span className='text-danger text-small d-block mb-2'>
                Debe de Ingresar el nombre
            </span>
        )}
        <label>Username</label>
        <input
            {...register('username', {
                required: true,
            })}
            placeholder="Ingrese el nombre de Usuario a editar" 
            className='form-control my-3'
        />
        {errors.username?.type === 'required' && (
            <span className='text-danger text-small d-block mb-2'>
                Debe de Ingresar el nombre del Usuario
            </span>
        )}
        <button className='btn btn-primary' type='submit'>Edit user</button>
    </form>
    );
}

export default EditUserForm;