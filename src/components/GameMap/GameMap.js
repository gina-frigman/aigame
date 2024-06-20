import React from "react";
import Header from "../Header/Header";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./GameMap.css"
import End from "../End/End";

function GameMap(props) {
    const [taskNumber, setTaskNumber] = React.useState(1)
    const [taskAmount, setTaskAmount] = React.useState(0)
    const [checkpointNumber, setCheckpointNumber] = React.useState(0)
    const [inActive, setInActive] = React.useState('')
    const checkpointNumbers = []
    for (let i = 1; i < Number(props.checkpointAmount)+1; i++) {
        checkpointNumbers.push(i)
    }

    console.log(props.taskAnswer)

    function handleClick(evt) {
        const numberTask = Number(evt.target.getAttribute('taskCount'))-props.progress[Number(evt.target.getAttribute('num'))-1]+1
        setTaskNumber(numberTask)
        setCheckpointNumber(evt.target.getAttribute('num'))
        setTaskAmount(evt.target.getAttribute('taskCount'))
        props.onClick(evt.target.getAttribute('num'))
    }
    
    const [formValue, setFormValue] = React.useState({
        answer: ''
    })

    function handleChange(evt) {
        const {name, value} = evt.target
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    function handleClose() {
        props.onClose()
        setTaskNumber(1)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        if (formValue.answer === props.taskAnswer) {
            setFormValue({
                answer: ''
            })
            props.onSubmit(taskNumber)
            if (taskNumber < taskAmount) {
                setTaskNumber(taskNumber +1)
                props.onClick(checkpointNumber)                
            } else {
                setInActive("map__checkpoint_inactive")
                handleClose()
            }
        } else {
            setFormValue({
                answer: 'ответ неверный'
            })
        }
    }

    return(
        <>
            <Header name="game" onSignOutClick={props.onSignOutClick} />
            <section className="map">
                <div className="map__checkpoints">
                    {checkpointNumbers.map(num => ( 
                        <div className="map_check">
                            
                            <button className={`map__checkpoint  ${props.progress[num-1] === 0 ? "map__checkpoint_inactive" : num === Number(checkpointNumber) ? inActive : ''} ${num % 3 === 0 ? 'map__checkpoint_green' : num % 2 === 0 ? 'map__checkpoint_yellow' : 'map__checkpoint_blue'} `} 
                        onClick={handleClick} 
                        taskCount={props.game.checkpoint[num-1].task_count} 
                        id={props.game.checkpoint[num-1].id} 
                        name={String(num)} num={num} key={num}>{num}</button>
                        </div>
                    ))}
                </div>
                <button className="map__button" onClick={props.onEndGame} type="submit">Завершить</button>
            </section>
            <PopupWithForm name="answer" isOpened={props.isOpened} onClose={handleClose} formValue={formValue} onChange={handleChange} checkpointNumber={props.checkpointNumber} 
            taskNumber={taskNumber} taskText={props.taskText} taskAmount={taskAmount} onSubmit={handleSubmit} />
            <End isOpened={props.isEndOpened} onSignOutClick={props.onSignOutClick} />
        </>
    )
}

export default GameMap;