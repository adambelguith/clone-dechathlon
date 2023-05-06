import React,{useState, useRef,useEffect} from 'react'
import './navbar.css'
import { Link ,useHistory } from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/logo-decathlon-travel-blanc.svg'
const NavBar = () => {

const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [isOpendes, setIsOpendes] = useState(false);
  const [isOpensport, setIsOpensport] = useState(false);
  const [isOpenins, setIsOpenins] = useState(false);

  const handelclickdes =() => {setIsOpendes(!isOpendes)};
  const handelclicksport = () => {setIsOpensport(!isOpensport)};
  const handelclickins =() => {setIsOpenins(!isOpenins)};
   useEffect(()=>{
  const handleClickOutdes = (event) => {
    if (ref1.current && !ref1.current.contains(event.target)) {
      setIsOpendes(false);
    }
    if (ref2.current && !ref2.current.contains(event.target)) {
      setIsOpensport(false);
    }
    if (ref3.current && !ref3.current.contains(event.target)) {
      setIsOpenins(false);
    }
  }
const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
     setIsOpendes(false);
      setIsOpensport(false);
      setIsOpenins(false);
    }
  }

 
document.addEventListener('mousedown', handleClickOutdes);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutdes);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }
  ,[ref1,ref2,ref3]);

const [navitem, setNavItem] =useState(false);

const changeNav =() => {setNavItem(!navitem)};

  const [showSubcategory, setShowSubcategory] = useState(false);
  const [currentSubcategory, setCurrentSubcategory] = useState(null);

  const handleMouseEnter = (subcategory) => {
    setShowSubcategory(true);
    setCurrentSubcategory(subcategory);
  }


  const [showImage, setShowImage] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  const handleMousephoto = (photo) => {
    setShowImage(true);
    setCurrentPhoto(photo);
  }
  const handleMousePhoto = () => {
    setShowImage(false);
    setCurrentPhoto(null);
  }





  return (
   <div className='front-banner' id='front-banner'>
      <div className='front-banner__wrapper front-banner__wrapper--full'>
        <div className={navitem ? 'inner is-active':'inner' } >
          <Link className='responsive-menulink front-banner-responsive-menulink' onClick={changeNav} >
            <svg className='icon svg_inactive icon-inactive' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 15 7" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
            <svg className='icon icon-active' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>
          </Link>
          <div className='logo front-banner-logo'>
            <Link className='link' to=''>
              <Logo />
            </Link>
          </div>
          <nav className='menu front-banner-menu' id='front-banner-menu'>
            <ul className='list'>
              <li className=  {`item front-banner-menu-item has-submenu ${isOpendes ? 'is-active' : isOpenins || isOpensport? 'is-hidden' : '' }`}>
                <Link className={`link ${navitem ?'activea': ''}`} onClick={handelclickdes} ref={ref1}>
                  Destinations
                </Link>
              </li>
              <li className={`item front-banner-menu-item has-submenu ${isOpensport ? 'is-active' : isOpenins || isOpendes? 'is-hidden' : ''}`}>
                <Link className={`link ${navitem ?'activea': ''}`} onClick={handelclicksport} ref={ref2}>
                  sport
                </Link>
              </li>
              <li className={`item front-banner-menu-item has-submenu ${isOpenins ? 'item front-banner-menu-item has-submenu is-active' : isOpensport || isOpendes? 'is-hidden' : ''}`}>
                <Link className={`link ${navitem ?'activea': ''}`} onClick={handelclickins} ref={ref3}>
                  Inspirez-moi
                </Link>
              </li>
              <li className={`item front-banner-menu-item has-submenu ${isOpensport || isOpendes || isOpenins ? 'is-hiddenblog' : ''}`}>
                <Link className='link' to=''>
                  Blog
                </Link>
              </li>
            </ul>
              {isOpendes &&(
                <div className='submenu front-banner-submenu is-visible' id='front-banner-submenu-destinations'>
                  <div className={navitem ? 'inner is-active':'inner' }>
                    <ul className='items'>
                      <li className={currentSubcategory === 'subcategory1' ? 'item is-active' : 'item'}>
                        <Link className='link has-subitems' onMouseEnter={() => handleMouseEnter('subcategory1')} > AFRIQUE</Link>
                      </li>
                      <li className={currentSubcategory === 'subcategory2' ? 'item is-active' : 'item'}>
                        <Link className='link has-subitems' onMouseEnter={() => handleMouseEnter('subcategory2')} > AMéRIQUE</Link>
                      </li>
                      <li className={currentSubcategory === 'subcategory3' ? 'item is-active' : 'item'}>
                        <Link className='link has-subitems' onMouseEnter={() => handleMouseEnter('subcategory3')} > ASIE</Link>
                      </li>
                      <li className={currentSubcategory === 'subcategory4' ? 'item is-active' : 'item'}>
                        <Link className='link has-subitems' onMouseEnter={() => handleMouseEnter('subcategory4')} > EUROPE</Link>
                      </li> 
                      <li className={currentSubcategory === 'subcategory5' ? 'item is-active' : 'item'}>
                        <Link className='link has-subitems' onMouseEnter={() => handleMouseEnter('subcategory5')} > FRANCE</Link>
                      </li>
                      <li className={currentSubcategory === 'subcategory6' ? 'item is-active' : 'item'}>
                        <Link className='link has-subitems' onMouseEnter={() => handleMouseEnter('subcategory6')} > MOYEN ORIENT</Link>
                      </li>
                    </ul>
                    {showSubcategory && (
                    <ul className="subitems is-visible">
                     {currentSubcategory === 'subcategory1' && (
                        <>
                          <li className='subitem'><Link to='/voyage?country=afrique' className='link'onMouseEnter={() => handleMousephoto("https://photos.altai-travel.com/800x0/observation-des-girafe-en-afrique-du-sud-23027.jpg")} onMouseLeave={handleMousePhoto} >Afrique du Sud</Link></li>
                          <li className='subitem'><Link className='link' onMouseEnter={() => handleMousephoto("https://photos.altai-travel.com/800x0/veine-de-roche-volcanique-sous-fond-docean-lors-de-la-randonnee-cotiere-a-santo-antao-14016.jpg")} onMouseLeave={handleMousePhoto} >Cap Vert</Link></li>
                          <li className='subitem'><Link className='link'onMouseEnter={() => handleMousephoto('https://media.decathlontravel.com/assets/V7IU57.jpg')} onMouseLeave={handleMousePhoto}>Madagascar</Link></li>
                          <li className='subitem'><Link className='link'onMouseEnter={() => handleMousephoto('https://photos.altai-travel.com/800x0/trek-dans-le-desert-marocain-19794.jpg')} onMouseLeave={handleMousePhoto}>Maroc</Link></li>
                          <li className='subitem'><Link className='link' onMouseEnter={() => handleMousephoto('https://media.decathlontravel.com/assets/VBUIR1.jpg')}onMouseLeave={handleMousePhoto} >Mauritanie</Link></li>
                          <li className='subitem'><Link className='link' onMouseEnter={() => handleMousephoto('https://photos.altai-travel.com/800x0/dans-la-descente-du-piton-des-neiges-10534.jpg')}onMouseLeave={handleMousePhoto} >Réunion</Link></li>
                          <li className='subitem'><Link className='link' onMouseEnter={() => handleMousephoto('https://media.decathlontravel.com/assets/WS7VW0.jpg')}onMouseLeave={handleMousePhoto} >Sénégal</Link></li>  
                          <li className='subitem'><Link className='link' onMouseEnter={() => handleMousephoto('https://photos.altai-travel.com/800x0/ascension-du-kilimandjaro-20428.jpg')}onMouseLeave={handleMousePhoto} >Tanzanie</Link></li>
                        </>
                      )} 
                      {currentSubcategory === 'subcategory2' && (
                        <>
                          <li className='subitem'><Link className='link' onMouseEnter={() => handleMousephoto('photo1')} onMouseLeave={handleMousePhoto}>Brésil</Link></li>
                          <li className='subitem'><Link className='link' onMouseEnter={() => handleMousephoto('photo1')} onMouseLeave={handleMousePhoto}>Canada</Link></li>
                          <li className='subitem'><Link className='link' onMouseEnter={() => handleMousephoto('photo1')} onMouseLeave={handleMousePhoto}>Costa Rica</Link></li>
                          <li className='subitem'><Link className='link' onMouseEnter={() => handleMousephoto('photo1')} onMouseLeave={handleMousePhoto}>Cuba</Link></li>
                          <li className='subitem'><Link className='link' onMouseEnter={() => handleMousephoto('photo1')} onMouseLeave={handleMousePhoto}>Équateur</Link></li>
                          <li className='subitem'><Link className='link' onMouseEnter={() => handleMousephoto('photo1')} onMouseLeave={handleMousePhoto}>Etats-Unis</Link></li>
                          <li className='subitem'><Link className='link' onMouseEnter={() => handleMousephoto('photo1')} onMouseLeave={handleMousePhoto}>Pérou</Link></li>  
                        </>
                      )} 
                      {currentSubcategory === 'subcategory3' && (
                        <>
                          <li className='subitem'><Link className='link'>Brésil</Link></li>
                          <li className='subitem'><Link className='link'>Canada</Link></li>
                          <li className='subitem'><Link className='link'>Costa Rica</Link></li>
                          <li className='subitem'><Link className='link'>Cuba</Link></li>
                          <li className='subitem'><Link className='link'>Équateur</Link></li>
                          <li className='subitem'><Link className='link'>Etats-Unis</Link></li>
                          <li className='subitem'><Link className='link'>Pérou</Link></li>  
                        </>
                      )}
                      {currentSubcategory === 'subcategory4' && (
                        <>
                          <li className='subitem'><Link className='link'>Brésil</Link></li>
                          <li className='subitem'><Link className='link'>Canada</Link></li>
                          <li className='subitem'><Link className='link'>Costa Rica</Link></li>
                          <li className='subitem'><Link className='link'>Cuba</Link></li>
                          <li className='subitem'><Link className='link'>Équateur</Link></li>
                          <li className='subitem'><Link className='link'>Etats-Unis</Link></li>
                          <li className='subitem'><Link className='link'>Pérou</Link></li>  
                        </>
                      )}  
                      {currentSubcategory === 'subcategory5' && (
                        <>
                          <li className='subitem'><Link className='link'>Brésil</Link></li>
                          <li className='subitem'><Link className='link'>Canada</Link></li>
                          <li className='subitem'><Link className='link'>Costa Rica</Link></li>
                          <li className='subitem'><Link className='link'>Cuba</Link></li>
                          <li className='subitem'><Link className='link'>Équateur</Link></li>
                          <li className='subitem'><Link className='link'>Etats-Unis</Link></li>
                          <li className='subitem'><Link className='link'>Pérou</Link></li>  
                        </>
                      )} 
                      {currentSubcategory === 'subcategory6' && (
                        <>
                          <li className='subitem'><Link className='link'>Brésil</Link></li>
                          <li className='subitem'><Link className='link'>Canada</Link></li>
                          <li className='subitem'><Link className='link'>Costa Rica</Link></li>
                          <li className='subitem'><Link className='link'>Cuba</Link></li>
                          <li className='subitem'><Link className='link'>Équateur</Link></li>
                          <li className='subitem'><Link className='link'>Etats-Unis</Link></li>
                          <li className='subitem'><Link className='link'>Pérou</Link></li>  
                        </>
                      )} 
                      
                    </ul>
                    )}
                    
                    {showImage && (
                      <div className='photos'>
                        <div className='photo'>
                          <img loading="lazy" src={currentPhoto} alt="subcategory image" className="subcategory-image" />
                        </div>
                      </div>
                      )}                    
                          
                  </div>
                </div>
              )

              }

          </nav>
          <div className='contact front-banner-contact'>
            <form className=''>
              <div className='tel'>
                <button type='submit' className='link freequote'>
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.59 1.322l2.844-1.322 4.041 7.89-2.725 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.861 3.591-19.101-18.258-11.384-22.281zm1.93 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398zm7.832 7.649l2.917.87c.223-.747.16-1.579-.24-2.317-.399-.739-1.062-1.247-1.808-1.469l-.869 2.916zm1.804-6.059c1.551.462 2.926 1.516 3.756 3.051.831 1.536.96 3.263.498 4.813l-1.795-.535c.325-1.091.233-2.306-.352-3.387-.583-1.081-1.551-1.822-2.643-2.146l.536-1.796zm.95-3.186c2.365.705 4.463 2.312 5.729 4.656 1.269 2.343 1.466 4.978.761 7.344l-1.84-.548c.564-1.895.406-4.006-.608-5.882-1.016-1.877-2.696-3.165-4.591-3.729l.549-1.841z"/></svg>
                  <span className='number'>
                    04 85 80 03 54
                  </span>
                  <span className='label' >Demandez un devis</span>
                </button>
              </div>
            </form>
          </div>
          <nav className='quicklinks front-banner-quicklinks' >
            <Link className='link' to=''>
              <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg>
            </Link>
          </nav>

        </div>

      </div>

    </div>
  )
}

export default NavBar