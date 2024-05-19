import React from 'react'
import style from "../Footer/Footer.module.css"
import { getImageUrl } from '../../utils'

export const Footer = () => {
  return (
    <footer className={style.container}>
        <p className={style.text}> Je suis actuellement à la recherche d'une alternance dans le domaine du développement web/design pour septembre 2024
        <br />Si vous êtes intéressé(e) par mon profil, n'hésitez pas à me contacter en utilisant les coordonnées renséignés dans mon CV ci-dessous :</p>
        <h1>Piéces jointes :</h1>
        <div className={style.content}>
        <a href= {getImageUrl("image/Mbosso_Joan_CV_alternance.pdf")} download >
            <img name="cv" id ="cv" src={getImageUrl("image/etude.png")} alt="mon cv" className={style.image}/>
            <p className={style.label} htmlFor="cv">Mon CV</p>
        </a>
        </div>
        
    </footer>
  )
}   