import React from "react";
import Header from "../Header/Header";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./GameMap.css"

function GameMap(props) {
    const [taskNumber, setTaskNumber] = React.useState(1)
    const checkpointNumbers=[]
    for (let i = 1; i < /*props.checkpoints.length+1*/ 20; i++) {
        checkpointNumbers.push(i)        
    }

    function handleClick(evt) {
        props.onClick(evt.target.id)
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
                            <button className="map__checkpoint map__checkpoint_green" onClick={handleClick} id={num}>{num}</button>
                        : num % 2 === 0 ?
                            <button className="map__checkpoint map__checkpoint_yellow" onClick={handleClick} id={num}>{num}</button>
                        : <button className="map__checkpoint map__checkpoint_blue" onClick={handleClick} id={num}>{num}</button>
                    ))}
                </div>
                <button className="map__button" type="submit">Завершить</button>
            </section>
            <PopupWithForm name="answer" isOpened={props.isOpened} onClose={props.onClose} formValue={formValue} onChange={handleChange} checkpointNumber={props.checkpointNumber} 
            taskNumber={taskNumber} onSubmit={handleSubmit} taskCount={props.taskCount} />
        </>
    )
}

export default GameMap;