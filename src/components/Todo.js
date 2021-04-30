import React, { useState } from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false)

    const deleteHandler = () => {
        setModalIsOpen(true);
    }

    const closeModalHandler = () => {
        setModalIsOpen(false);
    }

    const deleteTodoHandler = () => {
        props.deleteTodo(props.text);
        closeModalHandler();
    }
    
    return (<div className='card'>
    <h2>{props.text}</h2>
    <div className='actions'>
      <button className='btn' onClick={deleteHandler}>Delete</button>
    </div>
    {modalIsOpen && 
        <React.Fragment>
            <Modal onCancel={closeModalHandler} onConfirm={deleteTodoHandler}/>
            <Backdrop onClick={closeModalHandler}/>
        </React.Fragment>}
  </div>)
}

export default Todo;