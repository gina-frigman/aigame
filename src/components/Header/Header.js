import "./Header.css"
import Logo from './../../images/logo.svg'
import gameLogo from './../../images/gameLogo.svg'
import aigame from "../../images/name.svg"
import { Link, useNavigate } from "react-router-dom";
import avatar from '../../images/avatar.svg'

function Header(props) {
    const navigate = useNavigate()

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

    function handleClick() {
        navigate("/games", {replace: true})
        // сохранить прогресс 
    }

    return(
        <header className="header">
            <Link className="header__link" to='/'><img className="header__logo" src={props.name ? gameLogo : Logo} alt="логотип" /></Link>
        {props.name ?
            <img className="header__image" src={aigame} alt="aigame" />
        :
        <nav className="header__navbar">
            <Link to='/' className="header__text">Главная</Link>
            <Link to='/games' className={`header__text ${props.isLoggedIn ? '' : "header__text_unlogged"}`}>Игры</Link>
            <Link to='/create-game' className={`header__text ${props.isLoggedIn ? '' : "header__text_unlogged"}`}>Создать игру</Link>
        </nav>
        }
        {props.name ?
            <div className="header__profile">
                <button className="header__button header__button_game" onClick={handleSignOutClick}>Выход</button>
                <button className="header__close" onClick={handleClick}></button>
            </div>       
        : props.isLoggedIn ? 
            <div className="header__profile">
                <button className="header__button" onClick={handleSignOutClick}>Выход</button>
                <Link className="header__link" to='/profile'><img className="header__avatar" src={props.avatar ? props.avatar : avatar} alt="аватар"/></Link>
            </div> :
            <div className="header__auth">
                <button className="header__button header__button_white" onClick={handleLoginClick}>Вход</button>
                <button className="header__button header__button_blue" onClick={handleRegisterClick}>Регистрация</button>
            </div>
        }
        </header>
        
    )
}

export default Header;