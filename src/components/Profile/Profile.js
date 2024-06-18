import './Profile.css'
import avatar from '../../images/avatar.svg'
import Header from '../Header/Header';
import { CurrentUserContext } from '../../Contexts/CurrentUserContext';
import React from 'react';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext)
    console.log(currentUser)
    return(
        <>       
            <Header isLoggedIn={props.isLoggedIn} onSignOutClick={props.onSignOutClick} />
            <section className='account'>
                <div className='account__data'>
                <h1 className='account__header'>Личный кабинет</h1>
                    <div className='account__flexbox'>
                        <img src={props.avatar ? props.avatar : avatar} className='account__avatar' alt='аватар' />
                        <div className='account__container'>
                            <p className='account__text'>{currentUser[0].firstname}</p>
                            <p className='account__text'>{currentUser[0].lastname}</p>
                        </div>
                    </div>
                        <p className='account__text account__text_class'>{currentUser[0].userClass}</p>
                        <div className='account__flex-box'>
                            <p className='account__text accont__text_short'>{currentUser[0].email}</p>
                            <p className='account__text accont__text_short'>{currentUser[0].username}</p>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Profile;