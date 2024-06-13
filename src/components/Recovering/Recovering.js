import React from 'react';
import './Recovering.css'
import PopupWithForm from '../PopupWithForm/PopupWithForm';

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

    function handleSubmit(evt) {
        evt.preventDefault()
    }

    return(
        <PopupWithForm isOpened={props.isOpened} name='recovering' formValue={formValue} onChange={handleChange} onSubmit={handleSubmit} onClose={props.onClose} />
    )
}

export default Recovering;