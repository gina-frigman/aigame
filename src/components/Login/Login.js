import React from 'react';
import './Login.css'
import popupLogo from './../../images/popupLogo.svg'

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

    function handleCloseClick(evt) {
        evt.preventDefault()
        props.onClose()
    }

    function handleRecoveringClick(evt) {
        evt.preventDefault()
        props.onRecoveringClick()
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
                <h1 className='popup__header'>Вход</h1>
                <form className='popup__form'>
                    <input className='popup__input' type='text' name='username'placeholder='Логин' 
                    value={formValue.username} onChange={handleChange} required />
                    <input className='popup__input' type='password' name='password' placeholder='Пароль'
                    value={formValue.username} onChange={handleChange} required />
                    <button className='popup__submit' type='submit'>Войти</button>
                </form>
                <p className='popup__text'>Нет учётной записи?<button className='popup__button' onClick={handleSubmit}>Зарегистрироваться</button></p>
                <button className='popup__button' onClick={handleRecoveringClick}>Забыли пароль?</button>
            </div>
        </div>
    )
}

export default Login;