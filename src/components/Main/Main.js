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

function Main(props) {
    return (
        <>
            <div className='rocket'>
                <img src={rocket} width="250px" alt=""/>
            </div>
            <div className='moon'>
                <img src={luna} width="400px" alt=""/>
            </div>
            <div className="pos-abs">
               <Header isLoggedIn={props.isLoggedIn} onLoginClick={props.onLoginClick} onRegisterClick={props.onRegisterClick} onSignOutClick={props.onSignOutClick} />
            </div>
            <main className='main'>
            
                <div className='main__bg'>
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
            </main>
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
            <Advantages />
        </>
    )
}

export default Main;