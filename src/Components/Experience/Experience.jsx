//import React from 'react'
import style from "../Experience/Experience.module.css"

export const Experience = () => {
  return (
    <section className={style.container} id="experience">
        <div className={style.blur1}></div>
        <div className={style.blur2}></div>
        <h1 className={style.section}>Expérience</h1>
        <div className={style.content}>
            <div className={style.exp1} >
                <div className={style.box}>
                    <h2 className={style.title}> Développement Web</h2>
                    <p className={style.text}> J'ai développé la partie front-end d'applications mobiles</p>
                </div>
                
            </div>

            <div className={style.exp1}>
                <h2 className={style.title}> Design UX/UI</h2>
                <p className={style.text}> J'ai réalisé le design de page web UX/UI et d'illustration graphique pour divers projets</p>
            </div>

            <div className={style.exp1}>
                <h2 className={style.title}>Lancement d'un business</h2>
                <p className={style.text}> J'ai monté une entreprise qui permet l'achat de services en ligne</p>
            </div>

            <div className={style.exp1}>
                <h2 className={style.title}> Services en design et infographie</h2>
                <p className={style.text}> Depuis plus deux deux ans maintenant je concoies affiches, logos et monatges vidéos.</p>
            </div>

            <div className={style.exp1}>
                <h2 className={style.title}> Membre du bureau de la junior entreprise</h2>
                <p className={style.text}> J'ai été à la charge de la réalisation des concepts visuels pour des clients lors des projets.</p>
            </div>
        </div>
        
        <hr className={style.bar}/>
    </section>
  )
}
