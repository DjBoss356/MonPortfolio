import React from 'react'
import style from "../SoftSkill/SoftSkill.module.css"
import { getImageUrl } from '../../utils'

export const SoftSkill = () => {
  return (
    <section className={style.container} id='softskill'>
      <hr className={style.bar}/>
        <h1 className={style.section}>Qualités</h1>
        <div className={style.content}>
          <div className={style.exp1} >
            <img src={getImageUrl("image/ampoule.png")} alt="icône ampoule" className={style.img1} />
            <h2 className={style.title}>Créatif</h2>
            <p className={style.text}> J'ai une bonne aptitude à <br /> trouver des idées originales.</p>
          </div>

          <div className={style.exp1}>
            <img src={getImageUrl("image/dyna.png")} alt="icône dynamique" className={style.img1} />
            <h2 className={style.title}> Dynamique</h2>
            <p className={style.text}> Je m'intégre facilement aux environements <br />et problèmes aux quelles je suis confronté.</p>
          </div>

          <div className={style.exp1}>
            <img src={getImageUrl("image/pouce.png")} alt="icône pouce" className={style.img1} />
            <h2 className={style.title}> Receptif à la critique</h2>
            <p className={style.text}> La critique pour moi c'est pour <br />évoluer et non pas une offense.</p>
          </div>
        </div>
       
    </section>
  )
}
