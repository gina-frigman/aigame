import { Link } from "react-router-dom";
import Header from "../Header/Header"
import "./Games.css"
import Game from "../Game/Game";

import popupLogo from '../../images/popupLogo.svg'
import logo from '../../images/logo.svg'
import background from '../../images/backgroundSpace.svg'

function Games(props) {
    return(
        <>
            <Header />
            <main className="games">
                <div className="games__container">
                    <h1 className="games__header">Игры</h1>
                    <div className="games__cards">

                        {/* {props.games.forEach(game => {
                            <Game name={game.name} avatar={game.background} id={game.id} />
                        })} */} 
                        <Game name="meow" id={5} />
                        <Game name="meoow" id={6} avatar={popupLogo} />
                        <Game name="meooow" id={7} avatar={logo} />
                        <Game name="meoooow" id={8} avatar={background} />
                        {/* сейчас используем список игр, тк в апи их пока нет */}
                    </div>
                    <Link to="/create-game" className="games__button">Создать игру</Link>
                </div>
            </main>
        </>
    )
}

export default Games;