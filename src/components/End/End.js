import Header from '../Header/Header';
import './End.css'
import end from "../../images/end.svg"

function End(props) {
    return(
        <section className={`end ${props.isOpened ? '' : 'end_invisible'}`}>
            <Header name="game" onSignOutClick={props.onSignOutClick} /> 
            <img className='end__image' src={end} alt='конец игры' />
        </section>
    )
}

export default End;