import React, {useState} from 'react'

import s from './Modal.module.css'

function ModalToClose({openModal, closeModal}) {


 
  return (
    <div className={s.modal}>
        <h1>Are you sure?</h1>
        <div>
          <button>Yes</button>
          <button>No</button>
        </div>
    </div>
  )
}

export default ModalToClose