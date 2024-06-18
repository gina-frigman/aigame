import { Link } from "react-router-dom";
import Header from "../Header/Header"
import "./Games.css"
import Game from "../Game/Game";

function Games(props) {
    return(
        <>
            <Header isLoggedIn={props.isLoggedIn} onLoginClick={props.onLoginClick} onRegisterClick={props.onRegisterClick} onSignOutClick={props.onSignOutClick} />
            <main className="games">
                <div className="games__container">
                    <h1 className="games__header">Игры</h1>
                    <div className="games__cards">
                        {props.games.map(game => (
                            <Game name={game.title} avatar={game.img} key={game.id} id={game.id} />
                        ))}
                    </div>
                    <Link to="/create-game" className="games__button">Создать игру</Link>
                </div>
            </main>
        </>
    )
}

export default Games;