import React, { useState, useEffect } from 'react'
import './headerHome.css'
import { Link } from 'react-router-dom';
import { ReactComponent as Level1 } from '../assets/level1.svg';
import { ReactComponent as Level2 } from '../assets/level2.svg';
import { ReactComponent as Group } from '../assets/group-svgrepo-com.svg'
import { ReactComponent as Time } from '../assets/time-sand-svgrepo-com.svg'
import { ReactComponent as Climbing } from '../assets/climbing-silhouette-svgrepo-com.svg'
import { ReactComponent as Left } from '../assets/left-svgrepo-com.svg'
import { ReactComponent as Right } from '../assets/right-svgrepo-com.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
SwiperCore.use([Navigation, Pagination]);

export const HeaderHome = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
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

  



  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

 
  const images = [
    'https://photos.altai-travel.com/1920x0/trek-dans-le-massif-des-aiguilles-rouges-21253.jpg',
    "https://photos.altai-travel.com/1920x0/plongee-en-mer-rouge-19171.jpg",
    "https://photos.altai-travel.com/1920x0/trek-dans-le-desert-marocain-19889.jpg",
    "https://photos.altai-travel.com/1920x0/bivouac-en-montagne-21979.jpg",
  ];
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setBackgroundImage(images[randomIndex]);
  }, []);

  const [map, setMap] = useState(1);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const places = [
    { id: 1, name: 'france', lat: 47.192550, lng: 2.554702, intro:"Pas besoin de voyager trop loin pour un séjour sportif réussi ! Notre douce France aux multiples terrains de jeu saura satisfaire petits et grands ! De la Bretagne à la Camargue en passant par les vignes de la Bourgogne, toutes les régions ont leur charme et leurs particularités ! 17 000 km de pistes cyclables, plus de 300 GR, 6 grands massifs montagneux : randonneur, alpiniste, rider, plongeur, ou cycliste : vous trouverez votre bonheur.", voyage: "248 voyages"  },
    { id: 2, name: 'Afrique du Sud', lat: -25.745937, lng: 28.187944, intro: "Direction l'Afrique du Sud pour un séjour sportif unique en son genre ! Safari, vignobles, plages paradisiaques : il y en a pour tous les goûts.", voyage:"1 voyage" },
    { id: 3, name: 'Andorre', lat:42.540717, lng: 1.573203 ,intro: "Découvrez le petit pays d'Andorre pour votre prochain voyage sportif !", voyage:"1 voyage"},
    { id: 4, name: 'Angleterre', lat:51.507322, lng: -0.127647, intro:"Direction l'Angleterre pour un séjour sportif qui devrait vous plaire.", voyage:"1 voyage" },
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDPnwZGnuhPS7B5ZYXTPl3mD8B1QGnd_fY';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      const google = window.google;
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 47, lng: 5 },
        zoom: 3,
      });
      setMap(map);

      places.forEach((place) => {
        const marker = new google.maps.Marker({
          position: { lat: place.lat, lng: place.lng },
          map,
          title: place.name,
        });

        marker.addListener('click', () => {
          setSelectedPlace(place);
        });
      });
    });
  }, []);



  return (
   <>
  
    <div className='flat-home-header'>
      <div className='photo'>
        <img  className='imgphoto' src={backgroundImage} alt="background header"/>
      </div>
      <div className='text'>
        <div className='heading'>
          <h1 className='left'>
            <span className='name'>
              Réservez votre prochain voyage sportif
            </span>
          </h1>
          <h1 className='right'>
              <span className='name' >
                Vous ne savez pas où aller ?
              </span>
          </h1>
        </div>
        <form className='form'>
          <div className='search'>
            <svg  className='icon' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg>
            <label className='label' htmlFor='flat-home-header-form-keyword'>
              Quel sport souhaitez-vous pratiquer ? Où souhaitez-vous partir ?
            </label>
            <input className='keyword' type='text' name='keyword' id='flat-home-header-form-keyword' placeholder='Sport, destination...' autoComplete='off' />
            <datalist id='suggestions' >
              <option value="france" />
              <option value="italy" />
              <option value="tailand" />
              <option value="russia" />
              <option value="chine" />
            </datalist>
          </div>
          <div className='viewall'>
            <h1 className='title'>
              <span className='name'>
                Vous ne savez pas où aller ?
              </span>
            </h1>
            <Link className='link' href=''>Je me laisse guider</Link>
          </div>
        </form>
      </div>
      <div className='catchline' >
        <div className='inner'>
          <p className='text'>
            Inscrivez-vous à notre newsletter pour recevoir des conseils, des bons plans et notre sélection de séjours du moment !
            
          </p>
          <div className='readmore'>
            <Link className='buttomlink' href=''>
              Je m'abonne
            </Link>
          </div>
        </div>
      </div>
    </div>


    <div className='flat-home-featured'>
      <nav className='front-inspiration-carousel carousel has-actions'>
        <div className='subtitle'>
          Last minute
        </div>
        <h2 className='heading'>Notre sélection pour les vacances d'Avril</h2>

        
      </nav> 

      <div className='flickity-slider'>
      <Swiper
        grabCursor={true}
        navigation={{
          prevEl: '.action-prev',
          nextEl: '.action action-next',
        }}
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween :20,
          },
          720: {
            slidesPerView: 2,
            spaceBetween :35,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween :15,
          }
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className='front-inspiration-carousel-tour megalink '  >
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>


      <div className='showmore'>
        <Link className='link'>
          Réservez votre séjour
        </Link>
      </div>
  </div>

 <div className="flat-home-destinations">
      <div id="map" className='map' style={{ overflow:"hidden"  }}>{selectedPlace && (
        <div className="map-window">
          <h2>{selectedPlace.name}</h2>
          <p>Latitude: {selectedPlace.lat}</p>
          <p>Longitude: {selectedPlace.lng}</p>
        </div>
      )}</div>
      
  <div className='content'>
    <h2 className='heading' > Nos voyages à la carte</h2>
    <select className='selector'>
      <option>france</option>
      <option>Afrique du Sud</option>
      <option>Andorre</option>
      <option>Angleterre</option>
    </select>
    <div className='list flickity-enabled is-draggable'>
      <div className='flickity-viewport'>

  
        {selectedPlace&& (
            <div className="item flat-home-destinations-item is-selected">
          <div className='heading'>
            <svg className='icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fa0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5 6.09371 8.00993 3 12 3C15.9901 3 19 6.09371 19 9.5C19 11.6449 17.6877 14.0406 15.9606 16.2611C14.5957 18.016 13.0773 19.5329 12 20.5944C10.9227 19.5329 9.40427 18.016 8.03935 16.2611C6.31229 14.0406 5 11.6449 5 9.5ZM12 1C6.99007 1 3 4.90629 3 9.5C3 12.3551 4.68771 15.2094 6.46065 17.4889C7.99487 19.4615 9.7194 21.1574 10.7973 22.2173C10.9831 22.4001 11.1498 22.564 11.2929 22.7071C11.4804 22.8946 11.7348 23 12 23C12.2652 23 12.5196 22.8946 12.7071 22.7071C12.8502 22.564 13.0169 22.4001 13.2027 22.2174L13.2028 22.2173C14.2806 21.1573 16.0051 19.4615 17.5394 17.4889C19.3123 15.2094 21 12.3551 21 9.5C21 4.90629 17.0099 1 12 1ZM12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z" fill="#fa0000"></path> </g></svg>
            <h3 className='name'>{selectedPlace.name}</h3>
          </div>
          <p className='intro' > {selectedPlace.intro}</p>
          <div className='viewall'>
            <Link className='buttomlink'>{selectedPlace.voyage}</Link>
          </div>
        </div>
         )}
     
        </div>
      </div>
    </div>
  </div>
  
  <div className='flat-home-inspirations'>
    <div className='inner'>
      <div className='text'>
        <div className='header'>
          <div className='subtitle'>En panne d'idées ?</div>
          <h2 className='heading' >Trouvez l'inspiration </h2>
        </div>
        <p className='intro'>Pas de panique, nous avons plein d'idées pour vous aider à trouver votre prochaine aventure sportive en solo, à deux, en famille ou entre amis. Faites chauffer les pédales, cirez vos chaussures, ajustez votre tuba et plongez dans l'aventure !</p>
      </div>
        <ul className='list'>
          <li className='item flat-home-inspirations-item megalink'>
            <div className='photo'>
              <img src="https://photos.altai-travel.com/600x0/randonneuses-au-dessus-de-la-vallee-de-la-tessaout-16676.jpg" />

            </div>
            <div className='text'>
              <div className='category'>
                Témoignage
              </div>
              <h3 className='heading'>
                <Link className='link'>
                  à la découverte de l’Atlas marocain
                </Link>
              </h3>
            </div>
            <Link className='megalink-proxy'> </Link>
          </li>
          <li className='item flat-home-inspirations-item megalink'>
            <div className='photo'>
              <img src="https://photos.altai-travel.com/600x0/randonneuses-au-dessus-de-la-vallee-de-la-tessaout-16676.jpg" />

            </div>
            <div className='text'>
              <div className='category'>
                Témoignage
              </div>
              <h3 className='heading'>
                <Link className='link'>
                  à la découverte de l’Atlas marocain
                </Link>
              </h3>
            </div>
            <Link className='megalink-proxy'> </Link>
          </li>
          <li className='item flat-home-inspirations-item megalink'>
            <div className='photo'>
              <img src="https://photos.altai-travel.com/600x0/randonneuses-au-dessus-de-la-vallee-de-la-tessaout-16676.jpg" />

            </div>
            <div className='text'>
              <div className='category'>
                Témoignage
              </div>
              <h3 className='heading'>
                <Link className='link'>
                  à la découverte de l’Atlas marocain
                </Link>
              </h3>
            </div>
            <Link className='megalink-proxy'> </Link>
          </li>
        </ul>
        <div className='showmore'>
        <Link className='link'>
          Réservez votre séjour
        </Link>
      </div>
    </div>

  </div>
  <div className='flat-home-blog'>
    <div className='inner'>
      <div className='text'>
        <div className='header'>
          <div className='subtitle'>
            Avant de partir
          </div>
          <h2 className='heading'>Quelques conseils d'experts</h2>
        </div>
        <p className='intro'>
          Faites le plein de conseils pour votre prochain voyage ! Apprenez-en plus sur votre sport préféré, découvrez un pays inconnu ou encore initiez-vous à un nouveau sport, en ligne pour commencer avant de sauter le pas et de partir avec nous !
        </p>
          <div className='showmore'>
            <Link className='link' to='' >Tous nos conseils d'experts</Link>
          </div>
      </div>
      <ul className='list'>
        <li className='item flat-home-blog-item megalink'>
          <div className='photo'>
            <img src='https://photos.altai-travel.com/600x0/promenade-a-vtt-dun-couple-devant-un-lac-24408.jpg' style={{ objectPosition: '29% 58%'}} />
          </div>
          <div className='text'>
            <time className='date' dateTime='2023-04-24'>24 avril 2023</time>
            <h3 className='heading'>
              <Link className='link' >Les plus belles randonnées à vélo en France sur plusieurs jours</Link>
            </h3>
          </div>
          <Link className='megalink-proxy'></Link>
        </li>
        <li className='item flat-home-blog-item megalink'>
          <div className='photo'>
            <img src='https://photos.altai-travel.com/600x0/promenade-a-vtt-dun-couple-devant-un-lac-24408.jpg' style={{ objectPosition: '29% 58%'}} />
          </div>
          <div className='text'>
            <time className='date' dateTime='2023-04-24'>24 avril 2023</time>
            <h3 className='heading'>
              <Link className='link' >Les plus belles randonnées à vélo en France sur plusieurs jours</Link>
            </h3>
          </div>
          <Link className='megalink-proxy'></Link>
        </li>
        <li className='item flat-home-blog-item megalink'>
          <div className='photo'>
            <img src='https://photos.altai-travel.com/600x0/promenade-a-vtt-dun-couple-devant-un-lac-24408.jpg' style={{ objectPosition: '29% 58%'}} />
          </div>
          <div className='text'>
            <time className='date' dateTime='2023-04-24'>24 avril 2023</time>
            <h3 className='heading'>
              <Link className='link' >Les plus belles randonnées à vélo en France sur plusieurs jours</Link>
            </h3>
          </div>
          <Link className='megalink-proxy'></Link>
        </li>
        <li className='item flat-home-blog-item megalink'>
          <div className='photo'>
            <img src='https://photos.altai-travel.com/600x0/promenade-a-vtt-dun-couple-devant-un-lac-24408.jpg' style={{ objectPosition: '29% 58%'}} />
          </div>
          <div className='text'>
            <time className='date' dateTime='2023-04-24'>24 avril 2023</time>
            <h3 className='heading'>
              <Link className='link' >Les plus belles randonnées à vélo en France sur plusieurs jours</Link>
            </h3>
          </div>
          <Link className='megalink-proxy'></Link>
        </li>
      </ul>
    </div>
  </div>




    </>
  )
}

