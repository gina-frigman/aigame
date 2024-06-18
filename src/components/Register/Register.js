import React from 'react';
import './Register.css'
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register(props) {
    const [formValue, setFormValue] = React.useState({
        firstname: '',
        lastname: '',
        username: '',
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
        if (formValue.password === formValue.repeatpassword) {
            props.onSubmit(formValue)
        } else {
            console.log('wrong repeat password')
        }
    }

    return(
        <PopupWithForm name='register' isOpened={props.isOpened} onClose={props.onClose} onSubmit={handleSubmit} onChange={handleChange} formValue={formValue} onLoginClick={props.onLoginClick} />
    )
}

export default Register;