import React from 'react';
import './Recovering.css'
import popupLogo from './../../images/popupLogo.svg'

function Recovering(props) {
    const [formValue, setFormValue] = React.useState({
        username: '',
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

    return(
        <div className={`popup ${props.isOpened ? 'popup_opened' : ''}`}>
            <div className='popup__container'>
                <div className='popup__flexbox'>
                    <img src={popupLogo} alt='логотип' />
                    <p className='popup__name'>AIGame</p>
                    <button className='popup__close' onClick={handleCloseClick}></button>
                </div>
                <h1 className='popup__header'>Восстановление пароля</h1>
                <form className='popup__form'>
                    <input className='popup__input' type='text' name='username'placeholder='Логин' 
                    value={formValue.username} onChange={handleChange} required />
                    <button className='popup__submit' type='submit'>Получить пароль</button>
                </form>
            </div>
        </div>
    )
}

export default Recovering;