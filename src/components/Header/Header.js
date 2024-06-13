import "./Header.css"
import Logo from './../../images/logo.svg'
import { Link } from "react-router-dom";

function Header(props) {
    function handleLoginClick(evt) {
        evt.preventDefault()
        props.onLoginClick()
    }

    function handleRegisterClick(evt) {
        evt.preventDefault()
        props.onRegisterClick()
    }

    function handleSignOutClick(evt) {
        evt.preventDefault()
        props.onSignOutClick()
    }

    return(
        <header className="header">
            <Link className="header__link" to='/'><img className="header__logo" src={Logo} alt="логотип" /></Link>
            <nav className="header__navbar">
                <Link to='/' className="header__text">Главная</Link>
                <Link to='/games' className="header__text">Игры</Link>
                <Link to='/create-game' className="header__text">Создать игру</Link>
            </nav>
            {props.isLoggedIn ? 
                <div className="header__auth">
                    <button className="header__button" onClick={handleLoginClick}>Вход</button>
                    <button className="header__button" onClick={handleRegisterClick}>Регистрация</button>
                </div> :
                <div className="header__profile">
                    <button className="header__button" onClick={handleSignOutClick}>Выйти</button>
                    <Link className="header__link" to='/profile'><img src={props.avatar} alt="аватар"/></Link>
                </div>
            }
            
        </header>
    )
}

export default Header;