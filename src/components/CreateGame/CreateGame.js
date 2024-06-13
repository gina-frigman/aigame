import React from 'react';
import Header from '../Header/Header';
import './CreateGame.css'
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function CreateGame(props) {
    const [isClassOpened, setIsClassOpened] = React.useState(false)
    const [level, setLevel] = React.useState(0)
    const [checkpointNumber, setCheckpointNumber] = React.useState(1)
    const [checkpointValue, setCheckpointValue] = React.useState({
        taskCount: '',
        topic: '',
        link: '',
    })
    const [checkpoints, setCheckpoints] = React.useState([])
    const [formValue, setFormValue] = React.useState({
        name: '',
        class: '',
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

    function handleCheckpointSubmit() {
        setCheckpointNumber(checkpointNumber +1)
        const checkpoints_copy= checkpoints.slice()
        checkpoints_copy.push(checkpointValue)
        setCheckpoints(checkpoints_copy)
        setCheckpointValue({
            taskCount: '',
            topic: '',
            link: '',
        })
        console.log(checkpoints)
        console.log(checkpointValue)
    }

    function handleClassClick() {
        setIsClassOpened(true)
    }

    function handleCloseClick() {
        props.onClose()
        setLevel(0)
        setCheckpointNumber(1)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        setLevel(level + 1)
        if (level === 0) {
            props.onCheckpointClick()
        }
        else if (level === 2) {
            props.onSubmit(formValue)
            setLevel(0)
        }
    }

    return(
        <>
            <Header isLoggedIIn={props.isLoggedIIn} onLoginClick={props.onLoginClick} onRegisterClick={props.onRegisterClick} onSignOutClick={props.onSignOutClick} />
            <main className='create'>
                <h1 className='create__header'>Создание игры</h1>
                <form className='create__form'>
                    <input className='create__input' type='text' name='name' placeholder='Введите название игры' onChange={handleChange} value={formValue.name} required />
                    <button className='create__input' onClick={handleClassClick}>Выберите класс, на который рассчитана игра</button>
                    <div className={`create__container ${isClassOpened ? 'create__container_opened' : ''}`}>
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
                    <div className='create__flexbox'>
                        <input className='create__input create__input_radio' id='Приватная' type='radio' name='status' value={formValue.status} onChange={handleChange} />
                        <label className='create__label' for="Приватная">Приватная</label>
                        <input className='create__input create__input_radio' id='Публичная' type='radio' name='status' value={formValue.status} onChange={handleChange} />
                        <label className='create__label' for="Публичная">Публичная</label>
                    </div>
                    <input className='create__input' type='file' name='background' placeholder='Прикрепите файл для фона' onChange={handleChange} value={formValue.background} required />
                    <button className='create__input create__input_submit' type='submit' onClick={handleSubmit}>Создать игру</button>
                </form>
            </main>
            <PopupWithForm name='create' formValue={formValue} checkpointValue={checkpointValue} onCheckpointChange={handleCheckpointChange} onCheckpointSubmit={handleCheckpointSubmit}
            onClose={handleCloseClick} onSubmit={handleSubmit} checkpointNumber={checkpointNumber} isOpened={props.isOpened} />
        </>
    )
}

export default CreateGame;