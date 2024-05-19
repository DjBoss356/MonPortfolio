import  {useState } from 'react'
import styles from "../Navbar/Navbar.module.css";
import { getImageUrl } from "../../utils";


const Navbar = () => {
    const[menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
        <a href="#" className={styles.logo}>MBOSSO Joan</a>
        <div className={styles.menu}>
            <img src={menuOpen 
                ? getImageUrl("image/fermer.png")
                :getImageUrl("image/menu.png")
            } 
            alt="menu-button" className= {styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)} />
            <nav className={`${styles.navbar} ${menuOpen && styles.menuOpen}`} // ${menuOpen && styles.menuOpen} activation sous consition
            onClick={() => setMenuOpen(false)}>
                <a href="#experience" className={styles.active}>Expérience</a>
                <a href="#projets">Projets</a>
                <a href="#hardskill">Compétences</a>
                <a href="#softskill">Qualités</a>
                <a href="#loisirs">Loisirs</a>
                <a href="#contact">Contact</a>
            </nav> <br />
           <center><hr className={styles.bar}/></center> 
        </div>
        
    </header>
  )
}

export default Navbar;