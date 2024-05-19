import PropTypes from 'prop-types';

let Popup = ({children, onClose, closable = false }) => {
    
    return (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div onClick = {closable ? onClose : null} style={{
          background: "rgba(0,0,0,.5)",
          width: "100%",
          height: "100%",
          zIndex: 0,
          position: "absolute",
          top: 0,
          left: 0
        }} />
        <div style={{
          background: "white",
          width: "1200px",
          height:"500px",
          maxHeight: "90vh",
          minHeight: "30vh",
          borderRadius: "20px",
          zIndex: 1,
          position: "relative",
          padding: "10px"
        }}>
          {children}
        </div>
      </div>
    )
  }

  Popup.propTypes = {
    trigger: PropTypes.bool.isRequired,
    setTrigger: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired, 
    closable: PropTypes.bool.isRequired,
    children: PropTypes.node, // Ajout de la validation pour la prop children
  }
export default Popup;