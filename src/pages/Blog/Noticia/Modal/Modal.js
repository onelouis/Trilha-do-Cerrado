import React from 'react';
import './Modal.css';
//import axios from 'axios';

const BlogNoticiaModal = ({ id = 'modal', onClose =() => {}, children}) => {


  const HandleOutsideClick = (e) => {
    if(e.target.id == id) onClose();
  }
  return (
    <div id={id} className="modal-blog"onClick={HandleOutsideClick}>
      <div className="conteiner">
        <button className='modal__close-button' 
          onClick={onClose}>X</button>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};

export default BlogNoticiaModal;