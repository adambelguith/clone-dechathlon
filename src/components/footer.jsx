import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'
import { ReactComponent as Location } from '../assets/location-pin-svgrepo-com.svg'
import { ReactComponent as Smile } from '../assets/smile-svgrepo-com.svg'
import { ReactComponent as Earth } from '../assets/earth-green-svgrepo-com.svg'
import { ReactComponent as Certif } from '../assets/certificate-solid-svgrepo-com.svg'
import { ReactComponent as Email } from '../assets/message-svgrepo-com.svg'
import { ReactComponent as Facebook } from '../assets/facebook-176-svgrepo-com.svg'
import { ReactComponent as Logo } from '../assets/logo-decathlon-travel-blanc.svg'

function Footer() {
  return (
    <>
    <div className='flat-home-highlights'>
        <div className='inner'>
            <div className='intro'>
                <h2 className='heading'>
                    <span className='brand'>Decathlon Travel</span>                    
                    <span className='strengths'>
                        c'est 4 points forts
                    </span>
                </h2>
                <div className='readmore'>
                    <Link className='link' to=''>En savoir plus</Link>
                </div>
            </div>
            <ul className='list'>
                <li className='item is-expertise'>
                    <Location className='icon' />
                    <h3 className='heading'>Expertise locale & sportive</h3>
                    <p className='content'>
                        Nous identifions les meilleurs voyages sportifs et nous vous mettons en relation avec des experts locaux sélectionnés avec soin.
                    </p>
                </li>
                <li className='item is-expertise'>
                    <Smile className='icon' />
                    <h3 className='heading'>Expertise locale & sportive</h3>
                    <p className='content'>
                        Nous identifions les meilleurs voyages sportifs et nous vous mettons en relation avec des experts locaux sélectionnés avec soin.
                    </p>
                </li>
                <li className='item is-expertise'>
                    <Earth className='icon' />
                    <h3 className='heading'>Expertise locale & sportive</h3>
                    <p className='content'>
                        Nous identifions les meilleurs voyages sportifs et nous vous mettons en relation avec des experts locaux sélectionnés avec soin.
                    </p>
                </li>
                <li className='item is-expertise'>
                    <Certif className='icon' />
                    <h3 className='heading'>Expertise locale & sportive</h3>
                    <p className='content'>
                        Nous identifions les meilleurs voyages sportifs et nous vous mettons en relation avec des experts locaux sélectionnés avec soin.
                    </p>
                </li>
            </ul>
        </div>
    </div>
    <footer className='front-footer'>
        <div className='inner'>
            <div className='logo'>
                <Logo />
            </div>
            <div className='columns'>
                <div className='contact front-footer-contact'>
                    <div className='opening'>
                        Nos conseillers sont à votre écoute du lundi au samedi de 9h à 18h.
                    </div>
                    <div className='actions'>
                        <div className='action'>
                            <Link className='link email' to=''>
                                <Email className='icon' />
                                Contactez-nous
                            </Link>
                        </div>
                        <div className='action'>
                            <Link className='link tel' to=''>
                                <Email className='icon'/>
                                Contactez-nous
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='nav front-footer-nav'>
                    <nav className='menu front-footer-nav-menu'>
                        <ul className='list'>
                            <li className='entry'>
                                <Link className='link has-url' to=''>
                                    blog
                                </Link>
                            </li>
                            <li className='entry'>
                                <Link className='link has-url' to=''>
                                    blog
                                </Link>
                            </li>
                            <li className='entry'>
                                <Link className='link has-url' to=''>
                                    blog
                                </Link>
                            </li>
                            <li className='entry'>
                                <Link className='link has-url' to=''>
                                    blog
                                </Link>
                            </li>
                            <li className='entry'>
                                <Link className='link has-url' to=''>
                                    blog
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    
                </div>
                <div className='information front-footer-information'>
                        <div className='newsletter'>
                            <div className='heading'>newsletter</div>
                            <p className='text' >
                                Recevez par e-mail nos dernières nouvelles, nos reportages et nos idées inspirantes pour vos prochaines aventures sportives !
                            </p>
                            <Link className='link'>je m'incris</Link>
                        </div>
                        <nav className='social'>
                            <a className='link'>
                                <Facebook className='icon' />
                            </a>
                            <a className='link'>
                                <Facebook className='icon' />
                            </a>
                            <a className='link'>
                                <Facebook className='icon' />
                            </a>
                        </nav>
                    </div>
            </div>
        </div>
    </footer>


    </>
  )
}

export default Footer