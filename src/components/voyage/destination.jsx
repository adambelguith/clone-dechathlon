import React, {useState, useRef, useEffect} from 'react'
import './destination.css'
import { ReactComponent as Downs } from '../../assets/down-chevron-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Level1 } from '../../assets/level1.svg';
import { ReactComponent as Group } from '../../assets/group-svgrepo-com.svg'
import { ReactComponent as Time } from '../../assets/time-sand-svgrepo-com.svg'
import { ReactComponent as Climbing } from '../../assets/climbing-silhouette-svgrepo-com.svg'



function Destination() {
  const [depart ,setdepart] = useState(0);
const [voyageur ,setvoyageur] = useState(0);
const [isListVisible, setIsListVisible] = useState([false, false, false, false, false, false, false]);
const containerRef = useRef(null);  
const handleButtonClick = (index) => {
    const updatedList = isListVisible.map((value, i) => i === index);
    setIsListVisible(updatedList);
  };

  const handleOutsideClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsListVisible([false, false, false, false, false, false, false]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handelPlusdepart = () =>{
    setdepart(depart + 1);
  }
   const handelMoinsdepart = () =>{
    if (depart >0 ){ 
      setdepart(depart - 1);
    }
  }

  const handelPlusVoya =() =>{
    setvoyageur(voyageur+1);
  }
  const handelMoinsVoya =() =>{
    if (voyageur >0){
      setvoyageur(voyageur-1);
    }
  }
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
      country:'Alpes',
      handel: 'Week-end escalade falaises au pays des Ecrins',
      image: "https://photos.altai-travel.com/1920x0/plongee-en-mer-rouge-19171.jpg",
      jour: 2,
      niveau: 1
    },
    {
      id: 4,
      prix: 340,
      country:'Alpes',
      handel: 'Week-end escalade falaises au pays des Ecrins',
      image: 'https://photos.altai-travel.com/600x0/chateau-de-chaumont-sur-loire-val-de-loire-21937.jpg',
      jour: 2,
      niveau: 1
    },
    {
      id: 5,
      prix: 340,
      country:'Alpes',
      handel: 'Week-end escalade falaises au pays des Ecrins',
      image: 'https://photos.altai-travel.com/600x0/anaga-mountains-tenerife-dans-les-canaries-24539.jpg',
      jour: 2,
      niveau: 1
    },
  ];


  return (
    <>
    <form className=''>
      <div className='filters filters--hidden'>
        <div className='filters__block'>
          <div className='filters__container'>
            <div className='filters__inputs-container filters__inputs-container--full'>
              <div className='filters__date'>
                <label className='filters__label'>Date de départ</label>
                <input className='filters__date-input' type='date' placeholder='mm / dd / yyyy' />
              </div>
              <div className='filters__input-container filters__input-flexibility'>
                <div className='filters__input-container'>
                  <label className='input-number__label filters__label'>
                    Flexibilité de vorte départ
                  </label>
                  <div className='input-number filters__input-flexibility'>
                    <button type="button" className='input-number__less' onClick={handelMoinsdepart}> - </button>
                    <input className='input-number__value' type='number' value={depart} />
                    <button type="button" className='input-number__more' onClick={handelPlusdepart}> + </button>
                    <p className='days' >Jours</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className='filters__vertical-separator' />
            <div className='filters__inputs-container'>
              <div className='filters__input-container'>
                <label className='input-number__label filters__label'>
                  Nombre de voyageurs
                </label>
                <div className='input-number filters__input-pax'>
                  <button type="button" className='input-number__less' onClick={handelMoinsVoya}> - </button>
                  <input className='input-number__value'type='number' min='0' value={voyageur}/>
                  <button type="button" className='input-number__more' onClick={handelPlusVoya}> + </button>
                </div>
              </div>
              <hr className='filters__vertical-separator' />
              <div className='filters__input-container filters__input-container--inline filters__input-gir'>
                <input type='checkbox' className='' />
                <label className='filters__label' > Rejoindre un groupe</label>
              </div>
            </div>
            <button className='filters__submit filters__submit--desktop' type='submit'  >Rechercher</button>
          </div>
          <hr className='filters__separator' />
          <div className='filters__choices'>


            <div className={isListVisible[0] ?'select-multiple select-multiple__display':'select-multiple'}>
              <div className='select-multiple__select'>
                <button className='select-multiple__select-input' type='button' onClick={() => handleButtonClick(0)}>Destination <Downs className='svgdown'/></button>
                
              </div>  
              {isListVisible[0]}
             {console.log(isListVisible)}
               {isListVisible[0]=== true && (
                 console.log(isListVisible),
                 <div ref={containerRef} >
                <ul className='select-multiple__choices select-multiple__choices--sm-no-scroll'>
                  <li className='select-multiple__choice parent'>
                    <label >Alpinisme</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Canyoning</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Escalade</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Glisse</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                </ul>
                </div>
               )} 
            </div>
            <div className={isListVisible[1] ?'select-multiple select-multiple__display':'select-multiple'}>
              <div className='select-multiple__select'>
                <button className='select-multiple__select-input' type='button' onClick={() => handleButtonClick(1)}>Destination <Downs className='svgdown'/></button>
                
              </div>  
              {isListVisible[1] && (
                <div ref={containerRef} >
                <ul className='select-multiple__choices select-multiple__choices--sm-no-scroll'>
                  <li className='select-multiple__choice parent'>
                    <label >Alpinisme</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Canyoning</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Escalade</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Glisse</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                </ul>
                </div>
               )}  
            </div>
            <div className={isListVisible[2] ?'select-multiple select-multiple__display':'select-multiple'}>
              <div className='select-multiple__select'>
                <button className='select-multiple__select-input' type='button' onClick={() => handleButtonClick(2)}>Destination <Downs className='svgdown'/></button>
                
              </div>   
              {isListVisible[2] && (
                <div ref={containerRef} >
                <ul className='select-multiple__choices select-multiple__choices--sm-no-scroll'>
                  <li className='select-multiple__choice parent'>
                    <label >Alpinisme</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Canyoning</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Escalade</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Glisse</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                </ul>
                </div>
               )}  
            </div>
            <div className={isListVisible[3] ?'select-multiple select-multiple__display':'select-multiple'}>
              <div className='select-multiple__select'>
                <button className='select-multiple__select-input' type='button' onClick={() => handleButtonClick(3)} >Destination <Downs className='svgdown'/></button>
                
              </div>   
              {isListVisible[3] && (
                <div ref={containerRef} >
                <ul className='select-multiple__choices select-multiple__choices--sm-no-scroll'>
                  <li className='select-multiple__choice parent'>
                    <label >Alpinisme</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Canyoning</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Escalade</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Glisse</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                </ul>
                </div>
               )}  
            </div>
            <div className={isListVisible[4] ?'select-multiple select-multiple__display':'select-multiple'}>
              <div className='select-multiple__select'>
                <button className='select-multiple__select-input' type='button' onClick={() => handleButtonClick(4)}>Destination</button>
                <Downs className='svgdown'/>
              </div>   
              {isListVisible[4] && (
                <div ref={containerRef} >
                <ul className='select-multiple__choices select-multiple__choices--sm-no-scroll'>
                  <li className='select-multiple__choice parent'>
                    <label >Alpinisme</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Canyoning</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Escalade</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Glisse</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                </ul>
                </div>
               )}  
            </div>
            <div className={isListVisible[5] ?'select-multiple select-multiple__display':'select-multiple'}>
              <div className='select-multiple__select'>
                <button className='select-multiple__select-input' type='button' onClick={() => handleButtonClick(5)}>Destination</button>
                <Downs className='svgdown'/>
              </div> 
              {isListVisible[5] && (
                <div ref={containerRef} >
                <ul className='select-multiple__choices select-multiple__choices--sm-no-scroll'>
                  <li className='select-multiple__choice parent'>
                    <label >Alpinisme</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Canyoning</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Escalade</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Glisse</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                </ul>
                </div>
               )}   
            </div>
            <div className={isListVisible[6] ?'select-multiple select-multiple__display':'select-multiple'}>
              <div className='select-multiple__select'>
                <button className='select-multiple__select-input' type='button' onClick={() => handleButtonClick(6)}>Destination</button>
                <Downs className='svgdown'/>
              </div> 
              {isListVisible[6] && (
                <div ref={containerRef} >
                <ul className='select-multiple__choices select-multiple__choices--sm-no-scroll'>
                  <li className='select-multiple__choice parent'>
                    <label >Alpinisme</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Canyoning</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Escalade</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                  <li className='select-multiple__choice parent'>
                    <label >Glisse</label>
                    <input className='filterInput' type='checkbox' />
                  </li>
                </ul>
                </div>
               )}    
            </div>
          </div>
        </div>
      </div>
    </form>
    
    <div className='travel-search-engine-results'>
      <div className='header'>
        <div className='counter'>
          <span className='placeholder'> 200</span>
          <span className='suffix'> voyages disponibles</span>
        </div>
      </div>
      <div className='list'>
        {products.map((product) => (
            <div className='result travel-search-engine-result megalink '  >
                <div className='head'>
                  <div className='photo'>
                    <img src={product.image} alt="background header"/>
                  </div>
                  <div className='minprice'>
                    À partir de 
                    <strong>{product.prix} €</strong>
                  </div>

                </div>
                <div className='overview'>
                  <div className='destination'>{product.country}</div>
                  <div className='heading'> 
                  <Link className='link' to='testing'> {product.handel} </Link>
                  </div>
                  <ul className='features'>
                    <li className='feature is-duration'>
                      <div className='feature-icon duree' data-tooltip="Durée">
                        <Time className='icon feat' style={null} />
                      </div>
                      <span className='value'>{product.jour} jours</span>
                    </li>
                    <li className='feature is-level'>
                      <div className='feature-icon niveau' data-tooltip="Niveau">

                          <Level1 className='icon feat' style={null} />
                      </div>
                      <span className='value'>Initié</span>
                    </li>
                    <li className='feature is-theme' data-tooltip="Sport">
                      <div className='feature-icon theme'>
                        <Climbing className='icon feat' style={null} />
                      </div>    
                      <span className='value'>Escalade</span>
                    </li>
                    <li className='feature is-group' data-tooltip="Rejoignez un groupe">
                      <div className='feature-icon gir'>
                        <Group className='icon feat' style={null} />
                      </div>
                      <span className='value'>En groupe</span>
                    </li>
                  </ul>
                </div>
              </div>
        ))}
      </div>
    </div>

    </>
  )
}

export default Destination