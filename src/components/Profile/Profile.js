import './Profile.css'
import avatar from '../../images/avatar.svg'
import Header from '../Header/Header';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import React from 'react';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext)

    return(
        <>       
            <Header isLoggedIn={props.isLoggedIn} onSignOutClick={props.onSignOutClick} />
            <section className='account'>
                <div className='account__data'>
                    <h1 className='account__header'>Личный кабинет</h1>
                    <div className='account__flexbox'>
                        <img src={props.avatar ? props.avatar : avatar} className='account__avatar' alt='аватар' />
                        <div className='account__container'>
                            <p className='account__text'>{currentUser.firstname}</p>
                            <p className='account__text'>{currentUser.lastname}</p>
                        </div>
                    </div>
                    <div className='account__flex-box'>
                        <p className='account__text accont__text_short'>{currentUser.email}</p>
                        <p className='account__text accont__text_short'>{currentUser.login}</p>
                    </div>
                    </div>
            </section>
        </>
    )
}

export default Profile;