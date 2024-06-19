import { Link } from 'react-router-dom'
import './Game.css'

function Game(props) {
    return(
        <section className="game">
            {props.avatar ?
            <img src={props.avatar} className="game__avatar" alt="обложка игры" />
            :
            <p className='game__avatar game__avatar_no'>Обложка игры</p>}
            <h1 className="game__name">{props.name}</h1>
            <Link to={`/map#${props.id}`} className="game__button">Играть</Link>
        </section>
    )
}

export default Game