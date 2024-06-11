import { Link } from 'react-router-dom';
import './Profile.css'
import accountIcon from './../../images/profileIcon.svg'
import tasksIcon from './../../images/tasksIcon.svg'
import settingsIcon from './../../images/settingsIcon.svg'

function Profile(props) {
    return(
        <section className='account'>
            <h1 className='account__header'>Личный кабинет</h1>
            <div className='account__flexbox'>
                <nav className='account__navbar'>
                    <img src={accountIcon} className='account__icon' alt='иконка профиля' />
                    <Link to='/tasks' className='account__link'><img src={tasksIcon} className='account__icon' alt='иконка заданий' /></Link>
                    <Link to='/settings' className='account__link'><img src={settingsIcon} className='account__icon' alt='иконка настроек' /></Link>
                </nav>
                <div className='account__data'>
                    <img src={props.avatar} className='account__avatar' alt='аватар' />
                    <div className='account__container'>
                        <p className='account__text'>{props.currentUser.firstname}</p>
                        <p className='account__text'>{props.currentUser.secondname}</p>
                    </div>
                </div>
                <div className='account__statistic'>
                    <h2 className='account__header'>Статистика</h2>
                </div>
            </div>
        </section>
    )
}

export default Profile;