import React from 'react';
import './Login.css'
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login(props) {
    const [formValue, setFormValue] = React.useState({
        username: '',
        password: ''
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
        <PopupWithForm name='login' isOpened={props.isOpened} onRegisterClick={props.onRegisterClick} onRecoveringClick={props.onRecoveringClick} formValue={formValue} onClose={props.onClose} onChange={handleChange} onSubmit={handleSubmit} />
    )
}

export default Login;