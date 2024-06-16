import React from "react";
import Header from "../Header/Header";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./GameMap.css"

function GameMap(props) {
    const [taskNumber, setTaskNumber] = React.useState(1)
    const [taskAmount, setTaskAmount] = React.useState(0)
    const checkpointNumbers = []
    for (let i = 1; i < Number(props.checkpointAmount)+1; i++) {
        checkpointNumbers.push(i)
    }

    function handleClick(evt) {
        setTaskAmount(evt.target.getAttribute('taskCount'))
        props.onClick(evt.target.getAttribute('key'))
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

    function handleSubmit(evt) {
        evt.preventDefault()
        props.onSubmit(/* sth */)
        setTaskNumber(taskNumber +1)
    }    

    return(
        <>
            <Header name="game" />
            <section className="map">
                <div className="map__checkpoints">
                    {checkpointNumbers.map(num => (
                        num % 3 === 0 ?
                            <button className="map__checkpoint map__checkpoint_green" onClick={handleClick} taskCount={props.game[num-1].task_count} key={num}>{num}</button>
                        : num % 2 === 0 ?
                            <button className="map__checkpoint map__checkpoint_yellow" onClick={handleClick} taskCount={props.game[num-1].task_count} key={num}>{num}</button>
                        : <button className="map__checkpoint map__checkpoint_blue" onClick={handleClick} taskCount={props.game[num-1].task_count} key={num}>{num}</button>
                    ))}
                </div>
                <button className="map__button" type="submit">Завершить</button>
            </section>
            <PopupWithForm name="answer" isOpened={props.isOpened} onClose={props.onClose} formValue={formValue} onChange={handleChange} checkpointNumber={props.checkpointNumber} 
            taskNumber={taskNumber} taskAmount={taskAmount} onSubmit={handleSubmit} />
        </>
    )
}

export default GameMap;