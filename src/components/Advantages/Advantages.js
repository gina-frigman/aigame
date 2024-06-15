import './Advantages.css';
import '../Main/Main.css'
import flag from "../../images/flag.svg"
import luna from "../../images/Luna.svg"
import sun from "../../images/Sun.svg"
import jupiter from "../../images/Jupiter.svg"
import star_round from "../../images/star_round.svg"
import star from "../../images/star.svg"
import nebula from "../../images/nebula.svg"
import comet from "../../images/comet.svg"

function Advantages() {
    return(
        <section className='advantages'>
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

            <h1 className='advantages__header'>Преимущества AIGame</h1>
            <ul className='advantages__list'>
                <li className='advantages__paragraph'>Игровой формат обучения помогает пробудить интерес ребенка

                <div className='moon'>
                    <img src={luna} width="400px" alt=""/>
                </div>
                </li>
                <li className='advantages__paragraph'>
                    <div className='descr'>
                        AIGame использует новые технологии в сфере образования
                    </div>
                    <div className='jupiter'>
                        <img src={jupiter} width="500px" alt=""/>
                    </div>
                </li>
                <li className='advantages__paragraph'> 
                    <div className='descr'>
                        В игровой форме легче получать новую информацию
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
                    
                </li>
            </ul>
        </section>
    )   
}

export default Advantages;