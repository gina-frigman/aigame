import React from 'react';
import Header from '../Header/Header';
import './CreateGame.css'
import popupLogo from '../../images/popupLogo.svg'

function CreateGame(props) {
    const [isOpened, setIsOpened] = React.useState(false)
    const [level, setLevel] = React.useState(0)
    const [checkpoints, setCheckpoints] = React.useState({})
    const [checkpointValue, setCheckpointValue] = React.useState({
        taskCount: '',
        topic: '',
        link: '',
    })
    const [formValue, setFormValue] = React.useState({
        name: '',
        class: '',
        countCheckpoint: '',
        status: '',
        background: '',
        checkpoint: checkpoints,
    })

    function handleChange(evt) {
        const {name, value} = evt.target
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    function handleCheckpointChange(evt) {
        const {name, value} = evt.target
        setCheckpointValue({
            ...checkpointValue,
            [name]: value
        })
    }

    function handleClassClick() {
        setIsOpened(true)
    }

    function handleCloseClick() {
        props.onClose()
    }

    function handleCheckpointSubmit(evt) {
        evt.preventDefault()
        {/* придумать способ добавки точек */}
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        setLevel(level + 1)
        if (level === 2) {
            props.onSubmit(formValue)
        }
    }

    return(
        <>
            <Header isLoggedIIn={props.isLoggedIIn} onLoginClick={props.onLoginClick} onRegisterClick={props.onRegisterClick} onSignOutClick={props.onSignOutClick} />
            {level === 0 ? 
            <main className='create'>
                <h1 className='create__header'>Создание игры</h1>
                <form className='create__form'>
                    <input className='create__input' type='text' name='name' placeholder='Введите название игры' onChange={handleChange} value={formValue.name} required />
                    <button className='create__input' onClick={handleClassClick}>Выберите класс, на который рассчитана игра</button>
                    <div className={`create__container ${isOpened ? 'create__container_opened' : ''}`}>
                        <input className='create__input create__input_class' id='1 класс' type='radio' name='class' value={formValue.class} onChange={handleChange} />
                        <label className='create__label' for="1 класс">1 класс</label>
                        <input className='create__input create__input_class' id='2 класс' type='radio' name='class' value={formValue.class} onChange={handleChange} />
                        <label className='create__label' for="2 класс">2 класс</label>
                        <input className='create__input create__input_class' id='3 класс' type='radio' name='class' value={formValue.class} onChange={handleChange} />
                        <label className='create__label' for="3 класс">3 класс</label>
                        <input className='create__input create__input_class' id='4 класс' type='radio' name='class' value={formValue.class} onChange={handleChange} />
                        <label className='create__label' for="4 класс">4 класс</label>
                        <input className='create__input create__input_class' id='5 класс' type='radio' name='class' value={formValue.class} onChange={handleChange} />
                        <label className='create__label' for="5 класс">5 класс</label>
                        <input className='create__input create__input_class' id='6 класс' type='radio' name='class' value={formValue.class} onChange={handleChange} />
                        <label className='create__label' for="6 класс">6 класс</label>
                        <input className='create__input create__input_class' id='7 класс' type='radio' name='class' value={formValue.class} onChange={handleChange} />
                        <label className='create__label' for="7 класс">7 класс</label>
                        <input className='create__input create__input_class' id='8 класс' type='radio' name='class' value={formValue.class} onChange={handleChange} />
                        <label className='create__label' for="8 класс">8 класс</label>
                        <input className='create__input create__input_class' id='9 класс' type='radio' name='class' value={formValue.class} onChange={handleChange} />
                        <label className='create__label' for="9 класс">9 класс</label>
                        <input className='create__input create__input_class' id='10 класс' type='radio' name='class' value={formValue.class} onChange={handleChange} />
                        <label className='create__label' for="10 класс">10 класс</label>
                        <input className='create__input create__input_class' id='11 класс' type='radio' name='class' value={formValue.class} onChange={handleChange} />
                        <label className='create__label' for="11 класс">11 класс</label>
                    </div>                    
                    <input className='create__input' type='number' name='countCheckpoint' placeholder='Количество заданий с точками' onChange={handleChange} value={formValue.countCheckpoint} required />
                    <div className='create__flexbox'>
                        <input className='create__input create__input_radio' id='Приватная' type='radio' name='status' value={formValue.status} onChange={handleChange} />
                        <label className='create__label' for="Приватная">Приватная</label>
                        <input className='create__input create__input_radio' id='Публичная' type='radio' name='status' value={formValue.status} onChange={handleChange} />
                        <label className='create__label' for="Публичная">Публичная</label>
                    </div>
                    <input className='create__input' type='file' name='background' placeholder='Прикрепите файл для фона' onChange={handleChange} value={formValue.background} required />
                    <button className='create__input create__input_submit' type='submit' onClick={handleSubmit}>Создать игру</button>
                </form>
            </main> :
            <div className='popup'>
                <div className='popup__container'>
                    <div className='popup__flexbox'>
                        <img src={popupLogo} alt='логотип' />
                        <p className='popup__name'>Создание игры</p>
                        <button className='popup__close' onClick={handleCloseClick}></button>
                    </div>
                    <h1 className='popup__header'>1 точка:</h1>
                    <form className='popup__form'>
                        <input className='popup__input' type='text' name='topic'placeholder='Тема' 
                        value={checkpointValue.topic} onChange={handleCheckpointChange} required />
                        <input className='popup__input' type='number' name='task-count'placeholder='Кол-во заданий' 
                        value={checkpointValue.taskCount} onChange={handleCheckpointChange} required />
                        <input className='popup__input' type='url' name='link' placeholder='Ссылка на теорию'
                        value={checkpointValue.link} onChange={handleCheckpointChange} required />
                        <button className='popup__submit' type='submit' onClick={handleCheckpointSubmit}>Добавить точку</button>
                        <button className='popup__submit' type='submit' onClick={handleSubmit}>Создать игру</button>
                    </form>
                </div>
            </div>
            }
        </>
    )
}

export default CreateGame;