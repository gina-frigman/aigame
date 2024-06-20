import React from 'react';
import Header from '../Header/Header';
import './CreateGame.css'
import '../Main/Main.css'
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import rocket from "../../images/Rocket.svg"
import luna from "../../images/Luna.svg"
import sun from "../../images/Sun.svg"
import jupiter from "../../images/Jupiter.svg"
import star_round from "../../images/star_round.svg"
import star from "../../images/star.svg"
import nebula from "../../images/nebula.svg"
import comet from "../../images/comet.svg"

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
            checkpoint: checkpoints,
            [name]: value
        })
    }
    console.log(formValue.checkpoint)

    function handleCheckpointChange(evt) {
        const {name, value} = evt.target
        setCheckpointValue({
            ...checkpointValue,
            [name]: value
        })
    }

    function handleCheckpointSubmit() {
        setCheckpointNumber(checkpointNumber+1)
        const checkpoints_copy= checkpoints.slice()
        checkpoints_copy.push(checkpointValue)
        setCheckpoints(checkpoints_copy)
        setCheckpointValue({
            taskCount: '',
            topic: '',
            link: '',
        })
        setFormValue({
            ...formValue,
            checkpoint: checkpoints
        })
    }

    function handleClassClick() {
        setIsClassOpened(!isClassOpened)
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
            <div className="pos-abs">
                <Header isLoggedIn={props.isLoggedIn} onLoginClick={props.onLoginClick} onRegisterClick={props.onRegisterClick} onSignOutClick={props.onSignOutClick} />
            </div>
            
            <main className='create main'>
                <div className='rocket'>
                    <img src={rocket} width="250px" alt=""/>
                </div>
                <div className='moon'>
                    <img src={luna} width="350px" alt=""/>
                </div>
                <div className='main__bg'>
                        <div className='comet comet_top-center'>
                            <img src={comet} alt=""/>
                        </div>
                        <div className='comet comet_top-right'>
                            <img src={comet} alt=""/>
                        </div>
                        <div className='comet comet_right'>
                            <img src={comet} width="110px" alt=""/>
                        </div>
                        <div className='star_round star_round-free'>
                            <img src={star_round} width='10px' alt='' />
                        </div>
                        <div className='starGroup-Rocket group'>

                           <div className='star_round'>
                                <img src={star_round} alt='' />
                            </div>
                            <div className='star'>
                                <img src={star} width='20px' alt='' />
                            </div>
                            <div className='star'>
                                <img src={star} width='45px' alt='' />
                            </div>

                            <div className='star_round'>
                                <img src={star_round} alt='' />
                            </div>
                        </div>

                        <div  className='group starGroup-center '>
                            <div className='star_round'>
                                <img src={star_round} alt='' />
                            </div>
                            <div className='star'>
                                <img src={star} alt='' />
                            </div>
                            <div className='star'>
                                <img src={star} alt='' />
                            </div>

                        </div>

                        <div className='starGroup-moon group'>
                            <div className='star'>
                                <img src={star} alt='' />
                            </div>
                            <div className='star_round'>
                                <img src={star_round} alt='' />
                            </div>
                        </div>

                        <div className='startGroup-bottom group'>
                        <div className='star w-1px'></div>
                            <div className='star'>
                                <img src={star} alt='' />
                            </div>
                                                    <div className='star'>
                                <img src={star} alt='' />
                            </div>
                        </div>
                        <div className='startGroup-top group'>
                            <div className='star w-1px'></div>
                            <div className='star'>
                                <img src={star} alt='' />
                            </div>
                            <div className='star'>
                                <img src={star} width="23px" alt='' />
                            </div>
                        </div>

                        <div className='starGroup-jupiter group'>
                            <div className='star'>
                                <img src={star} width='30px' alt='' />
                            </div>
                            <div className='star'>
                                <img src={star} width='25px' alt='' />
                            </div>
                            <div className='star'>
                                <img src={star} width='20px' alt='' />
                          </div>
                        </div>

                        <div className='starRoundGroup-moon group'>
                            <div className='star_round'>
                                <img src={star_round} alt='' />
                            </div>
                            <div className='star_round'>
                                <img src={star_round} width='15px' alt='' />
                            </div>
                        </div>
                        <div className='starRoundGroup-jupiter group'>
                            <div className='star_round'>
                                <img src={star_round} alt='' />
                            </div>
                            <div className='star_round'>
                                <img src={star_round} alt='' />
                            </div>
                        </div>

                        <div className='star star_rocketBottom'>
                            <img src={star} alt='' />
                        </div>
                        <div className='star'>
                            <img src={star} alt='' />
                        </div>
                        <div className='nebula'>
                            <img src={nebula} width="733px" alt='' />
                        </div>
                </div>

                <div className="bg-card">
                    <h1 className='create__header'>Создание игры</h1>
                    <form className='create__form'>
                        <input className='create__input create_form-item' type='text' name='name' placeholder='Введите название игры' onChange={handleChange} value={formValue.name} required />
                        <div className='create__input_box'>
                            <button className='create__input create__input_box-item create_form-item' type='button' onClick={handleClassClick}> 
                                <p className='text_class'>
                                   {` ${formValue.class !== '' ? formValue.class : "Выберите класс, на который рассчитана игра"}`}
                                </p>
                            </button>
                            <div  className={`create__container create_form-item ${isClassOpened ? 'create__container_opened' : 'create__container_close'}`}>
                                <div className="create__container_item"> 
                                    <input className='create__input create__input_class' id='1 класс' type='radio' name='class' value='1 класс' onClick={handleClassClick} onChange={handleChange} />
                                    <label className='create__label' htmlFor="1 класс">1 класс</label>
                                </div>
                                <div className="create__container_item"> 
                                    <input className='create__input create__input_class' id='2 класс' type='radio' name='class' value='2 класс' onClick={handleClassClick} onChange={handleChange} />
                                    <label className='create__label' htmlFor="2 класс">2 класс</label>
                                </div>
                                <div className="create__container_item"> 
                                    <input className='create__input create__input_class' id='3 класс' type='radio' name='class' value='3 класс' onClick={handleClassClick} onChange={handleChange} />
                                    <label className='create__label' htmlFor="3 класс">3 класс</label>
                                </div>
                                <div className="create__container_item"> 
                                    <input className='create__input create__input_class' id='4 класс' type='radio' name='class' value='4 класс' onClick={handleClassClick} onChange={handleChange} />
                                    <label className='create__label' htmlFor="4 класс">4 класс</label>
                                </div>
                                <div className="create__container_item"> 
                                    <input className='create__input create__input_class' id='5 класс' type='radio' name='class' value='5 класс' onClick={handleClassClick} onChange={handleChange} />
                                    <label className='create__label' htmlFor="5 класс">5 класс</label>
                                </div>
                                <div className="create__container_item"> 
                                    <input className='create__input create__input_class' id='6 класс' type='radio' name='class' value='6 класс' onClick={handleClassClick} onChange={handleChange} />
                                    <label className='create__label' htmlFor="6 класс">6 класс</label>
                                </div>
                                <div className="create__container_item"> 
                                    <input className='create__input create__input_class' id='7 класс' type='radio' name='class' value='7 класс' onClick={handleClassClick} onChange={handleChange} />
                                    <label className='create__label' htmlFor="7 класс">7 класс</label>
                                </div>
                                <div className="create__container_item"> 
                                    <input className='create__input create__input_class' id='8 класс' type='radio' name='class' value='8 класс' onClick={handleClassClick} onChange={handleChange} />
                                    <label className='create__label' htmlFor="8 класс">8 класс</label>
                                </div>
                                <div className="create__container_item"> 
                                    <input className='create__input create__input_class' id='9 класс' type='radio' name='class' value='9 класс' onClick={handleClassClick} onChange={handleChange} />
                                    <label className='create__label' htmlFor="9 класс">9 класс</label>
                                </div>
                                    <div className="create__container_item"> 
                                    <input className='create__input create__input_class' id='10 класс' type='radio' name='class' value='10 класс' onClick={handleClassClick} onChange={handleChange} />
                                    <label className='create__label' htmlFor="10 класс">10 класс</label>
                                </div>
                                <div className="create__container_item"> 
                                    <input className='create__input create__input_class' id='11 класс' type='radio' name='class' value='11 класс' onClick={handleClassClick} onChange={handleChange} />
                                    <label className='create__label' htmlFor="11 класс">11 класс</label>
                                </div>
                            </div>
                        </div>

                        <div className='count_checkpoints create_form-item'>
                            <input className='create__input create_form-item' type='text' name='count_checkpoints' placeholder='Количество точек с заданиями' value={formValue.checkpoints} onChange={handleChange} />
                        </div>

                        <div className='create__flexbox create_form-item disable-bg'>
                            <label className='create__label create__label_status' for="Приватная">
                                <input style={{display: "none"}} className='create__input create__input_radio' id='Приватная' type='radio' name='status' value={'Приватная'} onChange={handleChange} />
                                <span className="radio"></span>
                                Приватная
                            </label>
                            <label className='create__label create__label_status' for="Публичная">
                               <input style={{display: "none"}} className='create__input create__input_radio' id='Публичная' type='radio' name='status' value={'Публичная'} onChange={handleChange} />
                               <span className="radio"></span>
                                Публичная
                            </label>
                        </div>


                        <div className='create_form-item create__input_file'> 
                            <label className='create__label'>
                                <p className='text'>
                                    Прикрепите файл для обложки
                                </p>
                                <input className='create__input create__input_file-item create_form-item' type='file' name='background' placeholder='Прикрепите файл для фона' onChange={handleChange} value={formValue.background} required />
                            </label>
                        </div>
                        <button className='create__input create__input_submit create_form-item' type='submit' name='createGame' id='createGame' onClick={handleSubmit}>Создать игру</button>
                    </form>
                </div>
                <div className='sun'>
                    <img src={sun} width="400px" alt=""/> 

                    <div className='starRoundGroup-sunBottom group'>
                        <div className='star_round'>
                            <img src={star_round} alt='' />
                        </div>
                        <div className='star_round'>
                            <img src={star_round} alt='' />
                        </div>
                    </div>

                    <div className='starRoundGroup-sunLeft group'>
                        <div className='star_round'>
                            <img src={star_round} alt='' />
                        </div>
                        <div className='star_round'>
                            <img src={star_round} alt='' />
                        </div>
                    </div>

                    <div className='starRoundGroup-sunTop group'>
                        <div className='star_round'>
                            <img src={star_round} alt='' />
                        </div>
                        <div className='star_round'>
                            <img src={star_round} alt='' />
                        </div>
                    </div>
                </div>
                <div className='jupiter'>
                    <img src={jupiter} width="500px" alt=""/>
                </div>
            </main>
            
            <PopupWithForm name='create' formValue={formValue} checkpointValue={checkpointValue} onCheckpointChange={handleCheckpointChange} onCheckpointSubmit={handleCheckpointSubmit}
            onClose={handleCloseClick} onSubmit={handleSubmit} checkpointNumber={checkpointNumber} isOpened={props.isOpened} />
        </>
    )
}

export default CreateGame;