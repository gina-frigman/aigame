import React from 'react';
import './Register.css'
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register(props) {
    const [formValue, setFormValue] = React.useState({
        firstname: '',
        secondname: '',
        login: '',
        email: '',
        password: '',
        repeatpassword: '',
    })

    function handleChange(evt) {
        const {name, value} = evt.target
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        props.onSubmit(formValue)
    }

    return(
        <PopupWithForm name='register' isOpened={props.isOpened} onClose={props.onClose} onSubmit={handleSubmit} onChange={handleChange} formValue={formValue} onLoginClick={props.onLoginClick} />
    )
}

export default Register;