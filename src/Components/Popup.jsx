import { getImageUrl } from '../utils';
import PropTypes from 'prop-types';
import style from '../Components/Popup.module.css';

let Popup = (props) => {
  
  return (
    <div>
      {props.trigger ? (
        <div className={style.popup}>
          <div className={style.popupinner}>
            <a href=""  onClick={() => props.setTrigger (false)} >
              <img className={style.image} src={getImageUrl('image/fermer.png')} 
            alt="Fermer" /></a>
            {props.children}
          </div>
        </div>
      ) : null}
    </div>
  );
}

Popup.propTypes = {
  trigger: PropTypes.bool.isRequired,
  setTrigger: PropTypes.bool.isRequired,
  children: PropTypes.node, // Ajout de la validation pour la prop children
}

export default Popup;