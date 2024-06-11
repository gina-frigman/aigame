import Header from '../Header/Header';
import './Main.css'
import mainLogo from './../../images/mainLogo.svg'
import Advantages from '../Advantages/Advantages';

function Main(props) {
    return (
        <>
            <Header isLoggedIn={props.isLoggedIn} onLoginClick={props.onLoginClick} onRegisterClick={props.onRegisterClick} onSignOutClick={props.onSignOutClick} />
            <main className='main'>
                <img className='main__logo' src={mainLogo} alt='ии игра' />
                <p className='main__text'>Инновационная AI игра</p>
            </main>
            <Advantages />
        </>
    )
}

export default Main;