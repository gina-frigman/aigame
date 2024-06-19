import './Footer.css'

export default function Footer(props) {

	return (
		<>
			<footer>
				<Link className="header__link" to='/'><img className="header__logo" src={props.name ? gameLogo : Logo} alt="логотип" /></Link>
			{props.name ?
					<img className="header__image" src={aigame} alt="aigame" />
			:
			<nav className="header__navbar">
					<Link to='/' className="header__text">Главная</Link>
					<Link to='/games' className="header__text">Игры</Link>
					<Link to='/create-game' className="header__text">Создать игру</Link>
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
			</footer>
		</>
	)
}