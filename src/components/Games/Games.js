import { Link } from "react-router-dom";
import Header from "../Header/Header"
import "./Games.css"
import "../Main/Main.css"
import Game from "../Game/Game";
import rocket from "../../images/Rocket.svg"
import luna from "../../images/Luna.svg"
import sun from "../../images/Sun.svg"
import jupiter from "../../images/Jupiter.svg"
import star_round from "../../images/star_round.svg"
import star from "../../images/star.svg"
import nebula from "../../images/nebula.svg"
import comet from "../../images/comet.svg"
import { CurrentUserContext } from "../../context/CurrentUserContext";
import React from "react";

function Games(props) {
    const currentUser = React.useContext(CurrentUserContext)
    return(
        <div className="games__darker">
            <div className="pos-abs">
                <Header isLoggedIn={props.isLoggedIn} onLoginClick={props.onLoginClick} onRegisterClick={props.onRegisterClick} onSignOutClick={props.onSignOutClick} />
            </div>
            <main className="games">

            <div className='rocket'>
                <img src={rocket} width="250px" alt=""/>
            </div>
            <div className='moon'>
                <img src={luna} width="400px" alt=""/>
            </div>
            
            <div className='main__bg-games'>
                
                    <div className='comet comet_top-center'>
                        <img src={comet} alt=""/>
                    </div>
                    <div className='comet comet_top-right'>
                        <img src={comet} alt=""/>
                    </div>
                    <div className='comet comet_right'>
                        <img src={comet} width="110px" alt=""/>
                    </div>
                    <div className='star_round star_round-free'>
                        <img src={star_round} width='10px' alt='' />
                    </div>
                    <div className='starGroup-Rocket group'>

                       <div className='star_round'>
                            <img src={star_round} alt='' />
                        </div>
                        <div className='star'>
                            <img src={star} width='20px' alt='' />
                        </div>
                        <div className='star'>
                            <img src={star} width='45px' alt='' />
                        </div>
                        
                        <div className='star_round'>
                            <img src={star_round} alt='' />
                        </div>
                    </div>

                    <div  className='group starGroup-center '>
                        <div className='star_round'>
                            <img src={star_round} alt='' />
                        </div>
                        <div className='star'>
                            <img src={star} alt='' />
                        </div>
                        <div className='star'>
                            <img src={star} alt='' />
                        </div>
                        
                    </div>

                    <div className='starGroup-moon group'>
                        <div className='star'>
                            <img src={star} alt='' />
                        </div>
                        <div className='star_round'>
                            <img src={star_round} alt='' />
                        </div>
                    </div>
                    
                    <div className='startGroup-bottom group'>
                    <div className='star w-1px'></div>
                        <div className='star'>
                            <img src={star} alt='' />
                        </div>
                                                <div className='star'>
                            <img src={star} alt='' />
                        </div>
                    </div>
                    <div className='startGroup-top group'>
                        <div className='star w-1px'></div>
                        <div className='star'>
                            <img src={star} alt='' />
                        </div>
                        <div className='star'>
                            <img src={star} width="23px" alt='' />
                        </div>
                    </div>
                    
                    <div className='starGroup-jupiter group'>
                        <div className='star'>
                            <img src={star} width='30px' alt='' />
                        </div>
                        <div className='star'>
                            <img src={star} width='25px' alt='' />
                        </div>
                        <div className='star'>
                            <img src={star} width='20px' alt='' />
                      </div>
                    </div>
                   
                    <div className='starRoundGroup-moon group'>
                        <div className='star_round'>
                            <img src={star_round} alt='' />
                        </div>
                        <div className='star_round'>
                            <img src={star_round} width='15px' alt='' />
                        </div>
                    </div>
                    <div className='starRoundGroup-jupiter group'>
                        <div className='star_round'>
                            <img src={star_round} alt='' />
                        </div>
                        <div className='star_round'>
                            <img src={star_round} alt='' />
                        </div>
                    </div>
                   
                    <div className='star star_rocketBottom'>
                        <img src={star} alt='' />
                    </div>
                    <div className='star'>
                        <img src={star} alt='' />
                    </div>
                    <div className='nebula'>
                  <img src={nebula} width="733px" alt='' />
                </div>
                
                </div>

                <div className="games__container">
                    <h1 className="games__header">Игры</h1>
                    <div className="games__cards">
                        {props.games.map(game => (
                            game.status === 'Публичная' ?
                            <Game name={game.title} avatar={game.img} key={game.id} id={game.id} />
                            : game.status === 'public' ?
                            <Game name={game.title} avatar={game.img} key={game.id} id={game.id} />
                            : game.author.id === currentUser.id ?
                            <Game name={game.title} avatar={game.img} key={game.id} id={game.id} /> 
                            : <></>
                        ))}
                    </div>
                    <Link to="/create-game" className="games__button">Создать игру</Link>
                </div>
                
                <div className='sun'>
                <img src={sun} width="400px" alt=""/> 

                <div className='starRoundGroup-sunBottom group'>
                    <div className='star_round'>
                        <img src={star_round} alt='' />
                    </div>
                    <div className='star_round'>
                        <img src={star_round} alt='' />
                    </div>
                </div>

                <div className='starRoundGroup-sunLeft group'>
                    <div className='star_round'>
                        <img src={star_round} alt='' />
                    </div>
                    <div className='star_round'>
                        <img src={star_round} alt='' />
                    </div>
                </div>

                <div className='starRoundGroup-sunTop group'>
                    <div className='star_round'>
                        <img src={star_round} alt='' />
                    </div>
                    <div className='star_round'>
                        <img src={star_round} alt='' />
                    </div>
                </div>
            </div>
            <div className='jupiter'>
                <img src={jupiter} width="500px" alt=""/>
            </div>
                
            </main>
        </div>
    )
}

export default Games;