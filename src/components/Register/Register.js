import React from 'react';
import './Register.css'
import popupLogo from './../../images/popupLogo.svg'

function Register(props) {
    const [formValue, setFormValue] = React.useState({
        firstname: '',
        secondname: '',
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

    function handleCloseClick(evt) {
        evt.preventDefault()
        props.onClose()
    }

    function handleLoginClick(evt) {
        evt.preventDefault()
        props.onLoginClick()
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        props.onSubmit(formValue)
    }

    return(
        <div className={`popup ${props.isOpened ? 'popup_opened' : ''}`}>
            <div className='popup__container'>
                <div className='popup__flexbox'>
                    <img src={popupLogo} alt='логотип' />
                    <p className='popup__name'>AIGame</p>
                    <button className='popup__close' onClick={handleCloseClick}></button>
                </div>
                <h1 className='popup__header'>Регистрация</h1>
                <form className='popup__form'>
                    <input className='popup__input' type='text' name='firstname'placeholder='Имя' 
                    value={formValue.firstname} onChange={handleChange} required />
                    <input className='popup__input' type='text' name='secondname'placeholder='Фамилия' 
                    value={formValue.firstname} onChange={handleChange} required />
                    <input className='popup__input' type='text' name='username'placeholder='Логин' 
                    value={formValue.firstname} onChange={handleChange} required />
                    <input className='popup__input' type='email' name='email'placeholder='E-mail' 
                    value={formValue.firstname} onChange={handleChange} required />
                    <input className='popup__input' type='password' name='password' placeholder='Придумайте пароль'
                    value={formValue.username} onChange={handleChange} required />
                    <input className='popup__input' type='password' name='repeatpassword' placeholder='Повторите пароль'
                    value={formValue.username} onChange={handleChange} required />
                    <button className='popup__submit' type='submit' onClick={handleSubmit}>Зарегистрироваться</button>
                </form>
                <p className='popup__text'>Уже зарегистрированы?<button className='popup__button' onClick={handleLoginClick}>Войти</button></p>
            </div>
        </div>
    )
}

export default Register;