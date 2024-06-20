import Header from '../Header/Header';
import './Main.css'
import mainLogo from './../../images/mainLogo.svg'
import Advantages from '../Advantages/Advantages';
import rocket from "../../images/Rocket.svg"
import luna from "../../images/Luna.svg"
import sun from "../../images/Sun.svg"
import jupiter from "../../images/Jupiter.svg"
import star_round from "../../images/star_round.svg"
import star from "../../images/star.svg"
import nebula from "../../images/nebula.svg"
import comet from "../../images/comet.svg"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Main(props) {
    const navigate = useNavigate()
    let [startLeft, setStartLeft] = useState(0);
    let [endLeft, setEndLeft] = useState(0);

    function radiansToDegrees(rad) {
        return rad / (Math.PI/180);
      }

    // function ani(e) {
    //     setStartLeft(Math.floor(Math.random() * 3000));
    //     setEndLeft(Math.floor(Math.random() * -1000));
    //     e.target.style.rotate = radiansToDegrees(Math)
        
    //     document.documentElement.style
    //     .setProperty('--start-left', `${startLeft}px`);
    //     document.documentElement.style
    //     .setProperty('--end-left', `${endLeft}px`);
    // }

    function handleCreateGameClick() {
        props.isLoggedIn ? navigate("/create-game", {replace: true}) : props.onUnloggedClick()
    }

    return (
        <>
           
            
            <div className="pos-abs">
               <Header isLoggedIn={props.isLoggedIn} onLoginClick={props.onLoginClick} onRegisterClick={props.onRegisterClick} onSignOutClick={props.onSignOutClick} />
            </div>
            <main className='main'>

            <div className='rocket'>
                <img src={rocket} width="250px" alt=""/>
            </div>
            <div className='moon'>
                <img src={luna} width="400px" alt=""/>
            </div>
            
            <div className='main__bg'>
                
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
                </div>

                <div className='nebula'>
                  <img src={nebula} width="733px" alt='' />
                </div>

                <img className='main__logo' width={"50%"} src={mainLogo} alt='ии игра' />
                <p className='main__text'>Инновационная AI игра</p>

                <button className='main__create-game' onClick={handleCreateGameClick}> СОЗДАТЬ ИГРУ </button>

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
            
            <Advantages />
        </>
    )
}

export default Main;