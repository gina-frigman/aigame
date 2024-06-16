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
        props.onSubmit(evt)        
    }

    return(
        <div className={`popup ${props.isOpened ? 'popup_opened' : ''}`}>
            <div className={`popup__container ${props.name === 'register' ? 'popup__container_register' : ''} `}>
                <div className='popup__flexbox'>
                    <img className="popup__logo" src={popupLogo} alt='логотип' />
                    {props.name === 'create' ? <p className='popup__name'>Создание игры</p> : <img className='popup__name-img' src={aigame} alt='AIGame'/>}
                    <button className='popup__close' onClick={handleCloseClick}></button>
                </div>
                {props.name === "answer" ? 
                    <div className='popup__flex-box'>
                        <h1 className='popup__header'>Точка {props.checkpointNumber}</h1>
                        <p className='popup__text-task'>задание {props.taskNumber} из {props.taskAmount}</p>
                    </div>
                :
                <h1 className='popup__header'>{props.name === 'login' ? 'Вход' : props.name === 'register' ? 'Регистрация' : 
                props.name === 'recovering' ? 'Восстановление пароля' : `${props.checkpointNumber} точка:`} </h1>
                }
                <form className={`popup__form ${props.name === 'register' ? 'popup__form_register' : props.name === 'answer' ? 'popup__form_answer' : ''}`}>
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
                        <div className='popup__flex-box'>
                            <div className='popup__field'>
                                <input className='popup__input' type='text' name='firstname'placeholder='Имя' 
                                value={props.formValue.firstname} onChange={handleChange} required />
                                <input className='popup__input' type='text' name='username'placeholder='Логин' 
                                value={props.formValue.username} onChange={handleChange} required />
                                <input className='popup__input' type='password' name='password' placeholder='Придумайте пароль'
                                value={props.formValue.password} onChange={handleChange} required />
                            </div>
                            <div className='popup__field'>
                                <input className='popup__input' type='text' name='lastname'placeholder='Фамилия' 
                                value={props.formValue.lastname} onChange={handleChange} required />
                                <input className='popup__input' type='email' name='email'placeholder='E-mail' 
                                value={props.formValue.email} onChange={handleChange} required />
                                <input className='popup__input' type='password' name='repeatpassword' placeholder='Повторите пароль'
                                value={props.formValue.repeatpassword} onChange={handleChange} required />
                            </div>
                        </div>
                        <p className={`popup__text ${props.name === 'register' ? 'popup__text_register' : ''} `}>Уже зарегистрированы?<button className='popup__button' onClick={props.onLoginClick}>Войти</button></p>
                        <button className='popup__submit' type='submit' onClick={handleSubmit}>Зарегистрироваться</button>
                    </>
                    : props.name === 'recovering' ?
                    <>
                        <input className='popup__input' type='text' name='username'placeholder='Логин' 
                        value={props.formValue.username} onChange={handleChange} required />
                        <button className='popup__submit' type='submit' onClick={handleSubmit}>Получить пароль</button>
                    </>
                    : props.name === "create" ?
                    <>
                        <input className='popup__input' type='text' name='topic'placeholder='Тема' 
                        value={props.checkpointValue.topic} onChange={handleCheckpointChange} required />
                        <input className='popup__input' type='number' name='taskCount'placeholder='Кол-во заданий' 
                        value={props.checkpointValue.taskCount} onChange={handleCheckpointChange} required />
                        <input className='popup__input' type='url' name='link' placeholder='Ссылка на теорию'
                        value={props.checkpointValue.link} onChange={handleCheckpointChange} required />
                        <button className='popup__submit popup__submit_checkpoint' onClick={handleCheckpointSubmit}>Добавить точку</button>
                        <button className='popup__submit' type='submit' onClick={handleSubmit}>Создать игру</button>
                    </> :
                    <>
                    <p className='popup__input popup__task-text'>{props.taskText}</p>
                    <input className='popup__input popup__input_answer' type='text' name='answer'placeholder='ОТВЕТ:' 
                    value={props.formValue.answer} onChange={handleChange} required />
                    <button className='popup__submit' type='submit' onClick={handleSubmit}>Отправить</button>

                    </>
                    }
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;
        
    


        
    


        
    


        
