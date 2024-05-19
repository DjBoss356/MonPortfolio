//import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container} >
        <div className={styles.blur1}></div>
        <div className={styles.blur2}></div>
        <div className={styles.content}>
            <h1 className={styles.titre}> Bienvenue sur mon portfolio !</h1> <br/>
            <p className={styles.text}>
            Je suis ravi de vous accueillir ici, où vous pourrez découvrir 
            mes réalisations et explorer mon parcours. <br />
            Je suis un étudiant de 20 ans, créatif et à la recherche de nouveaux défis 
            actuellement en BAC+5 à Eseo Paris-Vélizy où  
            je suis une formation en cycle ingénieur. <br /><br /> 
            N'hésitez pas à explorer mon portfolio et à me contacter pour toute question ou opportunité de
             collaboration. Je suis impatient de discuter avec vous et d'envisager comment 
             je peux contribuer à vos projets.
            </p>
            <img src = {getImageUrl ("image/IMG_0582.png") }
            className={styles.photo}/>
            <br/>
            <a href ="#contact" className={styles.btncontact} > Contacter moi</a>
            <br/>
            <center><a href="#experience">
                <img src = {getImageUrl ("image/fleche-vers-le-bas.png") }
            className={styles.fleche}/> 
            </a></center>
            <div className={styles.box}></div>
        </div>
        <hr className={styles.bar}/>
    </section>
  )
}

export default Hero;
