//모달 팝업창
import React from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

//모달뒤 까만 반투명
const Backdrop=()=>{
  return <div className={classes.backdrop}> </div>
}

//실제 모달(가운데 하얀네모)
const ModalOverlay=(props)=>{
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  )
};

const portalElement = document.getElementById('overlays');

//메인 컴포넌트
const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop />,portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement )}      
    </div>
  )
}

export default Modal;
//  createPortal(child, container)