
import style from "../HardSkill/HardSkill.module.css"
import { getImageUrl } from '../../utils'

export const HardSkill = () => {
  return (
    <section className={style.container} id="hardskill">
        <h1 className={style.section}>Compétences</h1>
        <div className={style.contentbox}>
            <div className={style.content}>
                <img id="first" src= {getImageUrl("image/html-5.png")} alt= "icon HTML" className={style.image} align="center" />
                <p className={style.caption}>Html</p>
            </div>

            <div className={style.content}>
                <img src= {getImageUrl("image/css-3.png")} alt= "icon CSS" className={style.image} align="center" />
                <p className={style.caption}>CSS</p>
            </div>
            
            <div className={style.content}>
                <img src= {getImageUrl("image/js.png")} alt= "icon JavaScript" className={style.image} align="center" />
                <p className={style.caption}>JavaScript</p>
            </div>

            <div className={style.content}>
                <img src= {getImageUrl("image/figma.png")} alt= "icon Figma" className={style.image} align="center" />
                <p className={style.caption}>Figma</p>
            </div>

            <div className={style.content}>
                <img src= {getImageUrl("image/react.svg")} alt= "icon React" className={style.image} align="center" />
                <p className={style.caption}>React</p>
            </div>

            <div className={style.content}>
                <img src= {getImageUrl("image/java.png")} alt= "icon Java" className={style.image} align="center" />
                <p className={style.caption}>Java</p>
            </div>

            <div className={style.content}>
                <img src= {getImageUrl("image/git.png")} alt= "icon Git" className={style.image} align="center" />
                <p className={style.caption}>Git</p>
            </div>

            <div className={style.content}>
                <img src= {getImageUrl("image/photoshop.png")} alt= "icon Photoshop" className={style.image} align="center" />
                <p className={style.caption}>Photoshop</p>
            </div>
        </div>
       
        
    </section>
  )
}
