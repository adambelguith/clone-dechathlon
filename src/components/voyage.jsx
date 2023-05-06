import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import './voyage.css';
import { Link } from 'react-router-dom';
import Destination from './voyage/destination';
import Guide from './voyage/guide';
function Voyage() {
    const products =[

    {
      id: 0,
      prix: 1525,
      country:'Grèce',
      handel: 'Voile & escalade dans le Péloponnèse',
      image: "https://photos.altai-travel.com/1920x0/plongee-en-mer-rouge-19171.jpg",
      jour: 8,
      niveau: 2
    },
    {
      id: 1,
      prix: 895,
      country:'Espagne',
      handel: 'Stage de golf à Cadix',
      image: "https://photos.altai-travel.com/1920x0/trek-dans-le-desert-marocain-19889.jpg",
      jour: 6,
      niveau: 2
    },
    {
      id: 2,
      prix: 340,
      country:'Alpes',
      handel: 'Week-end escalade falaises au pays des Ecrins',
      image: "https://photos.altai-travel.com/1920x0/bivouac-en-montagne-21979.jpg",
      jour: 2,
      niveau: 2
    },
    {
      id: 3,
      prix: 340,
      country:'afrique',
      handel: 'Week-end escalade falaises au pays des Ecrins',
      image: "https://photos.altai-travel.com/1920x0/observation-des-girafe-en-afrique-du-sud-23027.jpg",
      jour: 2,
      niveau: 1
    },
    {
      id: 4,
      prix: 340,
      country:'Alpes',
      handel: 'Week-end escalade falaises au pays des Ecrins',
      image: 'https://media.decathlontravel.com/assets/S0RW0N.jpg',
      jour: 2,
      niveau: 1
    },
    {
      id: 5,
      prix: 340,
      country:'Alpes',
      handel: 'Week-end escalade falaises au pays des Ecrins',
      image: 'https://media.decathlontravel.com/assets/S0RW0N.jpg',
      jour: 2,
      niveau: 1
    },
  ];

  const [isClicked1, setIsClicked1] = useState(true);
  const [isClicked2, setIsClicked2] = useState(false);

  const handledestination = () => {
    setIsClicked1(true);
    setIsClicked2(false);
  };

  const handleguide = () => {
    setIsClicked2(true);
    setIsClicked1(false);
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country = searchParams.get('country');
  const imgcountry = products.filter((product) => country===product.country);
  

  return (
    <>
    {!country &&(
    <header className='flat-search-header travel-destination-header has-intro'>
        <div className='photo'>

            <img  src='https://photos.altai-travel.com/1920x0/kayak-sur-lac-dans-les-alpes-amy-24865.jpg'  style={{ objectPosition: '50% 50%'}} /> 
        </div>                
        <div className='text'>
       <h1 className='heading'>
        </h1>
        </div>
               
           
    </header>
     )}
     {country &&(
        imgcountry.map((countr)=>(
        <header className='flat-search-header travel-destination-header has-intro'>
        <div className='photo'>

            <img  src={countr.image}  style={{ objectPosition: '50% 50%'}} /> 
        </div>
        <div className='text'>
                    <h1 className='heading'>
                        <span className='name'>Voyages sportifs en {country} </span>
                    </h1>
                    <p className='intro'>
                        Direction {country} du Sud pour un séjour sportif unique en son genre ! Safari, vignobles, plages paradisiaques : il y en a pour tous les goûts.
                    </p>
                    </div>              
           
    </header>))
                    
                )}
                <div className='travel-destination-links'>
                    <div className='inner'>
                        <nav className='nav travel-destination-links-nav'>
                            <a className={isClicked1  ? 'link is-active': 'link '} onClick={handledestination} >
                                voyage 
                                </a>
                            <a className={isClicked2 ? 'link is-active': 'link '} onClick={handleguide} >guide</a>
                        </nav>
                    </div>
                </div>
            <div className='travel-destination-breadcrumbs'>
                <ol className='front-breadcrumbs'>
                    <li className='item'>
                        <a className='link'>
                            <span className='name'>
                                Accueil
                            </span>
                        </a>
                    </li>
                    <li className='item'>
                        <a className='link'>
                            <span className='name'>
                                Afrique
                            </span>
                        </a>
                    </li>
                    <li className='item'>
                        <a className='link'>
                            <span className='name'>
                                Afrique sud
                            </span>
                        </a>
                    </li>
                </ol>
            </div>
        {isClicked1 && <Destination />}
        {isClicked2 && <Guide /> }
    </>
  )
}

export default Voyage