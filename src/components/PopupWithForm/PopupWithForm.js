import './PopupWithForm.css'
import popupLogo from '../../images/popupLogo.svg'
import aigame from '../../images/name.svg'

function PopupWithForm(props) {
    function handleCloseClick() {
        props.onClose()
    }

    function handleChange(evt) {
        props.onChange(evt)
    }

    function handleCheckpointChange(evt) {
        evt.preventDefault()
        props.onCheckpointChange(evt)
    }

    function handleCheckpointSubmit() {
        props.onCheckpointSubmit()        
    }


    function handleSubmit(evt) {
        evt.preventDefault()
        props.onSubmit()        
    }


    return(
        <div className={`popup ${props.isOpened ? 'popup_opened' : ''}`}>
            <div className={`popup__container ${props.name === 'register' ? 'popup__container_register' : ''} `}>
                <div className='popup__flexbox'>
                    <img className="popup__logo" src={popupLogo} alt='логотип' />
                    {props.name === 'create' ? <p className='popup__name'>Создание игры</p> : <img className='popup__name-img' src={aigame} alt='AIGame'/>}
                    <button className='popup__close' onClick={handleCloseClick}></button>
                </div>                
                <h1 className='popup__header'>{props.name === 'login' ? 'Вход' : props.name === 'register' ? 'Регистрация' : 
                props.name === 'recovering' ? 'Восстановление пароля' : `${props.checkpointNumber} точка:`}</h1>
                <form className='popup__form'>
                    {props.name === 'login' ?
                    <>
                        <input className='popup__input' type='text' name='username'placeholder='Логин' 
                        value={props.formValue.username} onChange={handleChange} required />
                        <input className='popup__input' type='password' name='password' placeholder='Пароль'
                        value={props.formValue.password} onChange={handleChange} required />
                        <p className='popup__text'>Нет учётной записи?<button className='popup__button' onClick={props.onRegisterClick}>Зарегистрироваться</button></p>
                        <button className='popup__button popup__button_password' onClick={props.onRecoveringClick}>Забыли пароль?</button>
                        <button className='popup__submit' type='submit' onClick={handleSubmit}>Войти</button>
                    </>
                    : props.name === 'register' ?
                    <>
                        <input className='popup__input' type='text' name='firstname'placeholder='Имя' 
                        value={props.formValue.firstname} onChange={handleChange} required />
                        <input className='popup__input' type='text' name='secondname'placeholder='Фамилия' 
                        value={props.formValue.firstname} onChange={handleChange} required />
                        <input className='popup__input' type='text' name='username'placeholder='Логин' 
                        value={props.formValue.firstname} onChange={handleChange} required />
                        <input className='popup__input' type='email' name='email'placeholder='E-mail' 
                        value={props.formValue.firstname} onChange={handleChange} required />
                        <input className='popup__input' type='password' name='password' placeholder='Придумайте пароль'
                        value={props.formValue.username} onChange={handleChange} required />
                        <input className='popup__input' type='password' name='repeatpassword' placeholder='Повторите пароль'
                        value={props.formValue.username} onChange={handleChange} required />
                        <p className='popup__text'>Уже зарегистрированы?<button className='popup__button' onClick={props.onLoginClick}>Войти</button></p>
                        <button className='popup__submit' type='submit' onClick={handleSubmit}>Зарегистрироваться</button>
                    </>
                    : props.name === 'recovering' ?
                    <>
                        <input className='popup__input' type='text' name='username'placeholder='Логин' 
                        value={props.formValue.username} onChange={handleChange} required />
                        <button className='popup__submit' type='submit' onClick={handleSubmit}>Получить пароль</button>
                    </>
                    :
                    <>
                        <input className='popup__input' type='text' name='topic'placeholder='Тема' 
                        value={props.checkpointValue.topic} onChange={handleCheckpointChange} required />
                        <input className='popup__input' type='number' name='taskCount'placeholder='Кол-во заданий' 
                        value={props.checkpointValue.taskCount} onChange={handleCheckpointChange} required />
                        <input className='popup__input' type='url' name='link' placeholder='Ссылка на теорию'
                        value={props.checkpointValue.link} onChange={handleCheckpointChange} required />
                        <button className='popup__submit popup__submit_checkpoint' onClick={handleCheckpointSubmit}>Добавить точку</button>
                        <button className='popup__submit' type='submit' onClick={handleSubmit}>Создать игру</button>
                    </>
                    }
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;
        
    


        
    


        
    


        
