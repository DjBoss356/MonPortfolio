import style from "../Loisir/Loisir.module.css"
import { getImageUrl } from '../../utils'

export const Loisir = () => {
  return (
    <section className={style.container} id = "loisirs">
      <h1 className={style.section}>Loisirs</h1>
      <center><div className={style.content}>
        <div className={style.projet}>
            <img src = {getImageUrl("image/jeux.png")} alt="icône jeux-vidéos"
            className= {style.image} />
            <h2 className={style.title}> Jeux-vidéos</h2>
            <p className={style.text}> J'aime jouer aux jeux-vidéos de toute catégorie</p>
        </div>

        <div className={style.projet}>
            <img src = {getImageUrl("image/codage.png")} alt="icône high-tech"
            className= {style.image} />
            <h2 className={style.title}> High-Tech</h2>
            <p className={style.text}> Je m'informe sur les dernières actualités high-tech</p>
        </div>

        <div className={style.projet}>
            <img src = {getImageUrl("image/la-natation.png")} alt="icône natattion"
            className= {style.image} />
            <h2 className={style.title}> Natation</h2>
            <p className={style.text}> Je pratique ce sport depuis plus de 4 ans</p>
        </div>

        <div className={style.projet}>
            <img src = {getImageUrl("image/etude.png")} alt="icône natattion"
            className= {style.image} />
            <h2 className={style.title}>Lecture</h2>
            <p className={style.text}> J'aime lire et m'infomer sur des articles ou rubriques <br /> liées à l'informatique et aux nouvelles technologies</p>
        </div>
      </div></center>

    </section>
  )
}
