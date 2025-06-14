import React from "react";

const Modal = ({ testis, setIsOpen }) => {
  return (
    <div className="testis-modal" onClick={() => setIsOpen(false)}>
      <div className="testis-img-container">
        <img src={testis.imgSrc} alt="" />
      </div>
      <h4>{testis.name}</h4>
      <h5>{testis.title} </h5>
      <p>"{testis.text}"</p>
    </div>
  );
};

export default Modal;
