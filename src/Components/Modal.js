import React, {  useEffect, useRef } from "react";
import "./Modal.css";


function Modal({ setOpenModal }) {

    let menuRef = useRef();
    useEffect(()  => {
        let handler =(event) => {
        if (!menuRef.current.contains(event.target)){
            setOpenModal(false);
        }
    }
        document.addEventListener("mousedown",  handler);


        return () => {
            document.removeEventListener("mousedown", handler)
        }
    });
    
  return (
    <div className="modalBackground">
      <div ref={menuRef}className="modalContainer">
        <div className="titleCloseBtn">
          
        </div>
        <div className="title">
          <h1>Theme Color</h1>
          <h1 className="Change">Change Theme</h1>
        </div>
        <div className="body">
            <div className="first-row">
                <p>Font Color</p>
                <p>#444444 <button className="Font-btn"></button></p>
            </div>
            <hr></hr>
            <div className="second-row">
                <p>Background Color</p>
                <p>#FFFFFF <button className="Background-btn"></button></p>
            </div>
            <hr></hr>
            <div className="third-row">
                <p>Button Color</p>
                <p>#444444 <button className="Button-btn"></button></p>
            </div>
            <hr></hr>
            <div className="fourth-row">
                <p>Button Border Color</p>
                <p>#444444 <button className="Button-Border-btn"></button></p>
            </div>
            <hr></hr>
            <div className="fifth-row">
                <p>Buttons Mouseover Color</p>
                <p>#444444 <button className="Buttons-Mouseover-btn"></button></p>
            </div>
            <hr></hr>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;