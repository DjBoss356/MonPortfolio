import { useState } from "react";
import style from "../Projets/Projets.module.css"
import { getImageUrl } from '../../utils';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Popup from "../Popup/Popup";


export const Projets = () => {

  const [isPopupOpen1, setPopupOpen1] = useState(false);
  const [isPopupOpen2, setPopupOpen2] = useState(false);
  const openPopup1 = () => {
    setPopupOpen1(true);
  };
  
  const closePopup1 = () => {
    setPopupOpen1(false);
  };

  const openPopup2 = () => {
    setPopupOpen2(true);
  };
  
  const closePopup2 = () => {
    setPopupOpen2(false);
  };
  
  

  return (
    <section className={style.container} id='projets'>
      <h1 className={style.section}>Projets</h1>

      <div className={style.content}>
        <a onClick={openPopup1}><div className={style.box}>
            <img src = {getImageUrl("image/glowgrade_logo.png")} alt="Photo app web"
                    className= {style.image} />
              <h2 className={style.title}> Application mobile</h2>
          </div></a>
        <Popup isOpen={isPopupOpen1} onClose={closePopup1} >
          <div className={style.projet}>
              <div className={style.part}>
                <img src = {getImageUrl("image/glowgrade_logo.png")} alt="Photo app web"
                    className= {style.image} />
                  <h2 className={style.title}> Application mobile</h2>
                  <p className={style.text}> J'ai fait le design et développé la partie front-end de l'application mobile "Note-Moi" développé en Next.js</p>
                  <a href='https://note-moi.vercel.app/' className={style.lien}>Lien démo</a>   
              </div> 
              <Swiper className={style.swiper}
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={5}
              slidesPerView={1}
              navigation
              navigationClass={style.nav}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide><img src = {getImageUrl("image/screen note-moi.jpg")} alt="Photo app web"
                    className= {style.imageh} /></SwiperSlide>
              <SwiperSlide><img src = {getImageUrl("image/screen note-moi2.jpg")} alt="Photo app web"
                    className= {style.imageh} /></SwiperSlide>
              <SwiperSlide><img src = {getImageUrl("image/screen note-moi3.jpg")} alt="Photo app web"
                    className= {style.imageh} /></SwiperSlide>
              <SwiperSlide><h1>Outils utilisés</h1> 
              <img src = {getImageUrl("image/nextjs.png")} alt="Photo app web"
                className= {style.imager}/>
              <img src = {getImageUrl("image/pngegg.png")} alt="Photo app web"
                className= {style.imager} />  
                </SwiperSlide>
            </Swiper>
          </div>
          </Popup>


      < a onClick={openPopup2}><div className={style.box}>
        <img src = {getImageUrl("image/utilisateur.png")} alt="Photo app web"
                className= {style.image} />
              <h2 className={style.title}> Projets et travail personnel</h2>
        </div></a>
          <Popup isOpen={isPopupOpen2} onClose={closePopup2} >
            <div className={style.projet}>
            <div className={style.part}>
                <img src = {getImageUrl("image/utilisateur.png")} alt="Photo app web"
                    className= {style.image} />
                  <h2 className={style.title}> Projet et travail personnel</h2>
                  <p className={style.text}> Rélisation des designs d'interface web et des visuels graphiques.
                  <br />En cliquant sur le bouton vous verrez l'une de mes réalisation vidéo.</p>
                  <a href='https://youtu.be/nI3TL6JKL3w?si=umSfSUmMWTEFbkhd' className={style.lien}>Lien démo</a>   
              </div> 
              <Swiper className={style.swiper}
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={5}
              slidesPerView={1}
              navigation
              navigationClass={style.nav}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide><img src = {getImageUrl("image/img.png")} alt="Photo screen design"
                      className= {style.imageh} /></SwiperSlide>
                <SwiperSlide><img src = {getImageUrl("image/aff2.jpg")} alt="Photo visuel1"
                      className= {style.imagef} /></SwiperSlide>
                <SwiperSlide><img src = {getImageUrl("image/galaa.jpg")} alt="Photo visuel2"
                      className= {style.imagef} /></SwiperSlide>
                <SwiperSlide> <img src = {getImageUrl("image/aff1.jpg")} alt="Photo visuel3"
                    className= {style.imagef}  /></SwiperSlide>
              </Swiper>
            </div>
            </Popup>
      </div>
       
      
       
    
        {/* /* <div className={style.projet}>
          <div className={style.part}>
            <img src = {getImageUrl("image/utilisateur.png")} alt="Photo app web"
                className= {style.image} />
              <h2 className={style.title}> Projet et travail personnel</h2>
              <p className={style.text}> Rélisation des designs d'interface web et des visuels.
              <br />Encliquant sur le bouton vous verrez l'une de mes réalisation vidéo.</p>
              <a href='https://youtu.be/nI3TL6JKL3w?si=umSfSUmMWTEFbkhd' className={style.lien}>lien</a>   
          </div> 
          <Swiper className={style.swiper}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          navigationClass={style.nav}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide><img src = {getImageUrl("image/img.png")} alt="Photo screen design"
                  className= {style.imageh} /></SwiperSlide>
            <SwiperSlide><img src = {getImageUrl("image/aff2.jpg")} alt="Photo visuel1"
                  className= {style.imagef} /></SwiperSlide>
            <SwiperSlide><img src = {getImageUrl("image/galaa.jpg")} alt="Photo visuel2"
                  className= {style.imagef} /></SwiperSlide>
            <SwiperSlide> <img src = {getImageUrl("image/aff1.jpg")} alt="Photo visuel3"
                className= {style.imagef}  /></SwiperSlide>
          </Swiper>
  </div> */ }
    
      
    </section>
  )
}
